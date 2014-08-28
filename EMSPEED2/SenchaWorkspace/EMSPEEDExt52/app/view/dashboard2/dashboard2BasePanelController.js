Ext.define('EMSPEEDExt5.view.dashboard2.dashboard2BasePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard2',

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
    },

    onMockClick: function () {
        this.getData();
    },

    getData: function () {
        var me = this;
        var theUrl = com.ajaxUrl('ReportConfigurationService','GetMasterLayout');
        //var theParms = { "reportTypeId": reporting.selectedReportType.data.id, "contextId": com.getProjectId() };
        var theParms = { "reportTypeId": 1, "contextId": 97366 };
        $.ajax(com.ajaxOptions({
            url: theUrl,
            data: theParms
        }))
        .done(function (data) {
            alert(data.reportTypeName);
        });
    }

});