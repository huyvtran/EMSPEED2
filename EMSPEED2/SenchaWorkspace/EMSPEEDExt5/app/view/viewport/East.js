Ext.define('EMSPEEDExt5.view.viewport.East', {
    extend: 'Ext.tree.Panel',
    xtype: 'East',
    controller: 'EastController',
    id: 'East',





    title: 'Menu',
    width: 180,
    minWidth: 180,
    split: true,
    collapsible: true,
    rootVisible: false,
    lines: false,
    useArrows: false,
    hideHeaders: true,
    reserveScrollbar: false,
    glyph: 0xf00b,

    listeners: {
        scope: 'controller',
        beforeselect: 'beforeNavSelectionChange',
        selectionchange: 'onNavSelectionChange',
        itemcollapse: 'onItemCollapse'
    },

    initComponent: function () {
        var me = this;
        var store = Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true,
                children: me.getNavItems()
            }
        });
        me.columns = [
            {
                xtype: 'treecolumn',
                flex: 1,
                dataIndex: 'text',
                scope: me,
                renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                    var s = '';
                    if (record.data.leaf) {
                        s = '<i style="width: 15px;color: #386a9d;margin: 0px 10px 0px -30px" class="fa ' + record.data.fa + '"></i>';
                    }
                    return s + '<span style="color: #386a9d" >' + value + '</span>';
                }
            }
        ];
        Ext.apply(me, {
            store: store
        });
        me.callParent(arguments);
    },

    getNavItems: function() {
        return [
            {
                text: "EMSPEED",
                expanded: true,
                children: [
                    { id: "Dashboard", text: "Dashboard", qtip: "Dashboard", leaf: true, fa: 'fa-home', menuItemBasePanel: 'dashboardBasePanel' },
                    { id: "Dashboard2", text: "Dashboard2", qtip: "Dashboard2", leaf: true, fa: 'fa-bar-chart-o', menuItemBasePanel: 'dashboard2BasePanel' },
                    { id: "Reporting", text: "Reporting", qtip: "Reporting", leaf: true, fa: 'fa-bar-chart-o', menuItemBasePanel: 'reportingBasePanel' },
                    { id: "KPI", text: "KPI", leaf: true, qtip: "KPI", fa: 'fa-legal', menuItemBasePanel: 'kpiBasePanel' },
                    { id: "Riskmatrix", text: "Riskmatrix", qtip: "Riskmatrix", leaf: true, fa: 'fa-paper-plane', menuItemBasePanel: 'riskmatrixBasePanel' }

                ]
            },
            {
                text: "Other",
                expanded: true,
                children: [
                    { id: "BigData", text: "BigData", qtip: "BigData", leaf: true, fa: 'fa-sitemap', menuItemBasePanel: 'bigdataBasePanel' },
                    { id: "MVVM", text: "MVVM", qtip: "MVVM", leaf: true, fa: ' fa-camera', menuItemBasePanel: 'mvvmBasePanel' },
                    { id: "Binding", text: "Binding", qtip: "Binding", leaf: true, fa: 'fa-code-fork', menuItemBasePanel: 'bindingBasePanel' },
                    { id: "Grid", text: "Grid", qtip: "Grid", leaf: true, fa: 'fa-taxi', menuItemBasePanel: 'gridBaseView' }
        ]
            }
        ];
    }

});