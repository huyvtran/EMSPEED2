Ext.define('EMSPEEDExt5.view.viewport.East', {
    extend: 'Ext.tree.Panel',
    xtype: 'East',
    controller: 'EastController',
    id: 'East',

    header: {
        itemPosition: 0,
        //style: { borderBottom: '1px solid #6084a8' },
        border: true,
        items: [
            { xtype: 'component', width: 120, height: 38, autoEl: { tag: 'img', src: 'resources/emspeed/madEMSPEED.jpg' } }
        ]
    },
    bodyStyle: { backgroundColor: '#f5f5f5' },
    style: { borderRight: '0px solid #003366' },
    bodyPadding: '0 0 0 0',
    //title: 'Menu',
    //glyph: 0xf00b,
    width: 170,
    //minWidth: 180,
    split: false,
    //border: true,
    collapsible: true,
    rootVisible: false,
    lines: false,
    useArrows: true,
    hideHeaders: true,
    reserveScrollbar: false,
    layout: 'fit',

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
                //children: me.getNavItems()
                children: project.projectMenu
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

    //getNavItems: function () {
    //    return [
    //        {
    //            id: "EMSPEED",
    //            text: "EMSPEED",
    //            expanded: true,
    //            leaf: false,
    //            action: 'submenu',
    //            qtip: "Dashboard4",
    //            fa: 'fa-bar-chart-o',
    //            //"menuItemId": 1,
    //            //"menuItemName": "EMSPEED",
    //            "menuItemBasePanel": null,
    //            "menuItemUrl": null,
    //            "sequence": 1,
    //            "parentId": null,
    //            "level": 1,
    //            "launch": false,
    //            "launchFormat": null,
    //            //"menuItemIcon": "emspeed-home",
    //            //"menuItemTooltip": "Home",
    //            children: [
    //                //{ id: "Dashboard", text: "Dashboard", expanded: false, leaf: true, action: "dashboard", qtip: "Dashboard", fa: 'fa-home', menuItemBasePanel: 'dashboardBasePanel' },
    //                //{ id: "Dashboard2", text: "Dashboard2", expanded: false, leaf: true, action: "dashboard", qtip: "Dashboard2", fa: 'fa-bar-chart-o', menuItemBasePanel: 'dashboard2BasePanel' },
    //                //{ id: "Dashboard3", text: "Dashboard3", expanded: false, leaf: true, action: "dashboard", qtip: "Dashboard3", fa: 'fa-bar-chart-o', menuItemBasePanel: 'dashboard3BasePanel' },
    //                {
    //                    id: "Dashboard4",
    //                    text: "Dashboard4",
    //                    expanded: false,
    //                    leaf: true,
    //                    action: 'dashboard',
    //                    qtip: "Dashboard4",
    //                    fa: 'fa-bar-chart-o',
    //                    //"menuItemId": 1,
    //                    //"menuItemName": "Dashboard4",
    //                    "menuItemBasePanel": "dashboardRoot",
    //                    "menuItemUrl": null,
    //                    "sequence": 1,
    //                    "parentId": null,
    //                    "level": 2,
    //                    "launch": false,
    //                    "launchFormat": null
    //                    //"menuItemIcon": "emspeed-home",
    //                    //"menuItemTooltip": "Home"
    //                },
    //                {
    //                    id: "Dashboard5",
    //                    text: "Dashboard5",
    //                    expanded: false,
    //                    leaf: true,
    //                    action: 'dashboard',
    //                    qtip: "Dashboard4",
    //                    fa: 'fa-bar-chart-o',
    //                    //"menuItemId": 1,
    //                    //"menuItemName": "Dashboard4",
    //                    "menuItemBasePanel": "dashboardRoot",
    //                    "menuItemUrl": null,
    //                    "sequence": 1,
    //                    "parentId": null,
    //                    "level": 2,
    //                    "launch": false,
    //                    "launchFormat": null
    //                    //"menuItemIcon": "emspeed-home",
    //                    //"menuItemTooltip": "Home"
    //                },
    //                {
    //                    id: "Dashboard6",
    //                    text: "Dashboard6",
    //                    expanded: false,
    //                    leaf: true,
    //                    action: 'dashboard',
    //                    qtip: "Dashboard4",
    //                    fa: 'fa-bar-chart-o',
    //                    //"menuItemId": 1,
    //                    //"menuItemName": "Dashboard4",
    //                    "menuItemBasePanel": "dashboardRoot",
    //                    "menuItemUrl": null,
    //                    "sequence": 1,
    //                    "parentId": null,
    //                    "level": 2,
    //                    "launch": false,
    //                    "launchFormat": null
    //                    //"menuItemIcon": "emspeed-home",
    //                    //"menuItemTooltip": "Home"
    //                },
    //                {
    //                    id: "Dashboard7",
    //                    text: "Dashboard7",
    //                    expanded: false,
    //                    leaf: true,
    //                    action: 'dashboard',
    //                    qtip: "Dashboard4",
    //                    fa: 'fa-bar-chart-o',
    //                    //"menuItemId": 1,
    //                    //"menuItemName": "Dashboard4",
    //                    "menuItemBasePanel": "dashboardRoot",
    //                    "menuItemUrl": null,
    //                    "sequence": 1,
    //                    "parentId": null,
    //                    "level": 2,
    //                    "launch": false,
    //                    "launchFormat": null
    //                    //"menuItemIcon": "emspeed-home",
    //                    //"menuItemTooltip": "Home"
    //                },
    //            ]
    //        },
    //        {
    //            text: "Other",
    //            expanded: true,
    //            leaf: false,
    //            children: [
    //                { id: "BigData", text: "BigData", qtip: "BigData", leaf: true, fa: 'fa-sitemap', menuItemBasePanel: 'bigdataBasePanel' },
    //                { id: "MVVM", text: "MVVM", qtip: "MVVM", leaf: true, fa: ' fa-camera', menuItemBasePanel: 'mvvmBasePanel' },
    //                { id: "Binding", text: "Binding", qtip: "Binding", leaf: true, fa: 'fa-code-fork', menuItemBasePanel: 'bindingBasePanel' },
    //                { id: "Grid", text: "Grid", qtip: "Grid", leaf: true, fa: 'fa-taxi', menuItemBasePanel: 'gridBaseView' }
    //            ]
    //        }
    //    ];
    //}

});