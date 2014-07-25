Ext.define("YelpExtplorer.view.BusinessesFilter", {
	"extend": "Ext.tree.Panel",
	"xtype": "businessesfilter",

	rootVisible: true,
	root: {
		text: 'All'
	},

	useArrows: true,
	lines: false,

	tbar: [{
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
		},

		queryMode: 'local',
		displayField: 'name',
		valueField: 'id'
	}]
});