'use strict';
angular.module('app', ['ngRoute', 'dashboard', 'widgets', 'models', 'ngMockE2E', 'app.activity'])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: 'views/dashboard.html', controller: 'DashboardController', title: 'Dashboard' })
    .when('/reporting', { templateUrl: 'views/reporting.html', xcontroller: 'DashboardController', title: 'Reporting' })
    .otherwise({ redirectTo: '/' });
})
.factory('widgetDefinitions', function () {
    return [
        { name: 'mjg', directive: 'wt-mjg' },
        { name: 'another', directive: 'wt-another' }
    ];
})
.value('defaultWidgets', [
    { name: 'mjg', title: 'Notifications1' },
    { name: 'another', title: 'Another1' },
    { name: 'mjg', title: 'Notifications3' },
    { name: 'mjg', title: 'Notifications4' },
    { name: 'mjg', title: 'Notifications5' }
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

}])


.directive('mgHeader', function () {
    return {
        restrict: 'A',
        scope: {},
        replace: true,
        template: '' +
'                <div class="navbar-header" id="header" >' +
'                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">' +
'                        <span class="sr-only">Toggle navigation</span>' +
'                        <span class="icon-bar"></span>' +
'                        <span class="icon-bar"></span>' +
'                        <span class="icon-bar"></span>' +
'                    </button>' +
'                    <ul class="nav navbar-top-links navbar-left">' +
'                        <li class="dropdown" style="color:blue">' +
'                            <a id="theMenu" style="cursor:pointer;" class="dropdown-toggle" data-toggle="dropdown" href="#">' +
'                                <i class="fa fa-align-justify fa-fw"></i>' +
'                            </a>' +
'                        </li>' +
'                    </ul>' +
'                   <a class="navbar-brand animated zoomIn" href="index.html">EMSPEED v2</a>' +
' <div class="nav navbar-top-links navbar-right" style="margin-right:10px">' +



'			<div id="logo-group">' +
'				<span data-ng-controller="ActivityDemoCtrl">' +
'					<activity data-onrefresh="refreshCallback">' +
'						<activity:button data-icon="fa fa-user" data-total="total" />' +
'						<activity:content data-footer="footerContent">' +
'							<activity:item data-src="item.src" data-onload="item.onload" data-active="item.active" data-ng-repeat="item in items">' +
'								<span data-localize="{{ item.title }}">{{ item.title }}</span> ({{ item.count }})' +
'							</activity:item>' +
'						</activity:content>' +
'					</activity>' +
'				</span>' +
'			</div>' +




'</div>' +
 
'                </div>' +

//'                <ul class="nav navbar-top-links navbar-right">' +


//'                    <li class="dropdown">' +
//'                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">' +
//'                            <i class="fa fa-envelope fa-fw"></i>  <i class="fa fa-caret-down"></i>' +
//'                        </a>' +
//'                        <ul class="dropdown-menu dropdown-messages">' +
//'                            <li>' +
//'                                <a href="#">' +
//'                                    <div>' +
//'                                        <strong>John Smith</strong>' +
//'                                        <span class="pull-right text-muted">' +
//'                                            <em>Yesterday</em>' +
//'                                        </span>' +
//'                                    </div>' +
//'                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>' +
//'                                </a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a href="#">' +
//'                                    <div>' +
//'                                        <strong>John Smith</strong>' +
//'                                        <span class="pull-right text-muted">' +
//'                                            <em>Yesterday</em>' +
//'                                        </span>' +
//'                                    </div>' +
//'                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>' +
//'                                </a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a href="#">' +
//'                                    <div>' +
//'                                        <strong>John Smith</strong>' +
//'                                        <span class="pull-right text-muted">' +
//'                                            <em>Yesterday</em>' +
//'                                        </span>' +
//'                                    </div>' +
//'                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>' +
//'                                </a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a class="text-center" href="#">' +
//'                                    <strong>Read All Messages</strong>' +
//'                                    <i class="fa fa-angle-right"></i>' +
//'                                </a>' +
//'                            </li>' +
//'                        </ul>' +
//'                        <!-- /.dropdown-messages -->' +
//'                    </li>' +
//'                    <!-- /.dropdown -->' +


//'                    <li class="dropdown">' +
//'                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">' +
//'                            <i class="fa fa-tasks fa-fw"></i>  <i class="fa fa-caret-down"></i>' +
//'                        </a>' +
//'                        <ul class="dropdown-menu dropdown-tasks">' +
//'                            <li>' +
//'                                <a href="#">' +
//'                                    <div>' +
//'                                        <p>' +
//'                                            <strong>Task 1</strong>' +
//'                                            <span class="pull-right text-muted">40% Complete</span>' +
//'                                        </p>' +
//'                                        <div class="progress progress-striped active">' +
//'                                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">' +
//'                                                <span class="sr-only">40% Complete (success)</span>' +
//'                                            </div>' +
//'                                        </div>' +
//'                                    </div>' +
//'                                </a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a href="#">' +
//'                                    <div>' +
//'                                        <p>' +
//'                                            <strong>Task 2</strong>' +
//'                                            <span class="pull-right text-muted">20% Complete</span>' +
//'                                        </p>' +
//'                                        <div class="progress progress-striped active">' +
//'                                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">' +
//'                                                <span class="sr-only">20% Complete</span>' +
//'                                            </div>' +
//'                                        </div>' +
//'                                    </div>' +
//'                                </a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a href="#">' +
//'                                    <div>' +
//'                                        <p>' +
//'                                            <strong>Task 3</strong>' +
//'                                            <span class="pull-right text-muted">60% Complete</span>' +
//'                                        </p>' +
//'                                        <div class="progress progress-striped active">' +
//'                                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">' +
//'                                                <span class="sr-only">60% Complete (warning)</span>' +
//'                                            </div>' +
//'                                        </div>' +
//'                                    </div>' +
//'                                </a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a href="#">' +
//'                                    <div>' +
//'                                        <p>' +
//'                                            <strong>Task 4</strong>' +
//'                                            <span class="pull-right text-muted">80% Complete</span>' +
//'                                        </p>' +
//'                                        <div class="progress progress-striped active">' +
//'                                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">' +
//'                                                <span class="sr-only">80% Complete (danger)</span>' +
//'                                            </div>' +
//'                                        </div>' +
//'                                    </div>' +
//'                                </a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a class="text-center" href="#">' +
//'                                    <strong>See All Tasks</strong>' +
//'                                    <i class="fa fa-angle-right"></i>' +
//'                                </a>' +
//'                            </li>' +
//'                        </ul>' +
//'                        <!-- /.dropdown-tasks -->' +
//'                    </li>' +
//'                    <!-- /.dropdown -->' +


//'                    <li class="dropdown">' +
//'                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">' +
//'                            <i class="fa fa-bell fa-fw"></i>  <i class="fa fa-caret-down"></i>' +
//'                        </a>' +
//'                        <ul class="dropdown-menu dropdown-alerts">' +
//'                            <li>' +
//'                                <a href="#">' +
//'                                    <div>' +
//'                                        <i class="fa fa-comment fa-fw"></i> New Comment' +
//'                                        <span class="pull-right text-muted small">4 minutes ago</span>' +
//'                                    </div>' +
//'                                </a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a href="#">' +
//'                                    <div>' +
//'                                        <i class="fa fa-twitter fa-fw"></i> 3 New Followers' +
//'                                        <span class="pull-right text-muted small">12 minutes ago</span>' +
//'                                    </div>' +
//'                                </a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a href="#">' +
//'                                    <div>' +
//'                                        <i class="fa fa-envelope fa-fw"></i> Message Sent' +
//'                                        <span class="pull-right text-muted small">4 minutes ago</span>' +
//'                                    </div>' +
//'                                </a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a href="#">' +
//'                                    <div>' +
//'                                        <i class="fa fa-tasks fa-fw"></i> New Task' +
//'                                        <span class="pull-right text-muted small">4 minutes ago</span>' +
//'                                    </div>' +
//'                                </a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a href="#">' +
//'                                    <div>' +
//'                                        <i class="fa fa-upload fa-fw"></i> Server Rebooted' +
//'                                        <span class="pull-right text-muted small">4 minutes ago</span>' +
//'                                    </div>' +
//'                                </a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a class="text-center" href="#">' +
//'                                    <strong>See All Alerts</strong>' +
//'                                    <i class="fa fa-angle-right"></i>' +
//'                                </a>' +
//'                            </li>' +
//'                        </ul>' +
//'                        <!-- /.dropdown-alerts -->' +
//'                    </li>' +
//'                    <!-- /.dropdown -->' +


//'                    <li class="dropdown">' +
//'                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">' +
//'                            <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>' +
//'                        </a>' +
//'                        <ul class="dropdown-menu dropdown-user">' +
//'                            <li>' +
//'                                <a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>' +
//'                            </li>' +
//'                            <li>' +
//'                                <a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>' +
//'                            </li>' +
//'                            <li class="divider"></li>' +
//'                            <li>' +
//'                                <a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>' +
//'                            </li>' +
//'                        </ul>' +
//'                        <!-- /.dropdown-user -->' +
//'                    </li>' +
//'                    <!-- /.dropdown -->' +


//'                </ul>' +
        '',
        controller: ['$scope', '$attrs', function (scope, attrs) {

        }],
        link: function (scope) {
        }
    };
})
.directive('mgSidenav', function () {
    return {
        restrict: 'A',
        scope: {},
        replace: true,
        template: '' +
'                <div class="navbar-default sidebar" role="navigation">' +
'                    <div class="sidebar-nav navbar-collapse" style="padding-top:15px;">' +
'                        <ul class="nav sidebar" id="side-menu">' +
'                            <li class="sidebar-search">' +
'                                <div class="input-group custom-search-form">' +
'                                    <input type="text" class="form-control" placeholder="Search...">' +
'                                    <span class="input-group-btn">' +
'                                        <button class="btn btn-default" type="button">' +
'                                            <i class="fa fa-search"></i>' +
'                                        </button>' +
'                                    </span>' +
'                                </div>' +
'                                <!-- /input-group -->' +
'                            </li>' +
'                            <li><a class="menuItem active" href="index.html"><i class="fa fa-dashboard fa-fw"></i> {{name}} Dashboard</a></li>' +
'                            <li><a class="menuItem" href="#/reporting"><i class="fa fa-dashboard fa-fw"></i> Reporting</a></li>' +
'                            <li><a class="menuItem" href="#/alerts"><i class="fa fa-dashboard fa-fw"></i> Alerts</a></li>' +
'                            <li><a class="menuItem" href="#/custom-settings"><i class="fa fa-table fa-fw"></i> Custom Settings</a></li>' +
'                            <li><a class="menuItem" href="#/explicit-saving"><i class="fa fa-wrench fa-fw"></i> explicit-saving</a></li>' +
'                            <li><a class="menuItem" href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Layouts<span class="fa arrow"></span></a>' +
'                                <ul class="nav nav-second-level">' +
'                                    <li><a class="menuItem" href="#/layouts">layouts</a></li>' +
'                                    <li><a class="menuItem" href="#/layouts/explicit-saving">explicit-saving</a></li>' +
'                                </ul>' +
'                            </li>' +
'                            <li>' +
'                                <a class="menuItem" href="#"><i class="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span class="fa arrow"></span></a>' +
'                                <ul class="nav nav-second-level">' +
'                                    <li><a class="menuItem" href="#">Second Level Item</a></li>' +
'                                    <li><a class="menuItem" href="#">Second Level Item</a></li>' +
'                                    <li>' +
'                                        <a class="menuItem" href="#">Third Level <span class="fa arrow"></span></a>' +
'                                        <ul class="nav nav-third-level">' +
'                                            <li><a class="menuItem" href="#">Third Level Item</a></li>' +
'                                            <li><a class="menuItem" href="#">Third Level Item</a></li>' +
'                                            <li><a class="menuItem" href="#">Third Level Item</a></li>' +
'                                            <li><a class="menuItem" href="#">Third Level Item</a></li>' +
'                                        </ul>' +
'                                    </li>' +
'                                </ul>' +
'                            </li>' +
'                        </ul>' +
'                    </div>' +
'                </div>' +
        '',
        controller: ['$scope', '$attrs', function ($scope, $attrs) {
            $scope.name = 'joe';
        }],
        link: function (scope) {
            $('#side-menu').metisMenu();

            ////Loads the correct sidebar on window load,
            ////collapses the sidebar on window resize.
            //// Sets the min-height of #page-wrapper to window size
            //$(function () {
            //    $(window).bind("load resize", function () {
            //        topOffset = 50;
            //        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
            //        if (width < 768) {
            //            $('div.navbar-collapse').addClass('collapse')
            //            topOffset = 100; // 2-row-menu
            //        } else {
            //            $('div.navbar-collapse').removeClass('collapse')
            //        }

            //        height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
            //        height = height - topOffset;
            //        if (height < 1) height = 1;
            //        if (height > topOffset) {
            //            $("#page-wrapper").css("min-height", (height) + "px");
            //        }
            //    })
            //})


        }
    };
})
.directive('ribbon', function () {
	return {
	    restrict: 'A',
	    replace: true,
	    link: function (scope, element, attrs) {
	        element.append('<div class="demo animated"><span id="demo-setting"><i class="fa fa-cog txt-color-blueDark"></i></span> <form><legend class="no-padding margin-bottom-10">Layout Options</legend><section><label><input name="subscription" id="smart-fixed-header" type="checkbox" class="checkbox style-0"><span>Fixed Header</span></label><label><input type="checkbox" name="terms" id="smart-fixed-navigation" class="checkbox style-0"><span>Fixed Navigation</span></label><label><input type="checkbox" name="terms" id="smart-fixed-ribbon" class="checkbox style-0"><span>Fixed Ribbon</span></label><label><input type="checkbox" name="terms" id="smart-fixed-footer" class="checkbox style-0"><span>Fixed Footer</span></label><label><input type="checkbox" name="terms" id="smart-fixed-container" class="checkbox style-0"><span>Inside <b>.container</b> <div class="font-xs text-right">(non-responsive)</div></span></label><label style="display:block;"><input type="checkbox" id="smart-topmenu" class="checkbox style-0"><span>Menu on <b>top</b></span></label> <span id="smart-bgimages"></span></section><section><h6 class="margin-top-10 semi-bold margin-bottom-5">Clear Localstorage</h6><a href="javascript:void(0);" class="btn btn-xs btn-block btn-primary" id="reset-smart-widget"><i class="fa fa-refresh"></i> Factory Reset</a></section> <h6 class="margin-top-10 semi-bold margin-bottom-5">SmartAdmin Skins</h6><section id="smart-styles"><a href="javascript:void(0);" id="smart-style-0" data-skinlogo="img/logo.png" class="btn btn-block btn-xs txt-color-white margin-right-5" style="background-color:#4E463F;"><i class="fa fa-check fa-fw" id="skin-checked"></i>Smart Default</a><a href="javascript:void(0);" id="smart-style-1" data-skinlogo="img/logo-white.png" class="btn btn-block btn-xs txt-color-white" style="background:#3A4558;">Dark Elegance</a><a href="javascript:void(0);" id="smart-style-2" data-skinlogo="img/logo-blue.png" class="btn btn-xs btn-block txt-color-darken margin-top-5" style="background:#fff;">Ultra Light</a><a href="javascript:void(0);" id="smart-style-3" data-skinlogo="img/logo-pale.png" class="btn btn-xs btn-block txt-color-white margin-top-5" style="background:#f78c40">Google Skin</a></section></form> </div>')

	        // hide bg options
	        //var smartbgimage = "<h6 class='margin-top-10 semi-bold'>Background</h6><img src='img/pattern/graphy-xs.png' data-htmlbg-url='img/pattern/graphy.png' width='22' height='22' class='margin-right-5 bordered cursor-pointer'><img src='img/pattern/tileable_wood_texture-xs.png' width='22' height='22' data-htmlbg-url='img/pattern/tileable_wood_texture.png' class='margin-right-5 bordered cursor-pointer'><img src='img/pattern/sneaker_mesh_fabric-xs.png' width='22' height='22' data-htmlbg-url='img/pattern/sneaker_mesh_fabric.png' class='margin-right-5 bordered cursor-pointer'><img src='img/pattern/nistri-xs.png' data-htmlbg-url='img/pattern/nistri.png' width='22' height='22' class='margin-right-5 bordered cursor-pointer'><img src='img/pattern/paper-xs.png' data-htmlbg-url='img/pattern/paper.png' width='22' height='22' class='bordered cursor-pointer'>";
	        //$("#smart-bgimages")
			//	.fadeOut();

	        $('#demo-setting')
				.click(function () {
				    if ($('.demo').hasClass('activate')) {
				        $('.demo').removeClass('fadeInRight');
				        $('.demo').toggleClass('activate');
				    }
				    else {
				        $('.demo').removeClass('fadeOutRight');
				        $('.demo').addClass('fadeInRight');
				        $('.demo').toggleClass('activate');
				    }
				})
	        /*
				* FIXED HEADER
				*/
	        $('input[type="checkbox"]#smart-fixed-header')
				.click(function () {
				    if ($(this)
				        .is(':checked')) {
				        //checked
				        $.root_.addClass("fixed-header");
				    } else {
				        //unchecked
				        $('input[type="checkbox"]#smart-fixed-ribbon')
				            .prop('checked', false);
				        $('input[type="checkbox"]#smart-fixed-navigation')
				            .prop('checked', false);

				        $.root_.removeClass("fixed-header");
				        $.root_.removeClass("fixed-navigation");
				        $.root_.removeClass("fixed-ribbon");

				    }
				});

	        /*
				* FIXED NAV
				*/
	        $('input[type="checkbox"]#smart-fixed-navigation')
				.click(function () {
				    if ($(this)
				        .is(':checked')) {
				        //checked
				        $('input[type="checkbox"]#smart-fixed-header')
				            .prop('checked', true);

				        $.root_.addClass("fixed-header");
				        $.root_.addClass("fixed-navigation");

				        $('input[type="checkbox"]#smart-fixed-container')
				            .prop('checked', false);
				        $.root_.removeClass("container");

				    } else {
				        //unchecked
				        $('input[type="checkbox"]#smart-fixed-ribbon')
				            .prop('checked', false);
				        $.root_.removeClass("fixed-navigation");
				        $.root_.removeClass("fixed-ribbon");
				    }
				});

	        /*
				* FIXED RIBBON
				*/
	        $('input[type="checkbox"]#smart-fixed-ribbon')
				.click(function () {
				    if ($(this)
				        .is(':checked')) {

				        //checked
				        $('input[type="checkbox"]#smart-fixed-header')
				            .prop('checked', true);
				        $('input[type="checkbox"]#smart-fixed-navigation')
				            .prop('checked', true);
				        $('input[type="checkbox"]#smart-fixed-ribbon')
				            .prop('checked', true);

				        //apply
				        $.root_.addClass("fixed-header");
				        $.root_.addClass("fixed-navigation");
				        $.root_.addClass("fixed-ribbon");

				        $('input[type="checkbox"]#smart-fixed-container')
				            .prop('checked', false);
				        $.root_.removeClass("container");

				    } else {
				        //unchecked
				        $.root_.removeClass("fixed-ribbon");
				    }
				});

	        /*
				* RTL SUPPORT
				*/
	        $('input[type="checkbox"]#smart-fixed-footer')
				.click(function () {
				    if ($(this)
				        .is(':checked')) {

				        //checked
				        $.root_.addClass("fixed-page-footer");

				    } else {
				        //unchecked
				        $.root_.removeClass("fixed-page-footer");
				    }
				});


	        /*
				* RTL SUPPORT
				*/
	        $('input[type="checkbox"]#smart-rtl')
				.click(function () {
				    if ($(this)
				        .is(':checked')) {

				        //checked
				        $.root_.addClass("smart-rtl");

				    } else {
				        //unchecked
				        $.root_.removeClass("smart-rtl");
				    }
				});

	        /*
				* MENU ON TOP
				*/

	        $('#smart-topmenu')
				.on('change', function (e) {
				    if ($(this)
				        .prop('checked')) {
				        //window.location.href = '?menu=top';
				        localStorage.setItem('sm-setmenu', 'top');
				        location.reload();
				    } else {
				        //window.location.href = '?';
				        localStorage.setItem('sm-setmenu', 'left');
				        location.reload();
				    }
				});

	        if (localStorage.getItem('sm-setmenu') == 'top') {
	            $('#smart-topmenu')
				    .prop('checked', true);
	        } else {
	            $('#smart-topmenu')
				    .prop('checked', false);
	        }

	        /*
				* INSIDE CONTAINER
				*/
	        $('input[type="checkbox"]#smart-fixed-container')
				.click(function () {
				    if ($(this)
				        .is(':checked')) {
				        //checked
				        $.root_.addClass("container");

				        $('input[type="checkbox"]#smart-fixed-ribbon')
				            .prop('checked', false);
				        $.root_.removeClass("fixed-ribbon");

				        $('input[type="checkbox"]#smart-fixed-navigation')
				            .prop('checked', false);
				        $.root_.removeClass("fixed-navigation");

				        if (smartbgimage) {
				            $("#smart-bgimages")
				                .append(smartbgimage)
				                .fadeIn(1000);
				            $("#smart-bgimages img")
				                .bind("click", function () {
				                    var $this = $(this);
				                    var $html = $('html')
				                    bgurl = ($this.data("htmlbg-url"));
				                    $html.css("background-image", "url(" + bgurl + ")");
				                })
				            smartbgimage = null;
				        } else {
				            $("#smart-bgimages")
				                .fadeIn(1000);
				        }

				    } else {
				        //unchecked
				        $.root_.removeClass("container");
				        $("#smart-bgimages")
				            .fadeOut();
				    }
				});

	        /*
				* REFRESH WIDGET
				*/
	        $("#reset-smart-widget")
				.bind("click", function () {
				    $('#refresh')
				        .click();
				    return false;
				});

	        /*
				* STYLES
				*/
	        $("#smart-styles > a")
				.on('click', function () {
				    var $this = $(this);
				    var $logo = $("#logo img");
				    $.root_.removeClassPrefix('smart-style')
                        .addClass($this.attr("id"));
				    $logo.attr('src', $this.data("skinlogo"));
				    $("#smart-styles > a #skin-checked")
                        .remove();
				    $this.prepend("<i class='fa fa-check fa-fw' id='skin-checked'></i>");
				});
	    }
	};
})
