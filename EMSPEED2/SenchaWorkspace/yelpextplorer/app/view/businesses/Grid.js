Ext.define("YelpExtplorer.view.businesses.Grid", {
	"extend": "Ext.grid.Panel",
	"xtype": "businessesgrid",
	columns: [{
		text: 'Name',
		dataIndex: 'name',
		width: 120
	}, {
		xtype: 'templatecolumn',
		text: 'Rating',
		dataIndex: 'stars',
		tpl: '<img src="resources/images/stars_{stars}.png"/>'
	}, {
		text: 'Reviews',
		dataIndex: 'review_count',
		width: 60,
		align: 'right'
	}, {
		text: 'Address',
		dataIndex: 'full_address',
		flex: 1
	}],

	listeners: {
		select: 'onSelectedItemChange',
		scope: 'this'
	},
	onSelectedItemChange: function(grid, record){
		this.setBusiness(record);
	},
	renderConfig: {
		business: null
	},
	twoWayBindable: [
		'business'
	],
	updateBusiness: function(business, previous) {
		var selection = this.getSelectionModel();
		if (business) {
			selection.select(business);
		}
		if (previous) {
			selection.deselect(previous);
		}
	}
});