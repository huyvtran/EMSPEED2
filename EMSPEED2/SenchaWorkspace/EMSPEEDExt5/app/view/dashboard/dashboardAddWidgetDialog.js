Ext.define('EMSPEEDExt5.view.dashboard.dashboardAddWidgetDialog', {
    extend: 'Ext.Window',
    id: 'img-chooser-dlg',
    title: 'Add a widget to the dashboard',
    closable: false,
    closeAction: 'hide',
    modal: true,
    layout: 'border',
    resizable: false,
    initComponent: function () {
        var me = this;
        me.items = [
            {
                xtype: 'panel',
                region: 'center',
                layout: 'fit',
                items: [
                    {
                        xtype: 'dashboardaddwidgetbrowser',
                        id: 'img-chooser-view',
                        autoScroll: true,
                        listeners: {
                            scope: this,
                            selectionchange: function (selectionModel, selections, eOpts) {
                                var addWidgetDialog = this;
                                var selected = selections[0];
                                addWidgetDialog.type = selected.data.type;
                                addWidgetDialog.widgetDataDef = selected.data.widgetDataDef;
                                addWidgetDialog.height = selected.data.height;
                                addWidgetDialog.down('infopanel').loadRecord(selected);
                            },
                            itemdblclick: function (sender, record, item, index, e, eOpts) {
                                var addWidgetDialog = sender.up('window');
                                var type = addWidgetDialog.type;
                                var widgetDataDef = addWidgetDialog.widgetDataDef;
                                var height = addWidgetDialog.height;
                                sender.up('window').rootView.addView({
                                    type: type,
                                    widgetData: widgetDataDef,
                                    columnIndex: 0,
                                    height: height
                                });
                                addWidgetDialog.destroy();
                            }
                        }
                    }
                ],
                tbar: [
                    {
                        xtype: 'textfield',
                        name: 'filter',
                        fieldLabel: 'Filter',
                        labelAlign: 'right',
                        labelWidth: null,
                        listeners: {
                            buffer: 200,
                            change: function (sender, newValue) {
                                var view = sender.up('window').down('dashboardwidgetbrowser'),
                                    store = view.getStore(),
                                    selModel = view.getSelectionModel(),
                                    selection = selModel.getSelection()[0];
                                store.getFilters().replaceAll({
                                    property: 'title',
                                    anyMatch: true,
                                    value: newValue
                                });
                                if (selection && store.indexOf(selection) === -1) {
                                    selModel.clearSelections();
                                    //this.down('infopanel').clear();
                                }
                            }
                        }
                    },
                    {
                        xtype: 'combo',
                        margin: '0 0 0 10',
                        inputWidth: 150,
                        labelAlign: 'right',

                        // Use non-breaking space so that labelWidth of null shrinkwraps the unbroken string width
                        fieldLabel: 'Sort\u00a0By',
                        labelWidth: null,
                        valueField: 'field',
                        displayField: 'label',
                        value: 'type',
                        editable: false,
                        store: Ext.create('Ext.data.Store', {
                            fields: ['field', 'label'],
                            data: [{ label: 'Title', field: 'title' }, { label: 'Type', field: 'type' }]
                        }),
                        listeners: {
                            select: function (sender, records, eOpts) {
                                var addWidgetDialog = sender.up('window');
                                var field = sender.getValue();
                                addWidgetDialog.down('dashboardwidgetbrowser').store.sort(field);
                            }

                        }
                    }
                ]
            },
            {
                xtype: 'infopanel',
                region: 'east'
                //split: true
            }
        ];
        me.callParent(arguments);
    },
    buttons: [
          {
              text: 'OK', handler: function (sender) {
                  var addWidgetDialog = sender.up('window');
                  var type = addWidgetDialog.type;
                  var widgetDataDef = addWidgetDialog.widgetDataDef;
                  var height = addWidgetDialog.height;
                  addWidgetDialog.rootView.addView({
                      type: type,
                      widgetData: widgetDataDef,
                      columnIndex: 0,
                      height: height
                  });
                  addWidgetDialog.destroy();
              }
          },
          {
              text: 'Cancel', handler: function (sender) {
                  var addWidgetDialog = sender.up('window');
                  addWidgetDialog.destroy();
              }
          }
    ]
});
