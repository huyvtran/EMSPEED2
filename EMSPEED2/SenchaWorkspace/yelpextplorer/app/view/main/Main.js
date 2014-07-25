Ext.define('YelpExtplorer.view.main.Main', {
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
    // {
    //     region: 'west',
    //     width: 270,
    //     xtype: 'businessesfilter',
    //     listeners: {
    //         select: 'onCategorySelect'
    //     },
    //     bind: {
    //         title: '{school.name}',
    //         store: '{categories}'
    //     }
    // }, 
    {
        region: 'north',
        xtype: "banner"
    }, {
        region: 'center',
        xtype: 'businessestabpanel',
        listeners: {
            tabchange: 'onBusinessesTabChange'
        },
    }, {
        region: 'east',
        xtype: 'businessdetail',
        title: 'businessdetail',
        bind: {
            data: '{business}',
            title: '{business.name}'
        }
    }]
});