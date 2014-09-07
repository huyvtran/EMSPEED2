Ext.define('EMSPEEDExt5.view.viewport.Viewport', {
    extend: 'Ext.container.Viewport',
   // extend: 'Ext.container.Container',
    id: 'Viewport',
    //controller: 'ViewportController',
    requires: [
        'Ext.layout.container.Border'
    ],
    layout: 'border',
    items: [
        { region: 'north', xtype: 'North' },
        //{ region: 'east', xtype: 'projectNavigation' },
        { region: 'center', xtype: 'Center' },
        { region: 'west',  xtype: 'East' },
        { region: 'south', xtype: 'South' }
    ]
});