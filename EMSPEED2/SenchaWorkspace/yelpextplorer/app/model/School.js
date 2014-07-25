Ext.define('YelpExtplorer.model.School', {
	extend: 'Ext.data.Model',

	fields: [{
			name: 'id',
			type: 'auto'
		}
	],
	proxy: {
		type: 'ajax',
		url: 'http://traininglabs.sencha.com/go?fn=schoollist',
		reader: {
			type: 'json',
			rootProperty: 'data'
		}
	}

});