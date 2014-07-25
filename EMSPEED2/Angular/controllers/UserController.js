(function () {

    var UserController = function ($scope, $routeParams, githubService ) {

        var onRepos = function (data) {
            $scope.repos = data;
        };

        var onUserComplete = function (data) {
            $scope.user = data;
            githubService.getRepos($scope.user).then(onRepos, onError)
        };

        var onError = function (reason) {
            $scope.error = "Error occurred";
        }

        var search = function (username) {
            githubService.getUser(username).then(onUserComplete, onError)
        }
        $scope.username = $routeParams.username;
        console.log(githubService.getIt());

        search($scope.username);

    }

    var module = angular.module('githubViewer');
    //module.controller("UserController", ["$scope", "githubService", "$routeParams", UserController]);
    module.controller("UserController", UserController);

}());