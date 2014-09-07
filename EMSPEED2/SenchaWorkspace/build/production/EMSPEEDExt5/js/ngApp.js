angular.module('app', []);



//<script>
    //angular.module('app')
    //    //.controller('TestController', function ($scope) { })
    //    .factory('TestService', function ($http, $q) {
    //        var get = function () {
    //            var deferred = $q.defer();
    //            $http.get('http://localhost:88/api/alerts').success(deferred.resolve).error(deferred.reject)
    //            return deferred.promise;
    //        };
    //        return {
    //            get: get
    //        };
    //    })
    //    .directive('wtTest', function () {
    //        return {
    //            restrict: 'AEC',
    //            scope: {},  // use a new isolated scope
    //            replace: true,
    //            template: '' +
    //            '<div ng-repeat="alert in alerts">z{{alert.text}}</div>' +
    //            '',
    //            controller: ['$scope', 'TestService', function ($scope, service) {
    //                $scope.name = 'marc';
    //                $scope.getAlerts = function () {
    //                    service.get().then(function (result) {
    //                        $scope.alerts = result;
    //                        $scope.$apply();
    //                    }, function (reason) {
    //                        console.log('ERROR', reason);
    //                    });
    //                };
    //                $scope.getAlerts();
    //            }],
    //            link: function (scope) {
    //            }
    //        };
    //    });

//</script>