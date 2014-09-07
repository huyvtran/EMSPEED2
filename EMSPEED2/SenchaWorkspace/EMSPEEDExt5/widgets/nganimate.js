Ext.define('widget.nganimate', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    angularCode: function (ngVar) {
        angular.module('app')
        .factory(ngVar + 'Service', ['$http', '$q', function ($http, $q) {
            var get = function () {
                var deferred = $q.defer();
                $http.get('http://localhost:88/api/alerts').success(deferred.resolve).error(deferred.reject)
                return deferred.promise;
            };
            return {
                get: get
            };
        }])
        .directive('wt' + ngVar, function () {
            return {
                restrict: 'A',
                scope: {},  // use a new isolated scope
                replace: true,
                template: '' +
                '    <div class="panel-body">' +
                '        <div class="list-group" >' +
                '            <a href="#" class="list-group-item" ng-repeat="alert in alerts">' +
                '                <i class="fa fa-{{alert.fa}} fa-fw"></i> {{alert.text}}' +
                '                <span class="pull-right text-muted small">' +
                '                    <em>{{alert.time}}</em>' +
                '                </span>' +
                '            </a>' +
                '        </div>' +
                '        <a href="#" class="btn btn-default btn-block">View All Alerts</a>' +
                '    </div>' +
                '',
                controller: ['$scope', ngVar + 'Service', function ($scope, service) {
                    $scope.getAlerts = function () {
                        service.get().then(function (result) {
                            $scope.alerts = result;
                            $scope.$apply();
                        }, function (reason) {
                            console.log('ERROR', reason);
                        });
                    };
                    $scope.getAlerts();
                }],
                link: ['scope', function (scope) {
                }]
            };
        });
    }
});