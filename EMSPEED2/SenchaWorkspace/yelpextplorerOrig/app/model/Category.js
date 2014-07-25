Ext.define('YelpExtplorer.model.Category', {
	extend: 'Ext.data.Model',

	fields: [{
		name: 'text',
		type: 'auto'
	}],
	proxy: {
		type: 'ajax',
		url: 'http://traininglabs.sencha.com/go?fn=categories'
	}
});