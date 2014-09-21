angular.module('starter', ['ionic'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      //.state('app.todos', { abstract: true, url: '/todos', views: { todos: { template: '<ion-nav-view></ion-nav-view>' } } })
      //.state('app', { abstract: true,  templateUrl: "templates/menu.html"  })
      .state('app', { abstract: false, templateUrl: "home.html" })
      .state('app.todos', { url: '/todos', views: { 'todosNavView': { templateUrl: 'templates/todos.html', controller: 'todosController' } } })
      //.state('homeSref', { url: '/home', views: { 'homeNavView': { templateUrl: "home.html" } } })
      .state('helpSref', { url: '/help', views: { 'helpNavView': { templateUrl: "help.html" } } })
      .state('search', { url: "/search", abstract: false, templateUrl: "templates/search.html", controller: 'mainController' })
      //.state('app.search', { url: "/search", views: { 'menuContent': { templateUrl: "templates/search.html" } } })
    $urlRouterProvider.otherwise('/todos');
})
.controller('todosController', function ($scope) {
    $scope.todos = [
        { title: "Take out the trash", done: true },
        { title: "Do laundry", done: false },
        { title: "Start cooking dinner", done: false }
    ]
})
.controller('mainController', ['$scope', '$ionicSideMenuDelegate', '$ionicTabsDelegate', function ($scope, $ionicSideMenuDelegate, $ionicTabsDelegate) {
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
        //alert('clicked');
    };

    $scope.selectTabWithIndex = function (index) {
        $ionicTabsDelegate.select(index);
    }
}])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
