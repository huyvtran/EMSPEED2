(function () {
    var app = angular.module('githubViewer', ["ngRoute", "ngGrid"]);


    //config(['$routeProvider', function ($routeProvider) {
    //    $routeProvider.when('/view1', { templateUrl: 'partials/partial1.html', controller: 'MyCtrl1' });
    //    $routeProvider.when('/view2', { templateUrl: 'partials/partial2.html', controller: 'MyCtrl2' });
    //    $routeProvider.otherwise({ redirectTo: '/view1' });
    //}]);


    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "views/main.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "views/user.html",
                controller: "UserController"
            })

            .otherwise({
                redirectTo: "/main"
            })

    });

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

}()); //iffy