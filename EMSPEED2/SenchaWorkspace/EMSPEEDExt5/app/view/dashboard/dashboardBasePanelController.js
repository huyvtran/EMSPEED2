
Ext.define('EMSPEEDExt5.view.dashboard.dashboardBasePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',

    onAddClick: function () {
        //alert('You clicked the "Add" button.');
        //    //Ext.getCmp('d1').addNew({ type: 'notifications', columnIndex: 2, height: 100 });
        Ext.getCmp('d1').addView({ type: 'notifications', columnIndex: 1, height: 200 }, 0, 0);

    },

    onClearLSClick: function () {
        localStorage.clear();

    },

    onDeserialClick: function () {
        alert('You clicked the "onDeserial" button.');
        //Ext.getCmp('d2').deserializeItems([
        //    { type: 'stockTicker', columnIndex: 0, height: 100 },
        //    { type: 'stocks', columnIndex: 1, height: 100 }
        //]);
    }

});