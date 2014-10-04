Ext.define('widget.extbroadcast', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    initComponent: function () {
        var me = this;
        me.items = [
            {
                xtype: 'button', text: me.widgetData.name, handler: function () {
                    var currentdate = new Date();
                    var datetime = "Current Time: "
                                    + (currentdate.getMonth() + 1) + "/"
                                    + currentdate.getDate() + "/"
                                    + currentdate.getFullYear() + " @ "
                                    + currentdate.getHours() + ":"
                                    + currentdate.getMinutes() + ":"
                                    + currentdate.getSeconds();
                    me.broadcast('currentTime', datetime);
                }
            }
        ];
        me.callParent(arguments);
    }
});