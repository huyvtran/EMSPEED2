Ext.define('widget.nganimate', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    statics: {
        angularCode: function (xclass) {
            var controller = xclass + 'Controller';
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
            .controller(controller, ['$scope', function ($scope) { }])
            .factory(service, ['$http', '$q', function ($http, $q) {
            }])
            .directive(directive, function () {
                return {
                    restrict: 'A',
                    scope: { widgetdata: '=' },
                    replace: true,
                    template: '' +
                    '<div ng-init="on=true">' +
                    '   <button ng-click="on=!on">Toggle On/Off</button>' +
                    '   <div class="my-special-animation" ng-if="on">' +
                    '       This content will enter and leave' +
                    '   </div>' +
                    '</div>' +
                    '',
                    controller: ['$scope', service, function ($scope, service) {
                    }],
                    link: ['scope', function (scope) {
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
    var xclass = className.substring(start + 1);
    o.angularCode(xclass);
});
