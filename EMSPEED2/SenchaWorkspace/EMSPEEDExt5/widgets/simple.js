Ext.define('widget.simple', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    initComponent: function () {
        var me = this;
        me.items = [
            { xtype: 'button', text: me.widgetData.name }
        ];
        me.callParent(arguments);
    }
});