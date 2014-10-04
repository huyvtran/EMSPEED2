angular.module('app', ['ngAnimate', 'ui.grid', 'ui.grid.selection', 'ngMockE2E'])
.controller('widgetController', ['$scope', function ($scope) { }])
.factory('mgService', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
    var broadcast = function (event, parm) {
        EMSPEEDExt5.eventManager.fireEvent(event, parm);
        $rootScope.$broadcast(event, parm);
        //var deferred = $q.defer();
        //$http.get('http://localhost:88/api/alerts').success(deferred.resolve).error(deferred.reject)
        //return deferred.promise;
    };

    var subscribe = function ($scope, event, callback) {
        $scope.$on(event, callback);
    };

    return {
        broadcast: broadcast,
        subscribe: subscribe
    };
}]);