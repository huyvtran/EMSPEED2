(function () {

    var MainController = function ($scope, $interval, $location, githubService) {

        $scope.myData = [{ name: "Moroni", age: 50 },
                         { name: "Tiancum", age: 43 },
                         { name: "Jacob", age: 27 },
                         { name: "Nephi", age: 29 },
                         { name: "Enos", age: 34 }];

        $scope.gridOptions = { data: 'myData' };



        $scope.title = "main";

        var decrementCountdown = function () {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }

        };

        var countdownInterval = null;
        var startCountdown = function () {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function (username) {
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            githubService.setIt('main');

            $location.path("/user/" + username);
        }

        $scope.username = "angular";
        $scope.countdown = 5;
        startCountdown();
    }

    var module = angular.module('githubViewer');
    module.controller("MainController", ["$scope", "$interval", "$location", "githubService", MainController]);

}());