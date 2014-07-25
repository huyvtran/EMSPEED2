Ext.define('yelpextplorer2.view.viewport.Viewport', {
    extend: 'Ext.container.Container',
    controller: 'ViewportController',
    requires: [
        //'yelpextplorer2.view.Viewport.North'
    ],
    viewModel: {
        type: 'ViewportModel'
    },

    layout: {
        type: 'border'
    },

    items: [
        { xtype: 'North', region: 'north'}
    ]
});
