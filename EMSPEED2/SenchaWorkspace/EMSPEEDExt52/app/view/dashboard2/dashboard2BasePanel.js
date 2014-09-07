Ext.define('EMSPEEDExt5.view.dashboard2.dashboard2BasePanel', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassPanel',
    xtype: 'dashboard2BasePanel',
    id: 'dashboard2BasePanel',
    title: 'Dashboard2',

    controller: 'dashboard2',

    overflowY: 'scroll',
    overflowX: 'hidden',

    dockedItems : [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                { text: 'Add', width: '100px', handler: 'onAddClick' },
                { text: 'ClearLS', width: '100px', handler: 'onClearLSClick' },
                { text: 'Deserial', width: '100px', handler: 'onDeserialClick' },
                { text: 'Mock', width: '100px', handler: 'onMockClick' }
            ]
        }
    ],

    items: [

        //{
        //    xtype: 'dashboard',
        //    id: 'd4',
        //    //columnWidths: [ 0.35, 0.40, 0.25 ],
        //    columnWidths: [0.50, 0.50],
        //    parts: {
        //        //                rss: 'googlerss',
        //        angular: 'angular',
        //        list: 'list',
        //        marc: 'marc'
        //    },

        //    //listeners: {
        //    //    resize: function (me, width, height, oldWidth, oldHeight, eOpts) {
        //    //    }
        //    //},

        //    defaultContent: [
        //        { type: 'stocks', columnIndex: 0, height: 300 },
        //        { type: 'markets', columnIndex: 1, height: 300 }
        //    ]
        //},
        //{
        //    xtype: 'dashboard',
        //    id: 'd5',
        //    columnWidths: [0.75, 0.25],
        //    parts: {
        //        //                rss: 'googlerss',
        //        angular: 'angular',
        //        list: 'list',
        //        marc: 'marc'
        //    },
        //    defaultContent: [
        //        { type: 'notifications', columnIndex: 0, height: 100 },
        //        { type: 'template', columnIndex: 1, height: 100 }
        //    ]
        //}


    ]

});
