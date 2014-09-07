Ext.define('EMSPEEDExt5.view.viewport.Center', {
    extend: 'Ext.panel.Panel',
    xtype: 'Center',
    id: 'Center',
    layout: 'card',
    requires: [
        'Ext.layout.container.Card'
    ],
    dockedItems: [
        {
            xtype: 'projectheader',
            dock: 'top'
        }
        //{
        //    xtype: 'projectheaderrootdiv',
        //    dock: 'top'
        //}
    ]
});
