Ext.define('widget.ionic', {
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
                    '<div class="card">' +
                    '  <div class="item item-text-wrap">' +
                    '    This is a basic Card which contains an item that has wrapping text.' +
                    '  </div>' +
                    '</div>' +
                    '',
                    controller: ['$scope', service, function ($scope, service) {
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


