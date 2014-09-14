Ext.define('widget.nganimate', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    statics: {
        angularCode: function (xclass) {
            var service = xclass + 'Service';
            var directive = xclass;

            //*********************************************************** do not modify above this line


            this.addStyles([
                '.my-special-animationx.ng-enter {' +
                '   -webkit-transition: 0.5s linear all;' +
                '   transition: 0.5s linear all;' +
                '   background: red;' +
                '}' +
                '.my-special-animation.ng-enter {' +
                '   -webkit-animation: fadeInRight 0.5s;' +
                '   animation: fadeInRight 0.5s;' +
                '}' +
                '',
                '.bl {background-color:blue;}'
            ]);

            angular.module('app')
            .factory(service, ['$http', '$q', function ($http, $q) {
            }])
            .directive(directive, ['$rootScope', function ($rootScope) {
                return {
                    restrict: 'A',
                    scope: { widgetdata: '=' },
                    replace: false,
                    template: '' +
                    '<div ng-init="on=true">' +
                    '   <button ng-click="on=!on">Toggle On/Off</button>' +
                    '   <button ng-click="onClick()">Click</button>' +
                    '   <div class="my-special-animation" ng-if="on">' +
                    '       This content will enter and leave' +
                    '   </div>' +
                    '</div>' +
                    '',
                    controller: ['$scope', service, function ($scope, service) {
                        $scope.onClick = function () {
                            $rootScope.$broadcast('projectId', '12345');
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
