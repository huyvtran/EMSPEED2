Ext.define('widget.angular', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',

    angularCode: function (ngVar) {
        angular.module('app')
        .factory(ngVar + 'Service', function ($http, $q) {
            var get = function () {
                var deferred = $q.defer();
                $http.get('http://localhost:88/api/courses').success(deferred.resolve).error(deferred.reject)
                return deferred.promise;
            };
            var name = function () {
                return 'ssss';
            };
            return {
                get: get,
                name: name
            };
        })
        .controller(ngVar + "Controller", ['$scope', '$http', ngVar + 'Service', function ($scope, $http, service) {
            $scope.name = service.name();
            $scope.updated = 0;
            $scope.$watch('name', function (newValue, oldValue) {
                if (newValue === oldValue) { return; } // AKA first run
                $scope.updated++;
            });

            $scope.getWidgets = function () {
                service.get().then(function (result) {
                    $scope.widgets = result;
                    $scope.$apply();
                }, function (reason) {
                    console.log('ERROR', reason);
                });
            };
            $scope.getWidgets();
        }])
    },

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        me.html = '' +
            '<div id="' + me.ngVar + '" ng-controller="' + me.ngVar + 'Controller">' +
                'updated: {{updated}}<br>' +
                'mjg: {{mjg}}<br>' +
                'name: {{name}}  ' +
                '<input ng-model="name" /><br>' +
                '<div ng-repeat="widget in widgets">widgets:{{ widget.name }}</div>' +
            '</div>' +
            '';
    }

});