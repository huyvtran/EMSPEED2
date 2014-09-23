angular.module('ionic.appview.services', ['ngResource'])

.factory('AppFileUtil', function($q, HOST_NAME, LoadingScreenService, AppListService, AppListService) {

  var _remove = function(appId, dataDir, zip, all){
    var defer = $q.defer();
    if (zip & all){
      defer.reject('Invalid arguments');
      return defer.promise;
    }

    //remove just the app.zip
    if (zip){
      var zipFilename = appId + '/app.zip';
      dataDir.getFile(zipFilename, null,
        function(file){
          file.remove(
            function(fileEntry){ 
                defer.resolve();
            },
            function(error){ 
                defer.reject(error);
            }
          )
        },
        function(error){
          //file doesn't exist, or can't remove
          defer.reject(error);
        }
      );
    }
    //remove all directories in the data directory
    else if (all) { 
      var dirReader = dataDir.createReader();
      dirReader.readEntries(
        function(entries){
          for (var i=0; i < entries.length; i++){
            if (entries[i].isFile){
              entries[i].remove(null, function(error){ defer.reject(error); });
            }
            else {
              entries[i].removeRecursively(null, function(error){ defer.reject(error); });
            }
          }
          //made it through every file and dir with no errors
          AppListService.updateAll();
          defer.resolve();
        },
        function(error){
          defer.reject(error);  
        }
      );
    }
    //just remove the app directory
    else {
      dataDir.getDirectory(appId, null,
        function(dir){
          dir.removeRecursively(
            function(){
                AppListService.update(appId, false);
                defer.resolve();
            },
            function(error){ 
                defer.reject(error);
            }
          );
        },
        function(error){
          defer.reject(error);
        }
      );
    }

    return defer.promise;
  };

  /*
   *  Three choices: can remove just the app.zip for a given app, or an app 
   *  directory entirely, or all app directories.
   */
  var remove = function(appId, dataDir, zip, all){
    var defer = $q.defer();

    if (dataDir){
      _remove(appId, dataDir, zip, all).then(
        function(){ 
            defer.resolve();
        },
        function(error){ 
            defer.reject(error);
        }
      );
      return defer.promise;
    } 

    //no reference to data directory, have to look it up
    cordova.plugins.fileextras.getDirectoryForPurpose('data', {},
      function(dataDir){
        _remove(appId, dataDir, zip, all).then(
          function(){ 
              defer.resolve();
          },
          function(error){ 
              defer.reject(error);
          }
        );
      },
      //getDirectory fail
      function(error){
        defer.reject(error);
      }
    );

    return defer.promise;
  };

  var getIndexPath = function(appId, dataDir){
    var d = $q.defer();
    var path1 = appId + '/www/index.html';
    var path2 = appId + '/index.html';
    var errPath = 'error.html';

    dataDir.getFile(path1, null, 
      function(){ d.resolve(dataDir.fullPath + '/' + path1); }, //found path1
      function(){
        dataDir.getFile(path2, null,
          function(){ d.resolve(dataDir.fullPath + '/' + path2); }, //found path2
          function(){ d.reject(errPath) } //found neither, error path
        );
      }
    );
   
    return d.promise;
  }
  
  return {
    loadApp: function(appId){
      var defer = $q.defer();
      //DESCEND INTO THE FIERY DEPTHS OF CALLBACK HELL
      cordova.plugins.fileextras.getDirectoryForPurpose('data', {},
        function(dataDir){
          getIndexPath(appId, dataDir).then(
            //file exists, no need to redownload
            function(path){
              LoadingScreenService.setPercentage(1);
              defer.resolve(path);
            },
            //file doesn't exist, need to download it
            function(){
              var zipFilename = dataDir.fullPath + '/' + appId + '/app.zip';
              var uri = encodeURI('https://ionic-apps.s3.amazonaws.com/' + appId + ".zip");
              var fileTransfer = new FileTransfer();

              fileTransfer.onprogress = function(progressEvent){
                if (progressEvent.lengthComputable){
                    var loaded = progressEvent.loaded;
                    LoadingScreenService.setPercentage(loaded / progressEvent.total);
                }
                else {
                    LoadingScreenService.fakeIncrement();
                }
              };

              fileTransfer.download(uri, zipFilename,
                function(file){
                  zip.unzip(file.fullPath, dataDir.fullPath + '/' + appId, 
                    function(){
                      //remove the .zip
                      remove(appId, dataDir, true).catch(function(error){
                        console.log(error);
                      });
                      AppListService.update(appId, true);
                      getIndexPath(appId, dataDir).then(
                        function(path) { defer.resolve(path); },
                        function(path) { defer.resolve(path); } //path will be error.html
                      );
                    }
                  );
                },
                //download fail
                function(error) {
                  defer.reject(error);
                },
                false, 
                {} //HEADERS
              );
            }
          );
        },
        //getDirectoryForPurpose fail
        function(error){
          defer.reject(error);
        }
      );
      return defer.promise;
    },

    clearData: function(){
      return remove(null, null, false, true);
    },

    removeApp: function(appId){
      return remove(appId, null, false, false);
    }
    
  }
})

.factory('AppListService', function($rootScope){
  return {
    update: function(appId, loaded){
      var app = localStorage[appId];
      var appList = localStorage["appList"];
      if (app && appList){
        app = JSON.parse(app);
        appList = JSON.parse(appList);
        app.loaded = loaded;
        app.last_modified = app.server_last_modified;
        appList[app.appId] = app;
        localStorage[app.appId] = JSON.stringify(app);
        localStorage["appList"] = JSON.stringify(appList);
        $rootScope.$broadcast('appList.update');
      }
    },
    updateAll: function(){
      var appList = localStorage["appList"];
      if (appList){
        appList = JSON.parse(appList);
        for (var appId in appList){
          if (appList.hasOwnProperty(appId)){
            var app = appList[appId];
            app.loaded = false;
            localStorage[appId] = JSON.stringify(app);
            appList[appId] = app;
          }
        }
        localStorage["appList"] = JSON.stringify(appList);
        $rootScope.$broadcast('appList.update');
      }
    }
  }
})


.factory('LoadAppModalService', function($state, $ionicModal, $resource, AlertService, BarcodeScanner, LoadingScreenService, HOST_NAME){
 
  var modal;
  $ionicModal.fromTemplateUrl('loadappmodal.html', function(mdl){
    modal = mdl;
    var scope = modal.scope;
    scope.app = {};
    scope.app.appId = '';
    scope.close = function() { modal.hide(); }; 

    scope.scan = function() {
      BarcodeScanner.scan().then(
        function(appId){
          _loadApp(appId); 
        },
        function(error){
          console.log(error);
        }
      );
    };

    var _loadApp = function(appId){
      var app = localStorage[appId];
      //Haven't loaded app before, need to load data and also see if it's valid
      if (!app){
        var appResource = $resource(HOST_NAME + '/api/v1/apps/' + appId);
        appResource.get(
          function(response){
            scope.app.name = response.name;
            scope.app.appId = response.app_id;
            scope.app.last_modified = new Date(response.last_modified);
            localStorage[appId] = JSON.stringify(scope.app); 
            LoadingScreenService.show().then(function(){
              modal.hide();
              $state.go('AppView', {appId: appId});
            });
          },
          function(error){
            if (error.status == 404){
              AlertService.showMsg('Invalid app id or no connection to server.');
              AlertService.hideMsg();
            }
            else if(error.status == 0){
              AlertService.showMsg('No connection');
              AlertService.hideMsg();
            }
            else {
              AlertService.showMsg('Error: ' + error.status);
              AlertService.hideMsg();
            }
          }
        );
      }
      else {
        LoadingScreenService.show().then(function(){
          modal.hide();
          $state.go('AppView', {appId: appId});
        });
      }
    }

    scope.loadApp = function() {
      var appId = scope.app.appId;
      
      if (appId === ''){
        AlertService.showMsg('Please enter an id');
        AlertService.hideMsg();
        return;
      }

      _loadApp(appId);
    }
  }, {
    animation: 'slide-in-up'
  });

  return {
    show: function(){
      modal.show(); 
    },
  }
})

.factory('SettingsModalService', function($http, $state, $ionicModal, AlertService, AppFileUtil, HOST_NAME){
 
  var modal;
  $ionicModal.fromTemplateUrl('settingsmodal.html', function(mdl){
    modal = mdl;
    var scope = modal.scope;
    scope.close = function() { modal.hide(); }; 

    scope.logout = function(){
      $http.get(HOST_NAME + '/logout');
      localStorage.clear();
      localStorage.isAuthenticated = false;
      $state.go('LoginView');
      scope.close();
    };

    scope.clearData = function(){
      AlertService.showMsg("Clearing all app data...");
      AppFileUtil.clearData().then(
        function(){
          AlertService.hideMsg();
        },
        function(error){
          //TODO switch on actual error statuses/codes
          AlertService.showMsg(JSON.stringify(error));
          AlertService.hideMsg();
        }
      );
    }
  }, {
    animation: 'slide-in-up'
  });

  return {
    show: function(){
      modal.show(); 
    }
  }
})

.factory('AlertService', function($rootScope, $document, $compile){

  var msg;
  
  return {
    showMsg: function(message) {
      var opts = {
        content: message,
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0 
      };

      var scope = $rootScope.$new(true);
      angular.extend(scope, opts);

      var existing = angular.element($document[0].querySelector('.loading-backdrop'));
      if(existing.length) {
        scope = existing.scope();
        if(scope.loading) {
          scope.content = message;
          scope.loading.show();
          return;
        }
      }

      // Compile the template
      var element = $compile('<ion-loading>{{content}}</ion-loading>')(scope);

      $document[0].body.appendChild(element[0]);

      var loading = new ionic.views.Loading({
        el: element[0],
        maxWidth: opts.maxWidth,
        showDelay: opts.showDelay
      });

      loading.show();

      scope.loading = loading;
      msg = loading;

    },

    // Hide the loading indicator
    hideMsg: function(){
      setTimeout(function(){
        msg.hide();
      }, 2000);
    }
  }

})

.factory('LoadingScreenService', function($rootScope, $document, $compile, $animate, $q, $timeout, $ionicTemplateLoader, $ionicPlatform){
  var animation = 'custom-fade-in';
  var el, element, scope;
  var updateInProgress = false;

  $ionicTemplateLoader.load('loadingscreen.html').then(function(templateString){
    scope = $rootScope.$new(true);
    scope.data = {};
    scope.data.percentage = "0";
    el = $compile(templateString)(scope)[0];
    element = angular.element(el);
  });

  var hideScreen = function(){
    $animate.removeClass(element, animation, function(){});
    $ionicPlatform.offHardwareBackButton(onHardwareBackButton);
    $timeout(function(){
      scope.data.percentage = "0";
    }, 1000);
  };

  var onHardwareBackButton = function(){
    hideScreen();
  };

  return {
    show: function(){
      var defer = $q.defer();
      $ionicPlatform.onHardwareBackButton(onHardwareBackButton);
      if(!element.parent().length) {
        element.addClass(animation);
        $animate.enter(element, angular.element($document[0].body), null, function(){
          defer.resolve();
        });
      }
      else {
        $animate.addClass(element, animation, function(){
          defer.resolve();
        });
      }
      return defer.promise;
    },

    hide: function(){
      hideScreen(); 
    },

    setPercentage: function(percentage){
      if (!updateInProgress){
        if (percentage == 1){
          scope.data.percentage = "100";
          return;
        }
        updateInProgress = true;
        $timeout(function(){
          scope.data.percentage = Math.round(percentage * 100).toString();
          updateInProgress = false;
        }, 100);
      }
    },
    
    fakeIncrement: function(){
        scope.data.percentage = (parseInt(scope.percentage) + 1).toString();
        scope.$apply();
    }   
  };
})


.factory('BarcodeScanner', function($q){
  
  return {
    scan: function() {
      var defer = $q.defer();

      cordova.plugins.barcodeScanner.scan(
        function (result) {
          defer.resolve(result.text);
        }, 
        function (error) {
          defer.reject(error);
        }
      );
      return defer.promise;
    }
  };
});
