Ext.define('mjgApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.data.Store',
        'Ext.TitleBar',
        'Ext.Video',
        'mjgApp.view.AllTablet',
        'mjgApp.view.CurrentTablet',
        'mjgApp.view.CurrentPhone',
        'mjgApp.view.PastPhone',
        'mjgApp.view.ImagePanel',
        'mjgApp.view.Dashboard',
        'mjgApp.view.Cover'
    ],

    initialize: function () {
        this.create();
        this.callParent(arguments);
    },

    create: function () {
        var theItems = [];
        var theChild = {};

        var org = 'test';
        if (org != 'badKey') {
            if (Ext.os.deviceType != 'Phone') {
//            if (false) {

                theChild = {};
                theChild.xtype = 'alltablet';
                theChild.title = 'Home';
                theChild.iconCls = 'home';
                theItems.push(theChild);

                theChild = {};
                theChild.xtype = 'currenttablet';
                theChild.title = 'Current';
                theChild.iconCls = 'favorites';
                theItems.push(theChild);
            }
            else {

                theChild = {};
                theChild.xtype = 'currentphone';
                theChild.title = 'Current';
                theChild.iconCls = 'home';
                theItems.push(theChild);

                theChild = {};
                theChild.xtype = 'pastphone';
                theChild.title = 'Past';
                theChild.iconCls = 'favorites';
                theItems.push(theChild);

            }

            theChild = {};
            theChild.xtype = 'dashboard';
            theChild.title = 'Companies';
            theChild.iconCls = 'info';
            theChild.theFont = 'f30';
            theItems.push(theChild);

            this.add(theItems);
        }
    },

    config: {
        tabBarPosition: 'bottom'
    }
});
