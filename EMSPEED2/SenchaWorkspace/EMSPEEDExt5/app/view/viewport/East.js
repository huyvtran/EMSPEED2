Ext.define('EMSPEEDExt5.view.viewport.East', {
    extend: 'Ext.tree.Panel',
    xtype: 'East',
    viewConfig: {
        cls: 'emspeed-tree-view ',
        itemCls: 'emspeed-grid-item',
        itemSelector: 'table.emspeed-grid-item',
        selectedItemCls: 'emspeed-grid-item-selected',
        overItemCls: 'emspeed-grid-item-over'
    },


    controller: 'EastController',
    id: 'East',

    listeners: {
        scope: 'controller',
        afterlayout: 'onAfterLayout',
        beforeselect: 'beforeNavSelectionChange',
        selectionchange: 'onNavSelectionChange',
        itemcollapse: 'onItemCollapse'
    },


    style: { borderRight: '1px solid #cccccc' },

    header: {
        //bodyStyle: { backgroundColor: '#003366' },
        //style: { backgroundColor: '#003366' },
        itemPosition: 0,
        items: [
            { xtype: 'component', width: 120, height: 38, autoEl: { tag: 'img', src: 'resources/emspeed/madEMSPEED.jpg' } }
        ]
    },
//    bodyStyle: { backgroundColor: '#f5f5f5' },
    bodyStyle: { backgroundColor: '#003366' },
    bodyPadding: '0 0 0 0',

    width: 170,
    split: false,
    collapsible: true,
    rootVisible: false,
    lines: false,
    useArrows: true,
    hideHeaders: true,
    reserveScrollbar: false,
    layout: 'fit',

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
                        s = '<i style="width:15px;margin: 0 10px 0 -30px" class="fa ' + record.data.fa + '"></i>';
                    }
                    return s + '<span>' + value + '</span>';
                }
            }
        ];
        Ext.apply(me, {
            store: store
        });
        me.callParent(arguments);
    }
});