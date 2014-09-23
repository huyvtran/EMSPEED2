Ext.define('widget.ecosummary', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    bodyPadding: 0,
    statics: {
        addStyles: function (styles) { this.callParent(arguments); },
        angularCode: function (xclass) {
            var controller = xclass + 'Controller';
            var service = xclass + 'Service';
            var directive = xclass;

            //*********************************************************** do not modify above this line

            angular.module('app')
            .factory(service, ['$http', '$q', function ($http, $q) {
                var get = function () {
                    var deferred = $q.defer();
                    $http.get('http://localhost:88/api/ecosummary').success(deferred.resolve).error(deferred.reject)
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
                    '            <a ng-click="onClick(eco)" class="list-group-item" ng-repeat="eco in ecosummary">' +
                    //'                <i class="fa fa-{{eco.fa}} fa-fw"></i>' +
                    '                {{eco.text}}' +
                    '                <span class="pull-right text-muted small">' +
                    '                    <em>{{eco.number}}</em>' +
                    '                </span>' +
                    '            </a>' +
                    '        </div>' +
                    '    </div>' +
                    '',
                    controller: ['$scope', service, function ($scope, service) {

                        $scope.onClick = function (eco) {
                            $rootScope.$broadcast('partListChanged', eco);
                        };

                        $scope.getEcoSummary = function () {
                            service.get().then(function (result) {
                                $scope.ecosummary = result;
                                if ($rootScope.$$phase === null) {
                                    $scope.$apply();
                                }
                            }, function (reason) {
                                console.log('ERROR', reason);
                            });
                        };
                        $scope.getEcoSummary();
                    }],
                    link: ['scope', function (scope) {
                    }]
                };
            });



            //*********************************************************** do not modify below this line
        }
    },
},
function (o) {
    var className = o.$className;
    var start = className.indexOf('.');
    var xclass = className.substring(start + 1);
    o.angularCode(xclass);
});


