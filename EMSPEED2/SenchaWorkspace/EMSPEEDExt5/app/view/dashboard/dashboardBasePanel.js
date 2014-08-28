Ext.define('EMSPEEDExt5.view.dashboard.dashboardBasePanel', {
//    extend: 'EMSPEEDExt5.view.baseclass.baseclassPanel',
    extend: 'Ext.panel.Panel',
    xtype: 'dashboardBasePanel',
    id: 'dashboardBasePanel',
    requires: [
        'Ext.dashboard.Dashboard',
        'Ext.tip.ToolTip'
        //'Ext.ux.google.Feeds'
    ],
    title: 'Dashboard',
    bodyPadding: 10,
    controller: 'dashboard',
    overflowY: 'scroll',
    overflowX: 'hidden',

    initComponent: function () {
        var me = this;
        me.items = [
            {
                xtype: 'dashboard',
                id: 'd2',
                reference: 'dashboard',
                columnWidths: [0.35,0.40,0.25],
                parts: com.parts,
                defaultContent: [
                    { type: 'stocks', widgetData: { name: 'simple', age: '25' }, columnIndex: 1, height: 200 },
                    //{ type: 'angular', widgetData: { name: 'bobby', age: '25', div: 'bob' }, columnIndex: 0, height: 200 },
                    { type: 'simple', widgetData: { name: 'simple', age: '25' }, columnIndex: 0, height: 200 },
                    { type: 'list', widgetData: { name: 'simple', age: '25' }, columnIndex: 1, height: 200 },
                    { type: 'marc', widgetData: { name: 'simple', age: '25' }, columnIndex: 2, height: 200 }
                    //{ type: 'googlerss', widgetData: { name: 'simple', age: '25' }, columnIndex: 0, height: 200 }
                ]
            },

            {
                xtype: 'button'
            }
        ];
        me.callParent(arguments);
    },

    dockedItems: [

        {
            xtype: 'toolbar',
            dock: 'right',
            items: [

                {
                    text: 'Add New',
                    handler: 'onAddNew'
                }
            ]


        },



        {
            xtype: 'toolbar',
            dock: 'top',
            //border: 1,
            items: [

                {
                    text: 'Add New',
                    handler: 'onAddNew'
                },

                {
                    text: 'Sencha Blog',
                    handler: 'onAddFeedUrl',
                    feedUrl: 'http://feeds.feedburner.com/extblog'
                },

                {
                    text: 'Add Marc',
                    handler: 'onAddMarc'
                },

                {
                    text: 'Get State',
                    handler: 'onGetState'
                },


                { text: 'Add', width: '100px', handler: 'onAddClick', glyph: 'xf0e4@FontAwesome' },
                { text: 'ClearLS', width: '100px', handler: 'onClearLSClick', glyph: 'xf1c0@FontAwesome' },
                { text: 'Deserial', width: '100px', handler: 'onDeserialClick', glyph: 'xf1c0@FontAwesome' }
            ]
        }
    ]

});
