
Ext.define('EMSPEEDExt5.view.dashboard.dashboardBasePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',


    onAddMarc: function () {
        var dashboard = this.lookupReference('dashboard');
        //dashboard.addNew('marc', 0);

        dashboard.addView({
            type: 'marc',
            widgetData: { name: 'marc2', age: '25' },
            columnIndex: 0,
            height: 200
        }, 0 , 0);

        //dashboard.addNew({
        //    type: 'googlerss',
        //    columnIndex: 0,
        //    height: 200
        //});
    },

    onAddFeedUrl: function (sender) {
        var dashboard = this.lookupReference('dashboard');
        dashboard.addView({
            type: 'googlerss',
            feedUrl: sender.feedUrl,
            columnIndex: 0,
            height: 200
        });
    },

    onGetState: function () {
        var dashboard = this.lookupReference('dashboard');
        var state = dashboard.getState();
        console.log('state');
        console.log(state);
    },

    onAddClick: function () {
        //alert('You clicked the "Add" button.');
        //    //Ext.getCmp('d1').addNew({ type: 'notifications', columnIndex: 2, height: 100 });
        Ext.getCmp('d2').addView({ type: 'notifications', columnIndex: 1, height: 200 }, 0, 0);

    },

    onClearLSClick: function () {
        localStorage.clear();

    },

    onClickButton: function () {
        alert('click');
    },

    onDeserialClick: function () {
        alert('You clicked the "onDeserial" button.');
        //Ext.getCmp('d2').deserializeItems([
        //    { type: 'stockTicker', columnIndex: 0, height: 100 },
        //    { type: 'stocks', columnIndex: 1, height: 100 }
        //]);
    }

});