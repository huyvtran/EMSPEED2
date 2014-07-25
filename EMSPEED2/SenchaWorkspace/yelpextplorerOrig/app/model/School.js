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
		limitParam: false, //to remove param "limit"
		pageParam: false, //to remove param "page"
		startParam: false, //to remove param "start"
		noCache: false, //to remove param "_dc"
		paramsAsJson: true,
		withCredentials: true,
		useDefaultXhrHeader: false,

		reader: {
			type: 'json',
			rootProperty: 'data'
		}
	}

});