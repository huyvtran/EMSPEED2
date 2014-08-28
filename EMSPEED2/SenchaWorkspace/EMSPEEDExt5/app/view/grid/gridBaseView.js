Ext.define('EMSPEEDExt5.view.grid.gridBaseView', {
    extend: 'Ext.grid.property.Grid',
    title: 'Grid',
    xtype: 'gridBaseView',
    id: 'gridBaseView',

    bodyPadding: 0,
    padding: 0,
    //layout: 'fit',
    width: 300,
    height: 700,
    enableColumnResize: false,
    nameColumnWidth: 150,


    dockedItems: [

        {
            xtype: 'toolbar',
            dock: 'top',
            reference: 'properties',
            hidden: false,
            //id: 'toolbarProperties',
            items: [

                {
                    xtype: 'button',
                    text: 'hi'
                }
            ]


        }
    ],




    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        com.endLoading();
    }



});
