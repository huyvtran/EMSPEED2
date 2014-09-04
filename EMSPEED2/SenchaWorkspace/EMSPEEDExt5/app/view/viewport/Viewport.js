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
        { region: 'west',  xtype: 'Navigation' },
        { region: 'center', xtype: 'Center' },
        //{ region: 'east', xtype: 'projectNavigation' },
        { region: 'south', xtype: 'South' }
    ]
});