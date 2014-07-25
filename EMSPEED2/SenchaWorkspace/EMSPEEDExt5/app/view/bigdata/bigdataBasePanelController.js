Ext.define('EMSPEEDExt5.view.bigdata.bigdataBasePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.bigdataBasePanelController',

    control: {
        '#': {  // matches the view itself
            render: 'onRender'
        }
    },

    onRender: function () {
        //debugger;
        //alert('onRender');
    },


    init: function () {
        //alert('init');
    },

    onLoadClick: function (button) {
        var refs = this.getReferences();
        var storeGrid = refs.gridBigData.getStore();
        storeGrid.load();
        button.setText('Loaded');
    },
    onFilterClick: function () {
        var refs = this.getReferences();
        var storeGrid = refs.gridBigData.getStore();
        storeGrid.clearFilter();
        storeGrid.filter("rating", 5);
    },

    onClearClick: function () {
        var refs = this.getReferences();
        var storeGrid = refs.gridBigData.getStore();
        storeGrid.clearFilter();
    },
    onExportClick: function () {
        var refs = this.getReferences();
        var theGrid = refs.gridBigData;
        theGrid.downloadExcelXml();
    }
});