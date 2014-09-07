Ext.define('widget.simple', {
    extend: 'widget.base',
    initComponent: function () {
        var me = this;
        me.items = [
            { xtype: 'button', text: me.widgetData.name }
        ];
        me.callParent(arguments);
    }
});