//var theParts = {

//    googlerss: 'googlerss',
//    angular: 'angular',
//    list: 'list',
//    marc: 'marc',

//    riskmatrix: {
//        viewTemplate: {
//            title: 'riskmatrix',
//            items: [{
//                xtype: 'riskmatrix',
//                widgetData: '{widgetData}'
//            }],

//            tools: [
//                {
//                    type: 'refresh',
//                    tooltip: 'Refresh form Data',
//                    // hidden:true,
//                    handler: function (event, toolEl, panelHeader) {
//                        alert('click');
//                    }
//                },


//                {
//                    //xtype: 'tool',
//                    type: 'gear',
//                    tooltip: 'The Gear Tooltip',
//                    //scope: this,
//                    handler: function (e, target, panelHeader, tool) {
//                        alert('click');
//                    }
//                },
//                {
//                    type: 'help',
//                    toast: true
//                }
//            ]
//        }
//    },
//    notifications: {
//        viewTemplate: {
//            title: 'Notifications',
//            items: [{
//                xtype: 'notifications'
//            }]
//        }
//    },
//    subprojects: { viewTemplate: {title: 'Subprojects', items: [{ xtype: 'subprojects'}]} },
//    template: {
//        viewTemplate: {
//            title: 'Template',
//            items: [{
//                xtype: 'template'
//            }]
//        }
//    },
//    markets: {
//        viewTemplate: {
//            title: 'Markets',
//            items: [{
//                xtype: 'markets'
//            }]
//        }
//    },
//    stocks: {
//        viewTemplate: {
//            title: 'Stocks',
//            items: [{
//                xtype: 'stocks'
//            }]
//        }
//    }
//};

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

    items: [
        {
            xtype: 'dashboard',
            id: 'd2',
            reference: 'dashboard',
            columnWidths: [
                0.35,
                0.40,
                0.25
            ],
            parts: [
                'simple',
                'googlerss',
                'marc'
            ],


            defaultContent: [
                //{ type: 'riskmatrix', columnIndex: 0, widgetData: 'marc' },
                {
                    type: 'simple',
                    widgetData: { name: 'simple', age: '25' },
                    columnIndex: 0,
                    height: 200
                },
                {
                    type: 'marc',
                    widgetData: { name: 'marc', age: '25' },
                    columnIndex: 1,
                    height: 200
                },

                {
                    type: 'marc',
                    widgetData: { name: 'marc', age: '25' },
                    columnIndex: 2,
                    height: 200
                },

                //{
                //    type: 'list',
                //    widgetData: { name: 'joe', age: '25'},
                //    columnIndex: 0,
                //    height: 200
                //},                
                //{
                //    type: 'googlerss',
                //    columnIndex: 0,
                //    height: 500,
                //    feedUrl: 'http://feeds.feedburner.com/extblog'
                //},

                //{
                //    type: 'angular',
                //    widgetData: { name: 'angular', age: '25' },
                //    columnIndex: 0,
                //    height: 200
                //},

                //{
                //    type: 'list',
                //    widgetData: { name: 'nick', age: '23' },
                //    columnIndex: 0,
                //    height: 150
                //},

                //{ type: 'subprojects', columnIndex: 1, height: 140 }

            ]
        }
    ],

    dockedItems : [
        {
            xtype: 'toolbar',
            dock: 'top',
            //border: 1,
            items: [
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
