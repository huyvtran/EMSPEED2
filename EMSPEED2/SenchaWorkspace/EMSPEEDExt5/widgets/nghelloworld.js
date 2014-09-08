Ext.define('widget.nghelloworld', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    statics: {
        addStyles: function (styles) { this.callParent(arguments); },
        angularCode: function (xclass) {
            var controller = xclass + 'Controller';
            var service = xclass + 'Service';
            var directive = xclass;

            //*********************************************************** do not modify above this line


            angular.module('app')
            .factory(service, ['$http', '$q', function ($http, $q) { }])
            .directive(directive, function () {
                return {
                    restrict: 'A',
                    scope: { widgetdata: '=' },
                    replace: true,
                    template: '<p style="background-color:{{color}}">{{widgetdata.text}}</p></div>',
                    controller: ['$scope', service, function ($scope, service) {
                    }],
                    //link: function (scope, elem, attrs) {
                    //    elem.bind('click', function () {
                    //        elem.css('background-color', 'red');
                    //        scope.$apply(function () {
                    //            scope.color = "red";
                    //        });
                    //    });
                    //    elem.bind('mouseover', function () {
                    //        elem.css('cursor', 'pointer');
                    //    });
                    //}
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


