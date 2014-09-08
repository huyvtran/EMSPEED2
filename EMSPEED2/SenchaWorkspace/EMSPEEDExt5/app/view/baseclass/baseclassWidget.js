Ext.define('EMSPEEDExt5.view.baseclass.baseclassWidget', {
    extend: 'Ext.panel.Panel',
    bodyPadding: 10,
    xtype: 'baseclasswidget',

    statics: {
        addStyles: function (styles) {
            var style = '';
            style += '<style type="text/css">';
            for (var i = 0; i < styles.length; i++) {
                style += styles[i];
            }
            style += '</style>';
            $("head").append(style);
        }
    },

    initComponent: function () {
        var me = this;
        if (me.widgetData.full === true) {
            me.up('panel').header = false;
            me.up('dashboard-panel').style = { borderWidth: '0px' };
            me.up('dashboardBasePanel').dockedItems[1].hidden = true;
        };
        if (me.self.angularCode != undefined) {
            var className = me.xclass;
            var start = className.indexOf('.');
            var xclass = className.substring(start + 1);
            var theId = me.id;
            var theStr1 = theId.replace(/-/g, "");
            me.ngVar = theStr1.charAt(0).toUpperCase() + theStr1.slice(1);
            me.ngVar = me.ngVar + 'Directive';
            theData = me.ngVar + 'Data';
            me.html = '' +
                //'<div ng-controller="' + xclass + 'Controller"><div class="' + me.widgetData.rootCls + '" id="' + me.ngVar + '" ' + xclass.toLowerCase() + ' widgetdata="' + theData.toLowerCase() + '"></div></div>' +
                '<div ng-controller="widgetController"><div class="' +me.widgetData.rootCls + '" id="' +me.ngVar + '" ' +xclass.toLowerCase() + ' widgetdata="' +theData.toLowerCase() + '"></div></div>' +
                '';
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
        var scopeVar = ngVar + 'Data';
        controllerScope[scopeVar.toLowerCase()] = me.widgetData;
        var $injector = angular.element($theDiv).injector();
        $injector.invoke(['$compile', function ($compile) {
            controllerScope.$apply(function () {
                $compile($theDiv)(controllerScope);
                //$scope.$$phase
            })
        }]);
    },

    loadPage: function () {
    },

    configModified: function (s) {
        var me = this;
        me.widgetData = s;

        if (me.self.angularCode != undefined) {
            var ngVar = me.ngVar;
            var $theDiv = $('#' + ngVar);
            var controllerScope = angular.element($theDiv).scope();
            var scopeVar = ngVar + 'Data';
            controllerScope[scopeVar.toLowerCase()] = s;
            controllerScope.$apply(function () {
            })
        };
        me.loadPage();
    },

    refresh: function () {
        var me = this;
        me.fireEvent('beforeload', me);
        me.fireEvent('load', me);
    }

});