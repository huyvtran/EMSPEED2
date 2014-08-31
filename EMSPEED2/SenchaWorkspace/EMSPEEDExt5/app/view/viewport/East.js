Ext.define('EMSPEEDExt5.view.viewport.East', {
    extend: 'Ext.tree.Panel',
    xtype: 'East',
    viewConfig: {
        cls: 'emspeed-tree-view ',
        itemCls: 'emspeed-grid-item',
        //itemTpl: '<div>{text}</div>',
        itemSelector: 'table.emspeed-grid-item',
        selectedItemCls: 'emspeed-grid-item-selected',
        focusedItemCls: 'emspeed-grid-item-focused',
        overItemCls: 'emspeed-grid-item-over'
},
//    ui: 'light-framed',
    controller: 'EastController',
    id: 'East',
    style: { borderRight: '1px solid #cccccc' },

    header: {
        itemPosition: 0,
        //style: { borderBottom: '1px solid #6084a8' },
        border: true,
        items: [
            { xtype: 'component', width: 120, height: 38, autoEl: { tag: 'img', src: 'resources/emspeed/madEMSPEED.jpg' } }
        ]
    },
    bodyStyle: { backgroundColor: '#f5f5f5' },
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
                        s = '<i style="width: 15px;xcolor: #386a9d;xbackground-color:yellow;margin: 0px 10px 0px -30px" class="fa ' + record.data.fa + '"></i>';
                    }
                    return s + '<span style="xcolor: #386a9d;xbackground-color:yellow;" >' + value + '</span>';
                }
            }
        ];
        Ext.apply(me, {
            store: store
        });
        me.callParent(arguments);
    }
});