(function () {

    var FooterController = function ($scope) {
        $scope.title = "The Footer";
    };

    var module = angular.module('githubViewer');
    module.controller("FooterController", ["$scope", FooterController]);

}());