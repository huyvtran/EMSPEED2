Ext.define('Ext.overrides.dashboard.Panel', {
    override: 'Ext.dashboard.Panel',

    headerCls: 'headernonhover',
    headerOverCls: 'headerhover',
    header: {
        xtype: 'header2',
        itemPosition: 0, // after title before collapse tool
        items: [
            { xtype: 'button', ui: 'emspeedglyph-toolbar', style: { fontSize: '22px' }, tooltip: 'favorite', handler: 'onFavorite', glyph: 'xf006@FontAwesome' }
        ]
    },

    listeners: {
        resize: 'onResize'
    },

    //onMe: function() {
    //    alert('me')
    //},

    titleCollapse: false,
    titleAlign: 'left'

});
