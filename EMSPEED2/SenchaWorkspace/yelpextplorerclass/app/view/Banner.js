Ext.define("yelpextplorerclass.view.Banner",{
    "extend": "Ext.toolbar.Toolbar",
    xtype: 'banner',
    requires: ['Ext.data.TreeStore', 'Ext.toolbar.Breadcrumb'],
    // alias: 'widget.banner', // An alternative to using xtype

    items: [
        {
            xtype: 'component',
            html: '<img src="resources/images/YelpExtplorerLogo.png" />',
            width: 154,
            height: 36
        },
        {
            xtype: 'combobox',
            reference: 'schoolCombo',
            publishes: 'value',
            fieldLabel: 'University',
            labelWidth: 60,
            width: 180,
            forceSelection: true,
            emptyText: 'Select',

            //store: [[0, "USC"], [1, "MIT"], [2, "Harvard"]],
            bind: {
                store: '{schools}'
            },

            queryMode: 'local',
            displayField: 'name',
            valueField: 'id'
        },

        {
            xtype: 'breadcrumb',
            flex: 1,
            reference: 'breadcrumb',
            store: Ext.create('Ext.data.TreeStore', {
                rootVisible: true,
                root: {
                    text: 'All',
                    expanded: true,
                    leaf: true
                }
            }),
            bind: {
                selection: '{category}',
                store: '{categories}'
            },
            publishes: 'selection'
        }

    ]

});
