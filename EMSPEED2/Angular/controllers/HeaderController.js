(function () {

    var HeaderController = function ($scope) {
        $scope.title = "The Title";
    };

    var module = angular.module('githubViewer');
    module.controller("HeaderController", ["$scope", HeaderController]);

}());