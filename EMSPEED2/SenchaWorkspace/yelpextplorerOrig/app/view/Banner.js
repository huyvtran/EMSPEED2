Ext.define("YelpExtplorer.view.Banner", {
	"extend": "Ext.toolbar.Toolbar",
	xtype: 'banner',
	// alias: 'widget.banner', // An alternative to using xtype
	items: [{
		xtype: 'component',
		html: '<img src="resources/images/YelpExtplorerLogo.png" />',
		height: 36,
		width: 154

	}, '', 
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
			// value: {
			// 	bindTo: '{school.id}',
			// 	twoWay: false
			// }
		},

		queryMode: 'local',
		displayField: 'name',
		valueField: 'id'
	}, '',
{
	xtype: 'breadcrumb',
	flex: 1,
	reference: 'breadcrumb',
	store: Ext.create('Ext.data.TreeStore', {
		rootVisible: true,
		root: {
			text: 'All'
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