Ext.define('widget.base', {
    extend: 'Ext.container.Container',
    margin: '10px 10px 10px 10px',
    widgetData: null,
    afterRender: function () {
        var me = this;
        me.callParent();
        me.refresh();
    },
    refresh: function () {
        var me = this;
        me.fireEvent('beforeload', me);
        me.fireEvent('load', me);
    },
    getTitle: function () {
        if (this.widgetData.title === undefined) {
            return this.xclass
        }
        else {
            return this.widgetData.title;
        }
    }
});