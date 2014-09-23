angular.module('ionic.appview', ['ionic', 'ionic.appview.services', 'ionic.appview.directives', 'ionic.appview.config', 'ngAnimate', 'ngResource', 'ngCookies'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider){
  $stateProvider
    .state('LoginView',
    {
      url: '/',
      templateUrl: "login.html",
      controller: "LoginCtrl"
    })
    .state('UserAppsView',
    {
      url: '/userapps',
      templateUrl: "userapps.html",
      controller: "UserAppsCtrl"
    })
    .state('AppView',
    {
      url: '/viewapp/:appId',
      templateUrl: "viewapp.html",
      controller: "ViewAppCtrl"
    })

    $urlRouterProvider.otherwise('/');
    $httpProvider.defaults.withCredentials = true;
})

.run(function($rootScope){
  if (!localStorage.isAuthenticated) localStorage.isAuthenticated = false;
})

.controller('LoginCtrl', function($scope, $rootScope, $http, $cookies, $state, $ionicPlatform, LoadAppModalService, HOST_NAME) {

  $scope.form = {};

  /*
  $ionicPlatform.ready(function() {
    if (device.platform === 'iOS'){
      //doesn't work Keyboard.shrinkView(true);
      //doesn't work either Keyboard.hideFormAccessoryBar(true);
      if (parseFloat(device.version) >= 7.0){
        StatusBar.styleDefault();
      }
    } 
  });
  */

  if (localStorage.isAuthenticated == "true") {
    $state.go('UserAppsView');
  }

  $scope.login = function(){
    $http({method: 'POST', url: HOST_NAME + '/api/v1/login', headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      },
      data: {
        username: $scope.form.email,
        password: $scope.form.pass,
      }
    }).success(function(data, status, headers, config){
      // Invalid login credentials should return back to the cached login page
      if (headers().expires) {
        $scope.form.error = "Invalid credentials";
      } else {
        localStorage.isAuthenticated = true;
        $state.go('UserAppsView');
      }
    }).error(function(data, status, headers, config){
      if (status == 401){
        $scope.form.error = "Invalid credentials";
      }
    });
  };

  $scope.openLoadModal = LoadAppModalService.show;

})

.controller('UserAppsCtrl', function($scope, $rootScope, $resource, $http, $compile, $timeout, $state, $q, HOST_NAME, $ionicPlatform, $ionicModal, $ionicTemplateLoader, $ionicViewService, LoadAppModalService, SettingsModalService, AppFileUtil, LoadingScreenService, AlertService){

  $scope.headerTitle = "Your Apps";  

  $scope.rightButtons = [
    { 
      type: 'modal-button button-positive',
      content: '<i class="icon ion-plus"></i>',
      tap: function(e) {
        $scope.openLoadAppModal();
      }
    },
    { 
        type: 'modal-button button-positive',
        content: '<i class="icon ion-gear-a"></i>',
        tap: function(e) {
          $scope.openSettingsModal();
        }
    }
  ];

  var loadUserApps = function(firstTime){
    var defer = $q.defer();
    if (firstTime) $scope.userApps = {};
    $scope.getUserApps.query(
      function(response){ 
        for (var i = 0; i < response.length; i++){
          var app = {};
          app.name = response[i].name;
          app.appId = response[i].app_id;
          app.server_last_modified = new Date(response[i].last_modified);
          if (firstTime){
            app.loaded = false;
          }
          else {
            var prevApp = localStorage[app.appId];
            app.loaded = prevApp ? JSON.parse(prevApp).loaded : false;
          }
          $scope.userApps[app.appId] = app;
          localStorage[app.appId] = JSON.stringify(app);  
        }
        localStorage["appList"] = JSON.stringify($scope.userApps);
        defer.resolve();
      },
      function(error){
        if (error.status === 403){
          localStorage.isAuthenticated = false;
          $state.go('LoginView');
          defer.reject("Please login");
        }
        if (error.status === 0 || error.status === 404){
          defer.reject("Connection error");
        } 
        defer.reject("There was an error");
      }
    );
    return defer.promise;
  }

  $rootScope.$on('appList.update', function(){
    $scope.userApps = JSON.parse(localStorage["appList"]);
  })

  $scope.getUserApps = $resource(HOST_NAME + '/api/v1/apps');
  var appList = localStorage["appList"];
  $scope.userApps = appList ? JSON.parse(appList) : null;
  
  //load the list of apps for the first time
  if (!localStorage["appList"]){
    loadUserApps(true).catch(function(error){
      AlertService.showMsg(error);
      AlertService.hideMsg();
    });
  }

  $scope.loadApp = function(appId){
    LoadingScreenService.show().then(function(){
      $ionicPlatform.offHardwareBackButton(onHardwareBackButton);
      $state.go('AppView', {appId: appId});
    });
  }

  $scope.reloadAppList = function(){
    loadUserApps(false).then(
      function(){
        $scope.$broadcast('scroll.refreshComplete');
      },
      function(error){
        $scope.$broadcast('scroll.refreshComplete');
        AlertService.showMsg(error);
        AlertService.hideMsg();
      }
    );
  }

  $scope.openLoadAppModal = function(){
    $ionicPlatform.offHardwareBackButton(onHardwareBackButton);
    LoadAppModalService.show(); 
  }
  $scope.openSettingsModal = function(){
    $ionicPlatform.offHardwareBackButton(onHardwareBackButton);
    SettingsModalService.show();
  }

   var exitApp = function(){
    $ionicPlatform.offHardwareBackButton(onHardwareBackButton);
    navigator.app.exitApp();
  };

  var onHardwareBackButton = function(){
    exitApp();
  };

  $ionicPlatform.onHardwareBackButton(onHardwareBackButton);

})

.controller('ViewAppCtrl', function($scope, $rootScope, $http, $q, $stateParams, $resource, $state, $q, HOST_NAME, LoadAppModalService, LoadingScreenService, AppFileUtil, AlertService) {

  var appId = $stateParams.appId;
  var getApp = $resource(HOST_NAME + '/api/v1/apps/' + appId);


  //Get App info
  $scope.app = JSON.parse(localStorage[appId]);

  $rootScope.$on('appList.update', function(){
    $scope.app = JSON.parse(localStorage[appId]);
  })

  var reloadFrame = function(root){
    var frame = document.querySelector('.frame');
    frame.setAttribute('src', 'about:blank');
    frame.innerHTML = '';
    frame.parentElement.removeChild(frame);  
    var newFrame = document.createElement('iframe');
    newFrame.setAttribute('src', root);
    newFrame.setAttribute('class', 'frame');
    document.getElementById('frameContainer').appendChild(newFrame);
  };

  $scope.ctrlApp =  '';

  AppFileUtil.loadApp(appId).then(
    function(indexPath){
      reloadFrame(indexPath); 
      //$scope.ctrlApp = indexPath; 
      LoadingScreenService.hide();
    },
    function(error){
      LoadingScreenService.hide();
      if (error.code && error.code === 3){
        AlertService.showMsg("No connection, unable to download app.");
      }
      else {
        AlertService.showMsg("There was an error downloading the app.");
      }
      AlertService.hideMsg();
    }
  ); 

  var err = false;
  $scope.reload = function(){
    //Only redownload if there are any changes
    getApp.get(
      function(response){
        if (response.last_modified !== $scope.app.last_modified){
          LoadingScreenService.show()
          //remove the old app
          .then(
            function(){
              reloadFrame('about:blank'); 
              return AppFileUtil.removeApp(appId);
            },
            null //LoadingScreenService never returns an error 
          )
          //download the new one
          .then(
            function(){
              return AppFileUtil.loadApp(appId);
            },
            function(error){
              //FileError
              if (error.code && error.code === 1){
                //File doesn't exist, possibly due to previous connectivity issues
                return AppFileUtil.loadApp(appId);
              }
              LoadingScreenService.hide();
              AlertService.showMsg("Error removing old version. Error code: " + (error.code ? error.code : 0));
              AlertService.hideMsg();
              err = true;
            }
          )
          //set the iframe src
          .then(
            function(indexPath){
              if (err) return;
              //$scope.ctrlApp = indexPath; 
              reloadFrame(indexPath);
              $scope.toggleSide();
              LoadingScreenService.hide();
            },
            function(error){
              LoadingScreenService.hide();
              //this is a Cordova FileTransferError
              if (error.code && error.code === 3){
                AlertService.showMsg("No connection, unable to download app.");
              }
              else {
                AlertService.showMsg("There was an error downloading the app.");
              }
              AlertService.hideMsg();
            }
          );
        } else {
          AlertService.showMsg("Currently up to date.");
          AlertService.hideMsg();
        }
      },
      function(error){
        if (error.status === 0 || error.status === 404){
          AlertService.showMsg("No connection, unable to download app.");
          AlertService.hideMsg();
        }
      }
    );
  }

  $scope.exit = function() {
    if (localStorage.isAuthenticated == "true"){
      $state.go('UserAppsView');
    }
    else {
      $state.go('LoginView');
      LoadAppModalService.show();
    }
  };

  $scope.removeApp = function(){
    LoadingScreenService.show().then(
      function(){
        reloadFrame('about:blank'); 
        return AppFileUtil.removeApp(appId);
      },
      null
    ).then(
      function(){
        LoadingScreenService.hide();
        $scope.exit();
      },
      function(error){
        //FileError
        LoadingScreenService.hide();
        if (error.code && error.code === 1){
          AlertService.showMsg("Error removing app files: Files don't exist");
        }
        else {
          AlertService.showMsg("Error removing appfiles. Error code: " + (error.code ? error.code : 0));
        }
        AlertService.hideMsg();
      }
    )
  }

  $scope.toggleSide = function(){
    $scope.sideMenuController.toggleLeft();
  };

});






