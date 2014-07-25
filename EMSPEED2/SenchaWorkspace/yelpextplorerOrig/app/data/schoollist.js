Ext.define('YelpExtplorer.data.schoollist', {
    requires: [
        'YelpExtplorer.data.Init'
    ]
}, function () {
    Ext.ux.ajax.SimManager.register({
        'http://traininglabs.sencha.com/go?fn=schoollist': {
            type: 'json',
            data: {data: [
    { 'id': 1, 'name': "Illinois" },
    { 'id': 2, 'name': "Minnesota" },
    { 'id': 3, 'name': "ND" },
    { 'id': 4, 'name': "Kansas" },
    { 'id': 5, 'name': "Nebraska" },
    { 'id': 6, 'name': "Michigan" }
            ]}
        }
    });
});