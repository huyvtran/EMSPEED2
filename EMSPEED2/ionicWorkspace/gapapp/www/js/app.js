angular.module('myApp', ['fsCordova'])
.directive('mjg', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'A',
        scope: { widgetdata: '=' },
        replace: true,
        template: '<div>hi<p style="background-color:{{color}}">{{text}}</p></div>',
        controller: ['$scope', function ($scope) {
            $scope.color = 'blue';
            $scope.text = 'marc;'
        }],
        link: function (scope, elem, attrs) {
        //    elem.bind('click', function () {
        //        elem.css('background-color', 'red');
        //        scope.$apply(function () {
        //            scope.color = "red";
        //        });
        //    });
        //    elem.bind('mouseover', function () {
        //        elem.css('cursor', 'pointer');
        //    });
        }
    };
}]);

var onDeviceReady = function () {
    alert('deviceready');
    angular.bootstrap(document, ['myApp']);
}
document.addEventListener('deviceready',onDeviceReady);