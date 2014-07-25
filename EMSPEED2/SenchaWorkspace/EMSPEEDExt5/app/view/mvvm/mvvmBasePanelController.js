Ext.define('EMSPEEDExt5.view.mvvm.mvvmBasePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mvvmBasePanelController',

    onLoadClick: function () {
        var refs = this.getReferences();
        var theGridStore = refs.theGrid.getStore();
        theGridStore.load({
            params: { "filter": { "displayType": 1, "loadAuditInfo": true, "loadBaseAttributes": true, "loadLevelInfo": true, "loadManagement": true, "loadPmtKpis": true, "loadPmtRollUpKpis": false, "loadUrls": true } },
            scope: this,
            callback: function (records, operation, success) {
                console.log(records);
            }
        });

    },


    onExportClick: function () {
        var refs = this.getReferences();
        var theGrid = refs.theGrid;
        theGrid.downloadExcelXml();
    },

    onGridSelect: function (grid, record, index, eOpts) {
        var refs = this.getReferences();
        var theTextField = refs.theTextField;
        theTextField.setValue('hello');


        // grab a reference to the Detail view... 
        // we could have used a controller "ref", but those can also be problematic
        //var detailView = Ext.ComponentQuery.query('mvvm-DetailView')[0];

        //set the form's ViewModel binding
        //detailView.getViewModel().setData({ rec: record });
    }

});