Ext.define('yelpextplorer2.view.Viewport.North', {
    "extend": "Ext.toolbar.Toolbar",
    xtype: 'North',
    items: [
        {
		    xtype: 'component',
		    html: '<img src="resources/images/YelpExtplorerLogo.png" />',
		    height: 36,
		    width: 154
        },
        '',
        {
	        xtype: 'combobox',
	        reference: 'schoolCombo',
	        publishes: 'value',
	        fieldLabel: 'University',
	        labelWidth: 60,
	        width: 180,
	        forceSelection: true,
	        emptyText: 'Select',

	        bind: {
	            store: '{schools}',
	             value: {
	             	bindTo: '{school.id}',
	             	twoWay: false
	             }
	        },

	        queryMode: 'local',
	        displayField: 'name',
	        valueField: 'id'
	    }


    ]
});
