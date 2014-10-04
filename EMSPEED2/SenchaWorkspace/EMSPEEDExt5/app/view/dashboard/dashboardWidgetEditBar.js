Ext.define('EMSPEEDExt5.view.dashboard.dashboardWidgetEditBar', {
    extend: 'Ext.container.Container',
    xtype: 'dashboardwidgeteditbar',
    layout: 'hbox',
    style: {
        borderBottomStyle: 'none'
    },

    initComponent: function () {
        var me = this;
        me.items = [
	        {
	            xtype: 'combobox',
	            fieldLabel: 'My Layouts',
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
	            valueField: 'id',
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
	            }
	        },
            { xtype: 'button', text: 'New', ui: 'emspeed-toolbar', handler: 'onAddLayout', glyph: 'xf055@FontAwesome' },
            { xtype: 'button', text: 'Delete', ui: 'emspeed-toolbar', handler: 'onDeleteLayout', margin: '0px 10px 0px 0px', glyph: 'xf00d@FontAwesome' },
            { xtype: 'button', text: 'Add Widget', ui: 'emspeed-toolbar', handler: 'onAddWidget', glyph: 'xf067@FontAwesome' },
            { xtype: 'button', text: 'Restore', ui: 'emspeed-toolbar', handler: 'onRestore', glyph: 'xf0e2@FontAwesome' }
            //{ xtype: 'component', html: '', margin: '0px 0px 0px 1px' },
        ];
        me.callParent(arguments);
    }
});