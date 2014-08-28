Ext.define("EMSPEEDExt5.view.dashboard3.dashboard3BasePanel",{
    extend: 'EMSPEEDExt5.view.dashboard.dashboardRoot',
    xtype: 'dashboard3BasePanel',
    id: 'dashboard3BasePanel',
    itemId: 'dashboard3BasePanel',
    //controller: 'dashboard3basepanel',

    initComponent: function () {
        var me = this;

        me.myToolbar = [
            { text: 'init', glyph: 'xf1b8@FontAwesome', handler: function () { alert('init'); } },
            { text: 'onHi', glyph: 'xf1b8@FontAwesome', handler: 'onHi' },
            { text: 'setIt', glyph: 'xf1b8@FontAwesome', handler: me.setIt }
        ];

        me.callParent(arguments);
    },

    setIt: function () {
        alert('setIt3');
    }

});
