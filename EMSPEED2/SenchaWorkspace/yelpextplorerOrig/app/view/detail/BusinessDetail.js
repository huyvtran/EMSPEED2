Ext.define("YelpExtplorer.view.detail.BusinessDetail", {
	"extend": "Ext.panel.Panel",
	xtype: 'businessdetail',
	"controller": "detail-businessdetail",
	"viewModel": {
		"type": "detail-businessdetail"
	},
	bodyPadding: 8,
	width: 130,
	tpl: [
		'<tpl if="this.isData(values)">',
		'<div>',
		'<p><b>{name}</b></p>',
		'<img src="resources/images/stars_{stars}.png"/><br/>',
		'<img src="{photo_url}"/><br/><br/>',
		'Reviews: {review_count}<br/><br/><br/>',
		'{full_address}<br/><br/>',
		'<a href="{url}" target="_blank">Full review at Yelp.com</a>',
		'</div>',
		'</tpl>', {
			isData: function(data) {
				return !Ext.Object.isEmpty(data);
			}
		}
	]
});