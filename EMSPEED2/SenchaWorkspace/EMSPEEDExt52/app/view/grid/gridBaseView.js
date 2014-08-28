Ext.define('EMSPEEDExt5.view.grid.gridBaseView', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassPanel',
    title: 'Grid',
    xtype: 'gridBaseView',
    id: 'gridBaseView',

    requires: [
        'EMSPEEDExt5.view.grid.gridBaseViewController',
        'EMSPEEDExt5.view.grid.gridModel'
    ],



    controller: {
        type: 'gridBaseViewController'
    },
    viewModel: {
        type: 'gridModel'
    },

    layout:  'vbox',

    defaults: {
        xtype: 'button'
    },
    initComponent: function () {
        this.items = [
            {
                text: 'grid',
                handler: 'onClickGrid'
            },
            {
                xtype: 'grid',
                height: 251,
                border: true,
                //bind: '{gridStore}',
                store: {
                    //model: 'gridModel',
                    fields: ['id', 'name'],
                    data: [
                        { id: 1,  name: 'Item-1' },
                        { id: 2,  name: 'Item-2' },
                        { id: 3,  name: 'Item-3' },
                        { id: 4,  name: 'Item-4' },
                        { id: 5,  name: 'Item-5' }
                    ]
                },

                viewConfig: {
                    emptyText: 'Please modify your risk matrix selections. No risks found'
                },
                columns: [
                    { text: 'id', name: 'id', dataIndex: 'id' },
                    { text: 'name', name: 'name', dataIndex: 'name' }
                ]
            }
        ];
        this.callParent();
    }
});
