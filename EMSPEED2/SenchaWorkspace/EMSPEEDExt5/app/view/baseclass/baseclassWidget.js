Ext.define('EMSPEEDExt5.view.baseclass.baseclassWidget', {
    extend: 'Ext.panel.Panel',
    bodyPadding: 10,
    xtype: 'baseclasswidget',
    requires: [
    ],

    statics: {
        addStyles: function (styles) {
            var style = '';
            style += '<style type="text/css">';
            for (var i = 0; i < styles.length; i++) {
                style += styles[i];
            }
            style += '</style>';
            $("head").append(style);
        },

        angularCode: function (xclass) {
        }
    },


    initComponent: function () {
        var me = this;

        if (me.widgetData.full === true) {
            me.up('panel').header = false;
            me.up('dashboard-panel').style = { borderWidth: '0px' };
            me.up('dashboardBasePanel').dockedItems[0].hidden = false;
            me.up('dashboardBasePanel').dockedItems[1].hidden = true;
            me.up('dashboardBasePanel').dockedItems[2].hidden = true;
        };
        if (me.self.angularCode != undefined) {
            var className = me.xclass;
            var start = className.indexOf('.');
            var xclass = className.substring(start + 1);
            var theId = me.id;
            var theStr1 = theId.replace(/-/g, "");
            me.ngVar = theStr1.charAt(0).toUpperCase() + theStr1.slice(1);
            me.ngVar = me.ngVar + 'Directive';
            //theData = "test";
            theData = me.ngVar + 'Data';
            me.html = '' +
 //               '<div id="' + me.ngVar + '" ng-controller="' + me.ngVar + 'Controller" wt-' + me.ngVar.toLowerCase() + '></div>' +
                //'<div id="' + me.ngVar +  xclass.toLowerCase() + ' ></div>' +
                //'<div id="' + me.ngVar + '" ng-controller="' + xclass + 'Controller" wt' + xclass.toLowerCase() + '></div>' +
                '<div ng-controller="' + xclass + 'Controller"><div id="' + me.ngVar + '" ' + xclass.toLowerCase() + ' widgetdata="' + theData.toLowerCase() + '"></div></div>' +
                //'<div id="' + me.ngVar + '" ng-nncontroller="' + xclass + 'Controller" ' + xclass.toLowerCase() + ' details="data.details"></div>' +
                '';
            console.log(me.html);
        };
        me.callParent(arguments);
    },
    afterRender: function () {
        var me = this;
        if (me.self.angularCode != undefined) {
            me.ng(me.ngVar);
        };
        me.callParent();
        me.refresh();
    },
    ng: function (ngVar) {
        var me = this;
        var $theDiv = $('#' + ngVar);
        var controllerScope = angular.element($theDiv).scope();
        //var controllerScope = angular.element(document).scope();
        var scopeVar = ngVar + 'Data';
        //controllerScope[scopeVar.toLowerCase()] = 'hello';
        controllerScope[scopeVar.toLowerCase()] = me.widgetData;
        //controllerScope.test = 'hey';
        //controllerScope['test'] = 'hey2';
        var $injector = angular.element($theDiv).injector();
        //var $injector = angular.element(document).injector();

        ////var $injector = angular.injector(['ng', 'app']);
        $injector.invoke(['$compile', function ($compile) {
            //controllerScope.$apply(function () {
                $compile($theDiv)(controllerScope);
                //var compiled = $compile($theDiv);
                //var link = compiled(controllerScope);

                //if (!$scope.$$phase) {
                //    controllerScope.$apply();
                //    //$digest or $apply
                //}
            //})
        }]);
    },

    style_rules: [],
    constructor: function () {
        var me = this;
        if (this.style_rules.length > 0) {
            var style = '<style type="text/css">' + this.style_rules.join("\n") + "</style>";
            $("head").append(style);
        }
        me.callParent(arguments);
    },

    loadPage: function () {
    },

    configModified: function (s) {
        this.widgetData = s;
        this.loadPage();
    },

    refresh: function () {
        var me = this;
        me.fireEvent('beforeload', me);
        me.fireEvent('load', me);
    },

},
function (s) {
//    debugger;
//    console.log('hi');
});
