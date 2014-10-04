'use strict';
angular.module('app', ['ngRoute', 'dashboard', 'widgets', 'models', 'ngMockE2E', 'app.activity', 'app.navigation'])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: 'views/dashboard.html', controller: 'DashboardController', title: 'Dashboard' })
    .when('/reporting', { templateUrl: 'views/reporting.html', xcontroller: 'DashboardController', title: 'Reporting' })
    .otherwise({ redirectTo: '/' });
})
.factory('widgetDefinitions', function () {
    return [
        { name: 'notification', directive: 'wt-notification' },
        { name: 'barchart', directive: 'wt-bar-chart' },
        { name: 'piechart', directive: 'wt-pie-chart' }
];
})
.value('defaultWidgets', [
    { name: 'notification', title: 'Notifications' },
    { name: 'barchart', title: 'Bar Chart' },
    { name: 'piechart', title: 'Pie Chart' }
])
.controller('DashboardController', function ($scope, $interval, $window, widgetDefinitions, defaultWidgets) {
    $scope.dashboardOptions = {
        widgetButtons: true,
        hideWidgetName: true,
        hideToolbar: false,
        widgetDefinitions: widgetDefinitions,
        defaultWidgets: defaultWidgets,
        storage: $window.localStorage,
        storageId: 'demo'
    };
    $scope.randomValue = Math.random();
    $interval(function () {
        $scope.randomValue = Math.random();
    }, 500);
})
.controller('ActivityDemoCtrl', ['$scope', function ($scope) {
    var ctrl = this;
    ctrl.getDate = function () {
        return new Date().toUTCString();
    };

    $scope.refreshCallback = function (contentScope, done) {

        // use contentScope to get access with activityContent directive's Control Scope
        console.log(contentScope);

        // for example getting your very long data ...........
        setTimeout(function () {
            done();
        }, 3000);

        $scope.footerContent = ctrl.getDate();
    };

    $scope.items = [
		{
		    title: 'Msgs',
		    count: 14,
		    src: 'ajax/notify/mail.html',
		    onload: function (item) {
		        //console.log(item);
		        //alert('[Callback] Loading Messages ...');
		    }
		},
		{
		    title: 'Notify',
		    count: 3,
		    src: 'ajax/notify/notifications.html'
		},
		{
		    title: 'Tasks',
		    count: 4,
		    src: 'ajax/notify/tasks.html',
		    //active: true
		}
    ];

    $scope.total = 0;
    angular.forEach($scope.items, function (item) {
        $scope.total += item.count;
    })

    $scope.footerContent = ctrl.getDate();

}]);

$.fn.extend({
    //pass the options variable to the function
    jarvismenu: function (options) {

        var defaults = {
            accordion: 'true',
            speed: 200,
            closedSign: '[+]',
            openedSign: '[-]'
        };

        // Extend our default options with those provided.
        var opts = $.extend(defaults, options);
        //Assign current element to variable, in this case is UL element
        var $this = $(this);

        //add a mark [+] to a multilevel menu
        $this.find("li").each(function () {
            if ($(this).find("ul").size() !== 0) {
                //add the multilevel sign next to the link
                $(this).find("a:first").append("<b class='collapse-sign'>" + opts.closedSign + "</b>");

                //avoid jumping to the top of the page when the href is an #
                if ($(this).find("a:first").attr('href') == "#") {
                    $(this).find("a:first").click(function () {
                        return false;
                    });
                }
            }
        });

        //open active level
        $this.find("li.active").each(function () {
            $(this).parents("ul").slideDown(opts.speed);
            $(this).parents("ul").parent("li").find("b:first").html(opts.openedSign);
            $(this).parents("ul").parent("li").addClass("open");
        });

        $this.find("li a").click(function () {

            if ($(this).parent().find("ul").size() !== 0) {

                if (opts.accordion) {
                    //Do nothing when the list is open
                    if (!$(this).parent().find("ul").is(':visible')) {
                        parents = $(this).parent().parents("ul");
                        visible = $this.find("ul:visible");
                        visible.each(function (visibleIndex) {
                            var close = true;
                            parents.each(function (parentIndex) {
                                if (parents[parentIndex] == visible[visibleIndex]) {
                                    close = false;
                                    return false;
                                }
                            });
                            if (close) {
                                if ($(this).parent().find("ul") != visible[visibleIndex]) {
                                    $(visible[visibleIndex]).slideUp(opts.speed, function () {
                                        $(this).parent("li").find("b:first").html(opts.closedSign);
                                        $(this).parent("li").removeClass("open");
                                    });

                                }
                            }
                        });
                    }
                }// end if
                if ($(this).parent().find("ul:first").is(":visible") && !$(this).parent().find("ul:first").hasClass("active")) {
                    $(this).parent().find("ul:first").slideUp(opts.speed, function () {
                        $(this).parent("li").removeClass("open");
                        $(this).parent("li").find("b:first").delay(opts.speed).html(opts.closedSign);
                    });

                } else {
                    $(this).parent().find("ul:first").slideDown(opts.speed, function () {
                        /*$(this).effect("highlight", {color : '#616161'}, 500); - disabled due to CPU clocking on phones*/
                        $(this).parent("li").addClass("open");
                        $(this).parent("li").find("b:first").delay(opts.speed).html(opts.openedSign);
                    });
                } // end else
            } // end if
        });
    } // end function
});