Ext.define('widget.imageviewer', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    initComponent: function () {
        var me = this;
        me.html = '<img src="' + me.widgetData.url + '" >',
        me.callParent(arguments);
    }
});