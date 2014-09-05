Ext.define('EMSPEEDExt5.common.panel.Header2', {
    extend: 'Ext.panel.Header',
    xtype: 'header2',

    onMouseOver: function (sender) {
        var tools = this.query('tool');
        var arrayLength = tools.length;
        for (var i = 0; i < arrayLength; i++) {
            tools[i].setHidden(false);
        }
    },
    onMouseOut: function () {
        var tools = this.query('tool');
        var arrayLength = tools.length;
        for (var i = 0; i < arrayLength; i++) {
            tools[i].setHidden(true);
        }
    },
    onRender: function () {
        var me = this;
        me.callParent(arguments);
        var btnListeners = {
            scope: me,
            mouseover: me.onMouseOver,
            mouseout: me.onMouseOut
        };
        btn = me.el;
        me.mon(btn, btnListeners);

        var tools = this.query('tool');
        var arrayLength = tools.length;
        for (var i = 0; i < arrayLength; i++) {
            tools[i].setHidden(true);
        }
    }

});