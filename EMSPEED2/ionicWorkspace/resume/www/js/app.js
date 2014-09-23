angular.module('ionicApp', ['ionic', 'angular-carousel', 'ngMockE2E', 'ngCordova'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', { url: '', templateUrl: 'templates/menu.html', abstract: true, controller: 'MainController' })
        .state('main.summary', { url: '/summary', views: { 'main': { templateUrl: 'templates/summary.html', controller: 'summaryController' } } })
        .state('main.carousel', { url: '/carousel', views: { 'main': { templateUrl: 'templates/carousel.html', controller: 'carouselController' } } })
        .state('main.accomplishments', { url: '/accomplishments', views: { 'main': { templateUrl: 'templates/accomplishments.html', controller: 'accomplishmentsController' } } })
        .state('main.companies', { url: '/companies', views: { 'main': { templateUrl: 'templates/companies.html', controller: 'companiesController' } } })
        .state('main.projects', { url: '/projects', views: { 'main': { templateUrl: 'templates/projects.html', controller: 'projectsController' } } })
        .state('main.project', { url: '/project/:projectId', views: { 'main': { templateUrl: 'templates/project.html', controller: 'projectController' } } })
        .state('main.contact', { url: '/contact', views: { 'main': { templateUrl: 'templates/contact.html', controller: 'contactController' } } })
        .state('main.home', { url: '/home', views: { 'main': { templateUrl: 'templates/home.html', controller: 'homeController' } } })
        .state('main.technical', { url: '/technical', views: { 'main': { templateUrl: 'templates/technical.html', controller: 'technicalController' } } })
        .state('main.orientation', { url: '/orientation', views: { 'main': { templateUrl: 'templates/orientation.html', controller: 'orientationController' } } })
        .state('main.tasks', { url: '/tasks', views: { 'main': { templateUrl: 'templates/tasks.html', controller: 'tasksController' } } })
        .state('main.tabs', { url: '/tabs', views: { 'main': { templateUrl: 'templates/tabs.html', controller: 'TabsPageController' } } })
    $urlRouterProvider.otherwise('/home');
}])


.controller('carouselController', ['$scope', '$http', function ($scope, $http) {
}])

.controller('companiesController', ['$scope', '$http', function ($scope, $http) {
    var url = 'http://gusmano.azurewebsites.net/api/companies';
    $http.get(url).then(function (result) {
        $scope.companies = result.data;
    }, function (reason) {
        console.log('ERROR', reason);
    });
}])

.controller('technicalController', ['$scope', '$http', function ($scope, $http) {
    var url = 'http://gusmano.azurewebsites.net/api/technologies';
    $http.get(url).then(function (result) {
        $scope.technologies = result.data;
    }, function (reason) {
        console.log('ERROR', reason);
    });

}])




.controller('homeController', ['$scope', '$cordovaSplashscreen', '$ionicSideMenuDelegate', function ($scope, $cordovaSplashscreen, $ionicSideMenuDelegate) {
//    $cordovaSplashscreen.hide();
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
}])




.controller('contactController', ['$scope', function ($scope) {
}])


.controller('summaryController', ['$scope', function ($scope) {
}])


.controller('accomplishmentsController', ['$scope', function ($scope) {
    $scope.accomplishments = [
        { text: 'BS Business Administration, University Of Illinois, May 1984' },
        { text: 'Microsoft Regional Director in the Midwest District' },
        { text: 'Developing web applications for the past 10 years' },
        { text: 'Speaker at numerous conferences, including Microsoft TechEd' },
        { text: 'Founder/Partner, The Bismarck Group, Chicago, IL' },
        { text: 'Partner, The Information Management Group, Chicago, IL' }
    ];
}])


.factory('projectsService', ['$http', '$q', function ($http, $q) {
    var get = function () {
        var deferred = $q.defer();
        $http.get('http://gusmano.azurewebsites.net/api/projects').success(deferred.resolve).error(deferred.reject)
        return deferred.promise;
    };
    return {
        get: get
    };
}])
.controller('projectsController', function ($scope, projectsService) {
    $scope.getProjects = function () {
        projectsService.get().then(function (result) {
            $scope.projects = result;
        }, function (reason) {
            console.log('ERROR', reason);
        });
    };
    $scope.getProjects();
})

.controller('projectController', function ($scope, $stateParams, $http, $rootScope, $ionicPlatform, $state, $ionicViewService, $ionicModal) {


    $scope.open = function () {
        var ref = window.open($scope.project.url, '_blank', 'location=yes');
    }


    // Backbutton a home
    //=================================================
    if (!$rootScope.$viewHistory.backView) {
        $scope.backButton = $ionicPlatform.registerBackButtonAction(function () {
            $ionicViewService.nextViewOptions({ disableBack: true });
            $state.go('home');
        }, 105);
        $scope.$on('$destroy', $scope.backButton);
    }

    var url = '/api/project/' + $stateParams.projectId;
    $http.get(url).then(function (result) {
        $scope.project = result.data;
    }, function (reason) {
        console.log('ERROR', reason);
    });


    $ionicModal.fromTemplateUrl('templates/projectdetail.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });

    $scope.showSource = function () {
        $scope.modal.show();
    }



})



//.controller('projectsController', ['$scope', function ($scope) {
//    $scope.projects = [
//        { id: 'EMSPEED', name: 'EMSPEED' },
//        { id: 'EMSPEED', name: 'EMSPEED' },
//        { id: 'EMSPEED', name: 'EMSPEED' },
//        { id: 'EMSPEED', name: 'EMSPEED' },
//        { id: 'EMSPEED', name: 'EMSPEED' },
//        { id: 'EMSPEED', name: 'EMSPEED' }
//    ];
//}])

//.controller('projectController', ['$scope', '$stateParams', function ($scope, $stateParams) {

//    alert($stateParams.projectId);
//}])

.controller('orientationController', function ($scope, $timeout, $cordovaDeviceOrientation, $ionicModal) {

    var options = { frequency: 1000 }; // Update every 1 seconds

    $scope.getHeading = function () {
        $cordovaDeviceOrientation
        .getCurrentHeading()
        .then(function (position) {
            $scope.heading = position;
        }, function (err) {
            $scope.msg = err.message;
        });
    };


    $scope.watchHeading = function () {
        $scope.this_watch = $cordovaDeviceOrientation.watchHeading(options);

        $scope.this_watch.promise.then(function () { /* unused */
        },
        function (err) {
            $scope.msg = err.message
        }, function (position) {
            $timeout(function () {
                $scope.heading = position;
            })
        });
    };

    $scope.clearWatch = function () {
        $cordovaDeviceOrientation
        .clearWatch($scope.this_watch.watchId)
        .then(function (result) {
            // Success!
        }, function (err) {
            // An error occured. Show a message to the user
        });
    };


    /*
    Ionic modal with source code
    */

    $ionicModal.fromTemplateUrl('templates/deviceOrientation-source.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });

    $scope.showSource = function () {
        $scope.modal.show();
    }
})



    .controller('tasksController', ['$scope', '$ionicModal', function ($scope, $ionicModal) {
        $scope.tasks = [];

        $ionicModal.fromTemplateUrl('templates/new.html',
            function (modal) {
                $scope.taskModal = modal;
            },
            {
                scope: $scope,
                animation: 'slide-in-up'
            }
        );

        // Called when the form is submitted
        $scope.createTask = function (task) {
            $scope.tasks.push({
                title: task.title
            });
            $scope.taskModal.hide();
            task.title = "";
        };

        // Open our new task modal
        $scope.newTask = function () {
            $scope.taskModal.show();
        };

        // Close the new task modal
        $scope.closeNewTask = function () {
            $scope.taskModal.hide();
        };



    }])



.factory('alertsService', ['$http', '$q', function ($http, $q) {
    var get = function () {
        var deferred = $q.defer();
        $http.get('http://localhost:88/api/alerts').success(deferred.resolve).error(deferred.reject)
        return deferred.promise;
    };
    return {
        get: get
    };
}])
.controller('alertsController', function ($scope, alertsService) {
    $scope.getAlerts = function () {
        alertsService.get().then(function (result) {
            $scope.alerts = result;
        }, function (reason) {
            console.log('ERROR', reason);
        });
    };
    $scope.getAlerts();
})
.directive('alertsDirective', function ($rootScope) {
    return {
        restrict: 'A',
        scope: { widgetdata: '=' },
        replace: true,
        template: '' +
        '' +
        '',
        controller: ['$scope', '$attrs', alertsService, function ($scope, $attrs, alertsService) {
            $scope.getAlerts = function () {
                alertsService.get().then(function (result) {
                    $scope.alerts = result;
                    //$scope.$apply();
                }, function (reason) {
                    console.log('ERROR', reason);
                });
            };
            $scope.getAlerts();
        }],
        link: ['$scope', function ($scope) {
        }]
    };
})
.controller('sidemenuController', function ($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

})
    .controller('MainController', ['$scope', function ($scope) {
        $scope.toggleMenu = function () {
            $scope.sideMenuController.toggleLeft();
        }
    }])

    .controller('EntryPageController', ['$scope', '$state', function ($scope, $state) {
        $scope.navTitle = 'Entry Page';

        $scope.signIn = function () {
            $state.go('main.home');
        }
    }])



    .controller('InfoPageController', ['$scope', '$state', function ($scope, $state) {
        $scope.navTitle = 'Info Page';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function (e) {
                $scope.toggleMenu();
            }
        }];
    }])

    .controller('TabsPageController', ['$scope', '$state', function ($scope, $state) {
        $scope.navTitle = 'Tab Page';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function (e) {
                $scope.toggleMenu();
            }
        }];
    }])

.run(['$templateCache', '$ionicPlatform', '$cordovaSplashscreen', function ($templateCache, $ionicPlatform, $cordovaSplashscreen) {

        $ionicPlatform.ready(function() {
            setTimeout(function() {
                //navigator.splashscreen.hide();
                $cordovaSplashscreen.hide();
            }, 100);
        });

    //debugger;
    ////var $rootScope = angular.element(document.querySelectorAll("ion-nav-view")[0]).injector().get('$rootScope');

    //$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    //    console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
    //});

    //$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
    //    console.log('$stateChangeError - fired when an error occurs during transition.');
    //    console.log(arguments);
    //});

    //$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    //    console.log('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.');
    //});

    //$rootScope.$on('$viewContentLoaded', function (event) {
    //    console.log('$viewContentLoaded - fired after dom rendered', event);
    //});

    //$rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
    //    console.log('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
    //    console.log(unfoundState, fromState, fromParams);
    //});








    $templateCache.put("templates2/home.html",
'<ion-header-bar class="bar-positive" ng-controller="sidemenuController">' +
'    <div class="button button-clear" ng-click="toggleLeft()"><i class="icon ion-navicon"></i></div>' +
'    <h1 class="title">Home2</h1>' +
'</ion-header-bar>' +
'<ion-view>' +
'    <ion-content has-header="true" padding="true">' +
'        <h1>Home Page!</h1>' +
'        <a ui-sref="main.info" class="button button-positive">Info</a>' +
'        <a ui-sref="main.tabs" class="button button-positive">Tabs</a>' +
'    </ion-content>' +
'</ion-view>'
    );

}])
