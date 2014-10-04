Ext.define('widget.ngbroadcast', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    statics: {
        angularCode: function (xclass) {
            var service = xclass + 'Service';
            var directive = xclass;

            //*********************************************************** do not modify above this line


            angular.module('app')
            .factory(service, ['$http', '$q', function ($http, $q) {
            }])
            .directive(directive, ['mgService', function (mgService) {
                return {
                    restrict: 'A',
                    scope: { widgetdata: '=' },
                    replace: false,
                    template: '' +
                    '<div ng-init="on=true">' +
                    '   <button ng-click="onClick()">Broadcast current time</button>' +
                    '</div>' +
                    '',
                    controller: ['$scope', service, function ($scope, service) {
                        $scope.onClick = function () {
                            var currentdate = new Date();
                            var datetime = "Current Time: "
                                            + (currentdate.getMonth() + 1) + "/"
                                            + currentdate.getDate() + "/"
                                            + currentdate.getFullYear() + " @ "
                                            + currentdate.getHours() + ":"
                                            + currentdate.getMinutes() + ":"
                                            + currentdate.getSeconds();
                            mgService.broadcast('currentTime', datetime);
                        }
                    }],
                    link: ['scope', function (scope) {
                    }]
                };
            }]);



            //*********************************************************** do not modify below this line
        },
        addStyles: function (styles) { this.callParent(arguments); }
    },
},
function (o) {
    var className = o.$className;
    var start = className.indexOf('.');
    var xclass = className.substring(start + 1);
    o.angularCode(xclass);
});
