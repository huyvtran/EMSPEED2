Ext.define("YelpExtplorer.view.businesses.TabPanel", {
    "extend": "Ext.tab.Panel",
    "xtype": "businessestabpanel",
    reference: 'businessTabPanel',
    items: [{
        xtype: 'businessesmap',
        title: 'Map',
        itemId: 'map',
        bind: {
            location: '{location}',
            store: '{businessesForCategory}',
            business: '{business}'
        }
    }, {
        xtype: 'businessesgrid',
        title: 'Grid',
        itemId: 'grid',
        bind: {
            store: '{businessesForCategory}',
            business: '{business}',
        }
    }, {
        xtype: 'businessesview',
        title: 'View',
        itemId: 'view',
        bind: {
            store: '{businessesForCategory}',
            business: '{business}',
        }
    }]
});