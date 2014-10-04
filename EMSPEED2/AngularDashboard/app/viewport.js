angular.module('app')
.directive('mgHeader', function () {
    return {
        restrict: 'A',
        scope: {},
        replace: true,
        template: ' \
            <div class="navbar-header" id="header" >\
                <a class="navbar-brand animated zoomIn" href="index.html">EMSPEED v2</a>\
                <div class="nav navbar-top-links navbar-right" style="margin-right:60px">\
                    <div id="logo-group">\
	                    <span data-ng-controller="ActivityDemoCtrl">\
		                    <activity data-onrefresh="refreshCallback">\
			                    <activity:button data-icon="fa fa-user" data-total="total" />\
			                    <activity:content data-footer="footerContent">\
				                    <activity:item data-src="item.src" data-onload="item.onload" data-active="item.active" data-ng-repeat="item in items">\
					                    <span data-localize="{{ item.title }}">{{ item.title }}</span> ({{ item.count }})\
				                    </activity:item>\
			                    </activity:content>\
	                    </activity>\
	                    </span>\
                    </div>\
                </div>\
            </div>\
             ',
        controller: ['$scope', '$attrs', function (scope, attrs) {
        }],
        link: ['$scope', function ($scope) {
        }]
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
'                            <li><a class="menuItem active" href="index.html"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a></li>' +
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
        }
    };
})