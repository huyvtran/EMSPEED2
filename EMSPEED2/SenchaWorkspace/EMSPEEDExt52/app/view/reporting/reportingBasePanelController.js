Ext.define('EMSPEEDExt5.view.reporting.reportingBasePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reporting',
    requires: [
        'Ext.MessageBox'
    ],

    doReporting: function (rootController) {
        alert('doReporting');
    },

    onClickReporting: function () {
        var r = this.fireEvent('report', this);
        alert(r);
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function () {
        alert('onConfirm');
    }

});