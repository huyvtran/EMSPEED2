Ext.define("YelpExtplorer.view.businesses.View", {
	"extend": "Ext.view.View",
	"xtype": "businessesview",

	itemTpl: '<figure><img src="{photo_url}" /><figcaption>{name}</figcaption></figure>',
	itemCls: 'businessesview',
	overItemCls: 'over',
	selectedItemCls: 'selected',

	autoScroll: true,

	listeners: {
		select: 'onSelectedItemChange',
		scope: 'this'
	},
	onSelectedItemChange: function(grid, record) {
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