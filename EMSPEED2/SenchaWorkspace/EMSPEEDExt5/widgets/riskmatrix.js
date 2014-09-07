Ext.define('widget.riskmatrix', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    initComponent: function () {

        $.getJSON('http://localhost:88/api/widgets', function (response) {
            //console.log(response);
        });

        var me = this;
        me.items = [
            { xtype: 'button', text: me.widgetData.name }
        ];
        me.callParent(arguments);
    }
});