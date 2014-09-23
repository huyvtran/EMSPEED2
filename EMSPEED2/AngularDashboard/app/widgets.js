(function () {

    //angular.module('widgets', ['ngGrid', 'nvd3ChartDirectives'])
    angularModule = angular.module('widgets', []);

    /*******************************************/
    var name = 'wtMjg';
    var service = name + 'Service';
    var directive = name;
    angularModule
    .factory(service, ['$http', '$q', function ($http, $q) {
        var get = function () {
            var deferred = $q.defer();
            $http.get('http://localhost:88/api/alerts').success(deferred.resolve).error(deferred.reject)
            return deferred.promise;
        };
        return {
            get: get
        };
    }])
    .directive(directive, ['$rootScope', '$log', function ($rootScope, $log) {
        return {
            restrict: 'A',
            scope: {},
            replace: true,
            template: '' +
            '    <div class="panel-body">' +
            '        <div class="list-group" >' +
            '            <a href="#" class="list-group-item" ng-repeat="item in items">' +
            '                <i class="fa fa-{{item.fa}} fa-fw"></i> {{item.text}}' +
            '                <span class="pull-right text-muted small">' +
            '                    <em>{{item.time}}</em>' +
            '                </span>' +
            '            </a>' +
            '        </div>' +
            '        <a href="#" class="btn btn-default btn-block">View All Alerts</a>' +
            '    </div>' +
            '',
            controller: ['$scope', '$attrs', service, function ($scope, $attrs, service) {
                $scope.getAlerts = function () {
                    service.get().then(function (result) {
                        $scope.items = result;
                        //$scope.$apply();
                    }, function (reason) {
                        console.log('ERROR', reason);
                    });
                };
                $scope.getAlerts();

                //scope.name = 'marc';
                //scope.items = [
                //    { fa: 'comment', text: 'New Comment', time: '4 minutes ago' },
                //    { fa: 'twitter', text: '3 New Followers', time: '12 minutes ago' },
                //    { fa: 'envelope', text: 'Message Sent', time: '12 minutes ago' },
                //    { fa: 'tasks', text: '3 New Followers', time: '27 minutes ago' },
                //    { fa: 'upload', text: 'New Task', time: '43 minutes ago' },
                //    { fa: 'bolt', text: 'Server Rebooted', time: '11:32 AM' },
                //    { fa: 'warning', text: 'Server Not Responding', time: '10:57 AM' },
                //    { fa: 'shopping-cart', text: 'New Order Placed', time: '9:49 AM' },
                //    { fa: 'money', text: 'Payment Received', time: 'Yesterday' }
                //];
            }],
            link: function (scope) {
            }
        };
    }]);
    /*******************************************/

    /*******************************************/
    var name = 'wtAnother';
    var service = name + 'Service';
    var directive = name;
    angularModule
    .factory(service, ['$http', '$q', function ($http, $q) {
        var get = function () {
            var deferred = $q.defer();
            $http.get('http://localhost:88/api/alerts').success(deferred.resolve).error(deferred.reject)
            return deferred.promise;
        };
        return {
            get: get
        };
    }])
    .directive(directive, ['$rootScope', '$log', function ($rootScope, $log) {
        return {
            restrict: 'A',
            scope: {},
            replace: true,
            template: '' +
            '    <div class="panel-body">' +
            '        <div class="list-group" >' +
            '            <a href="#" class="list-group-item" ng-repeat="item in items">' +
            '                <i class="fa fa-{{item.fa}} fa-fw"></i> another {{item.text}}' +
            '                <span class="pull-right text-muted small">' +
            '                    <em>{{item.time}}</em>' +
            '                </span>' +
            '            </a>' +
            '        </div>' +
            '        <a href="#" class="btn btn-default btn-block">View All Alerts</a>' +
            '    </div>' +
            '',
            controller: ['$scope', '$attrs', service, function ($scope, $attrs, service) {
                $scope.getAlerts = function () {
                    service.get().then(function (result) {
                        $scope.items = result;
                        //$scope.$apply();
                    }, function (reason) {
                        console.log('ERROR', reason);
                    });
                };
                $scope.getAlerts();

                //scope.name = 'marc';
                //scope.items = [
                //    { fa: 'comment', text: 'New Comment', time: '4 minutes ago' },
                //    { fa: 'twitter', text: '3 New Followers', time: '12 minutes ago' },
                //    { fa: 'envelope', text: 'Message Sent', time: '12 minutes ago' },
                //    { fa: 'tasks', text: '3 New Followers', time: '27 minutes ago' },
                //    { fa: 'upload', text: 'New Task', time: '43 minutes ago' },
                //    { fa: 'bolt', text: 'Server Rebooted', time: '11:32 AM' },
                //    { fa: 'warning', text: 'Server Not Responding', time: '10:57 AM' },
                //    { fa: 'shopping-cart', text: 'New Order Placed', time: '9:49 AM' },
                //    { fa: 'money', text: 'Payment Received', time: 'Yesterday' }
                //];
            }],
            link: function (scope) {
            }
        };
    }]);
    /*******************************************/


}());
