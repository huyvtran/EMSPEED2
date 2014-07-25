Ext.define('EMSPEEDExt5.view.grid.gridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.gridModel',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' }
    ],

    stores: {
        gridStore: {
            //model: 'gridModel',
            fields: ['id', 'name'],
            data: [
                { id: 1,  name: 'Item-1' },
                { id: 2,  name: 'Item-2' },
                { id: 3,  name: 'Item-3' },
                { id: 4,  name: 'Item-4' },
                { id: 5,  name: 'Item-5' }
            ]
        }
    }


});