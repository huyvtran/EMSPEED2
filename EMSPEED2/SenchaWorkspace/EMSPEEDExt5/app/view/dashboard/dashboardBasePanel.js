Ext.define('EMSPEEDExt5.view.dashboard.dashboardBasePanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboardBasePanel',
    itemId: 'dashboardBasePanel',
    //    style: { borderLeft: '0px solid #cccccc', borderTop: '0px solid #cccccc' },
    style: {
        borderRightWidth: '0 !important',
        borderLeftWidth: '0 !important'
    },
    bodyStyle: {
        borderStyle: 'none'
    },
    requires: [
        'Ext.dashboard.Dashboard',
        'Ext.tip.ToolTip',
        'Ext.sparkline.Line'
    ],
    controller: 'dashboardBasePanel',
    layout: 'fit',
    myToolbar: [],

    listeners: {
        afterlayout: 'onAfterLayout'
    },

    initComponent: function () {
        var me = this;
        me.items = [
            {
                xtype: 'dashboard',
                height: '100%',
                reference: 'dashboard',
                columnWidths: me.dashboardLayout.columnWidths,
                parts: com.parts,
                defaultContent: me.dashboardLayout.widgets
            }
        ];

        var theToolbar = [
            { ui: 'emspeedglyph-toolbar', style: {fontSize: '22px' }, tooltip: 'favorite', handler: 'onFavorite', glyph: 'xf006@FontAwesome' },
            { xtype: 'button', glyph: 'xf044@FontAwesome', ui: 'emspeedglyph-toolbar', style: { fontSize: '22px' }, margin: '0px 12px 0px 0px', tooltip: 'dashboard editing tools', handler: 'onToggleToolbar' },
            { text: me.text, xtype: 'label', xwidth: 150, xpadding: '5px 0px 0px 0px', cls: 'x-panel-header-title-default' },
            { xtype: 'tbfill' },
            { xtype: 'dashboardkpiwidgetpanel' },
            { xtype: 'dashboardwidgeteditbar', hidden: true, dashboardLayout: me.dashboardLayout.savedLayouts }
        ];
        me.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                style: {
                    borderRightWidth: '0 !important',
                    borderLeftWidth: '0 !important'
                },
                height: 40,
                reference: 'theToolbar',
                items: theToolbar
            },
            //{
            //    xtype: 'dashboardkpiwidgetpanel',
            //    bodyPadding: '10 0 10 9',
            //    reference: 'dashboardkpiwidgetpanel',
            //    dock: 'top'
            //},
            {
                xtype: 'dashboardproperties',
                reference: 'properties',
                dock: 'right'
            }
        ];
        me.callParent(arguments);
        com.endLoading();
    }
});