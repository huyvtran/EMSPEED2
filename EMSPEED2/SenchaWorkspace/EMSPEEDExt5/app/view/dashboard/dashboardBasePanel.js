Ext.define('EMSPEEDExt5.view.dashboard.dashboardBasePanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboardBasePanel',
    itemId: 'dashboardBasePanel',
    style: { borderLeft: '0px solid #cccccc', borderTop: '1px solid #cccccc' },
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

        var theToolbarTitle = [
            { ui: 'emspeedglyph-toolbar', style: { fontSize: '22px' }, tooltip: 'favorite', handler: 'onFavorite', glyph: 'xf006@FontAwesome' },
            { text: me.text, xtype: 'label', padding: '5px 0px 0px 0px', cls: 'x-panel-header-title-default' }
        ];

        var theToolbar = [
            { ui: 'emspeedglyph-toolbar', style: {fontSize: '22px' }, tooltip: 'favorite', handler: 'onFavorite', glyph: 'xf006@FontAwesome' },
            { text: me.text, xtype: 'label', padding: '5px 0px 0px 0px', cls: 'x-panel-header-title-default' },



            //{ text: 'Get State', handler: 'onGetState', glyph: 'xf083@FontAwesome' },
            //{ text: 'ng', handler: 'onNg' },
            //'-',
            //{ text: 'ClearLS', handler: 'onClearLSClick', glyph: 'xf1b8@FontAwesome' },
            //{ text: 'Deserial', handler: 'onDeserialClick', glyph: 'xf1c0@FontAwesome' },
            { xtype: 'tbfill' },
	        {
	            xtype: 'combobox',
	            fieldLabel: 'My Layouts',
                hidden: true,
	            listeners: {
	                select: function (sender, records, eOpts) {
	                    com.startLoading();
	                    var panel = this.up('dashboardBasePanel');
	                    panel.removeAll(true);
	                    $.getJSON('/api/dashboard/' + project.projectId + '/' + me.itemId + '/' + records[0].id, function (response) {
	                        panel.add(
                                {
                                    xtype: 'dashboard',
                                    height: '100%',
                                    reference: 'dashboard',
                                    columnWidths: response.columnWidths,
                                    parts: com.parts,
                                    defaultContent: response.widgets
                                }
                            );
	                        com.endLoading();
	                    });
	                }
	            },
	            width: 380,
	            labelWidth: 80,
	            forceSelection: true,
	            emptyText: 'Select',
	            store: Ext.create('Ext.data.Store', {
	                fields: ['id', 'name'],
	                data: me.dashboardLayout.savedLayouts
	            }),
	            queryMode: 'local',
	            displayField: 'name',
	            value: me.dashboardLayout.layoutId,
	            valueField: 'id'
	        },
            { text: 'New', ui: 'emspeed-toolbar', hidden: true, handler: 'onAddLayout', glyph: 'xf055@FontAwesome' },
            { text: 'Delete', ui: 'emspeed-toolbar', hidden: true, handler: 'onDeleteLayout', margin: '0px 120px 0px 0px', glyph: 'xf00d@FontAwesome' },
            { text: 'Add Widget', ui: 'emspeed-toolbar', hidden: true, handler: 'onAddWidget', glyph: 'xf067@FontAwesome' },
            { text: 'Restore', ui: 'emspeed-toolbar', hidden: true, handler: 'onRestore', glyph: 'xf0e2@FontAwesome' },
            { xtype: 'component', html: '', margin: '0px 0px 0px 30px' },
            { ui: 'emspeedglyph-toolbar', style: { fontSize: '22px' }, tooltip: 'dashboard editing tools', handler: 'onToggleToolbar', glyph: 'xf044@FontAwesome' }

            //{ xtype: 'component', html: '<i style="color:#003366;font-size:18px;margin-left: 20px;" class="fa fa-star-o fa-fw"></i>' },
            //{ xtype: 'component', html: '<i style="color:#003366;font-size:18px;margin-left: 0px;" class="fa fa-star fa-fw"></i>' }

        ];
        me.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                reference: 'theToolbarTitle',
                hidden: true,
                items: theToolbarTitle
            },
            {
                xtype: 'toolbar',
                dock: 'top',
                height: 40,
                reference: 'theToolbar',
                items: theToolbar
            },
            {
                xtype: 'dashboardkpiwidgetpanel',
                reference: 'dashboardkpiwidgetpanel',
                dock: 'top'
            },
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