Ext.define('widget.ngdirective', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    statics: {
        angularCode: function (xclass) {
            angularModule = angular.module('app');
            var name = xclass;
            var service = name + 'Service';
            var directive = name;

//*********************************************************** do not modify above this line

        this.addStyles( [
            '.mjg ' +
            '   {' +
            '       background-color:green;' +
            '   }' +
            ''
            //'.bl {background-color:blue;}'
        ]);

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
        .directive(directive, function ($rootScope) {
            return {
                restrict: 'A',
                scope: { widgetdata: '=' },
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
                //'        <a href="#" class="btn btn-default btn-block mjg">{{widgetdata.title}}</a>' +
                '        <a href="#" class="btn btn-default btn-block">View All Alerts</a>' +
                '    </div>' +
                '',
                controller: ['$scope', '$attrs', service, function ($scope, $attrs, service) {
                    $scope.getAlerts = function () {
                        service.get().then(function (result) {
                            $scope.alerts = result;
                            //$scope.$apply();
                        }, function (reason) {
                            console.log('ERROR', reason);
                        });
                    };
                    $scope.getAlerts();
                }],
                link: ['$scope', function ($scope) {
                }]
            };
        });



//*********************************************************** do not modify below this line
        },
        addStyles: function (styles) { this.callParent(arguments); }
    },
},
function (o) {
    var className = o.$className;
    var start = className.indexOf('.');
    var xclass = className.substring(start+1);
    o.angularCode(xclass);
});
