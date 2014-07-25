var theParts = {
    riskmatrix: {
        viewTemplate: {
            title: 'riskmatrix',
            items: [{
                xtype: 'riskmatrix'
             }],

            tools: [
                {
                    type: 'refresh',
                    tooltip: 'Refresh form Data',
                    // hidden:true,
                    handler: function (event, toolEl, panelHeader) {
                        alert('click');
                    }
                },


                {
                    //xtype: 'tool',
                    type: 'gear',
                    tooltip: 'The Gear Tooltip',
                    //scope: this,
                    handler: function (e, target, panelHeader, tool) {
                        alert('click');
                    }
                },
                {
                    type: 'help',
                    toast: true
                }
            ]
        }
    },
    notifications: {
        viewTemplate: {
            title: 'Notifications',
            items: [{
                xtype: 'notifications'
            }]
        }
    },
    subprojects: { viewTemplate: {title: 'Subprojects', items: [{ xtype: 'subprojects'}]} },
    template: {
        viewTemplate: {
            title: 'Template',
            items: [{
                xtype: 'template'
            }]
        }
    },
    markets: {
        viewTemplate: {
            title: 'Markets',
            items: [{
                xtype: 'markets'
            }]
        }
    },
    stocks: {
        viewTemplate: {
            title: 'Stocks',
            items: [{
                xtype: 'stocks'
            }]
        }
    }
};

Ext.define('EMSPEEDExt5.view.dashboard.dashboardBasePanel', {
//    extend: 'EMSPEEDExt5.view.baseclass.baseclassPanel',
    extend: 'Ext.panel.Panel',
    xtype: 'dashboardBasePanel',
    id: 'dashboardBasePanel',
    requires: [
        'Ext.dashboard.Dashboard'
    ],

    title: 'Dashboard',
    bodyPadding: 10,

    controller: 'dashboard',


    overflowY: 'scroll',
    overflowX: 'hidden',

    dockedItems : [
        {
            xtype: 'toolbar',
            dock: 'top',
            //border: 1,
            items: [
                { text: 'Add', width: '100px', handler: 'onAddClick', glyph: 'xf0e4@FontAwesome' },
                { text: 'ClearLS', width: '100px', handler: 'onClearLSClick', glyph: 'xf1c0@FontAwesome' },
                { text: 'Deserial', width: '100px', handler: 'onDeserialClick', glyph: 'xf1c0@FontAwesome' }
            ]
        }
    ],

    items: [
        {
            xtype: 'dashboard',
            id: 'd2',
            columnWidths: [1.00],
            parts: theParts,
            defaultContent: [
                { type: 'riskmatrix', columnIndex: 0, xheight: 140},
                { type: 'subprojects', columnIndex: 0, xheight: 140 }
            ]
        }
    ]

});
