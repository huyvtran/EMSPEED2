(function () {

    var myTitleDirective = function () {
        var directive = {};
        directive.restrict = 'AEC'; /* restrict this directive to attributes, elements and classes */
        directive.template = "<h1>My first directive: {{ title }}</h1>";
        return directive;
        //return {
        //    template: 'Name: title Address: title'
        //};
    };

    var module = angular.module('githubViewer');
    module.directive("mgtitle", myTitleDirective);

}());