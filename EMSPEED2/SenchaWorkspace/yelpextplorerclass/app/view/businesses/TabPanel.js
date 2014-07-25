
Ext.define("yelpextplorerclass.view.businesses.TabPanel",{
    extend:'Ext.tab.Panel',
    "xtype": "businessestabpanel",
    items: [{
        xtype: 'businessesmap',
        title: 'Map',
        bind: {
            store: '{businessesForCategory}',
            location: '{location}',
            business: '{business}'
        }
    }, {
        xtype: 'businessesgrid',
        title: 'Grid',
        bind: {
            store: '{businessesForCategory}',
            business: '{business}'
        }

    },
    {
        xtype: 'businessesview',
        title: 'View',
        bind: {
            store: '{businessesForCategory}',
            business: '{business}'
        }
    },
    {
        xtype: 'businessesdistance',
        title: 'Distance',
        bind: {
            store: '{businessesForCategory}',
            business: '{business}'
        }
    }
    ]
});
