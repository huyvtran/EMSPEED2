/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('yelpextplorerclass.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            region: 'west',
            xtype: 'businessfilter',
            title: 'businessfilter',
            width: 270,
            bind: {
                store: '{categories}'
            }
        },
    {
        region: 'north',
        xtype: 'banner'
    }, {
        region: 'center',
        xtype: 'businessestabpanel'
    }, {
        region: 'east',
        xtype: 'businessdetail',
        title: 'businessdetail',
        width: 270

    }]


});
