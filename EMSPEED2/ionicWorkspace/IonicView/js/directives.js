angular.module('ionic.appview.directives', [])

/*.directive('appFrame', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: { 
      app: '='
    },
    template: '<iframe src="about:blank"></iframe>',
    link: function(scope, element, attr){
      var iframe_window = element[0].contentWindow || iframe;
      iframe_window.device = window.device;
      scope.$watch('app', function(value){
        iframe_window.device = window.device;
        element.attr('src', value);
      });
    }  
  };
})*/

.directive('loadingBar', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      'progress': '='
    },
    template: '<div class="bar-container"><div class="bar-inner"></div></div>',
    link: function(scope, element, attr){
      scope.$watch('progress', function(value){
        var innerBar = element.find('div');
        innerBar.css('-webkit-transform', 'translate3d('+value+'%, 0, 0)');
      });
    },
  }
})

.directive('phoneIcon', function(){
  return {
    restrict: 'E',
    replace: true,
    template: '<i class="icon ion-iphone"></i>',
    link: function(scope, element, attr){
      scope.$watch('loaded', function(value){
        if (value === "true"){
          element.addClass('loaded');
        }
        else if (element.hasClass('loaded')){
          element.removeClass('loaded');
        }
      });
    }
  }
})

/*.directive('alert', function(){
  return {
    restrict: 'E',
    scope: {
      content: '='
    },
    replace: true,
    transclude: true,
    link: function(scope, element){
      element.addClass(scope.animation || '');
    },
    template: '<div class="loading-backdrop" ng-class="{enabled: showBackdrop}">' + 
                '<div class="loading" ng-transclude>' +
                '</div>' +
              '</div>'
  };
});*/
