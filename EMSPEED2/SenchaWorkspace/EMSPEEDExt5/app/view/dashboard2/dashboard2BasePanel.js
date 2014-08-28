Ext.define('EMSPEEDExt5.view.dashboard2.dashboard2BasePanel', {
    extend: 'EMSPEEDExt5.view.dashboard.dashboardRoot',
    xtype: 'dashboard2BasePanel',
    id: 'dashboard2BasePanel',
    itemId: 'dashboard2BasePanel',
    title: 'Dashboard2',

    initComponent: function () {
        var me = this;

        me.myToolbar = [
            { text: 'onlyOn2', glyph: 'xf1b8@FontAwesome', handler: function () { alert('onlyOn2'); } }
        ];

        me.defaultContent = [
            //{ type: 'stocks', widgetData: { name: 'stocks', age: '12' }, columnIndex: 0, height: 200 },
            //{ type: 'angular', widgetData: { name: 'bobby', age: '25', div: 'bob' }, columnIndex: 0, height: 200 },
            { type: 'simple', widgetData: { name: 'simple', age: '8' }, columnIndex: 0, height: 200 },
            { type: 'list', widgetData: { name: 'list1', age: '4' }, columnIndex: 0, height: 200 }
            //{ type: 'marc', widgetData: { name: 'marc1', age: '7' }, columnIndex: 2, height: 200 },
            //{ type: 'marc', widgetData: { name: 'marc2', age: '17' }, columnIndex: 2, height: 200 }
            //{ type: 'googlerss', widgetData: { name: 'simple', age: '25' }, columnIndex: 0, height: 200 }
        ];
        me.callParent(arguments);
    },

    setIt: function () {
        alert('setIt2');
    }
});
