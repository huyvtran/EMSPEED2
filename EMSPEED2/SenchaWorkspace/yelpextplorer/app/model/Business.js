Ext.define('YelpExtplorer.model.Business', {
	extend: 'Ext.data.Model',

	idProperty: 'business_id',
	fields: [{
			name: 'business_id',
			type: 'auto'
		}
	],
	proxy: {
		type: 'ajax',
		url: 'http://traininglabs.sencha.com/go?fn=schoolbiz',
		reader: {
			type: 'json',
			rootProperty: 'data'
		}
	}

});