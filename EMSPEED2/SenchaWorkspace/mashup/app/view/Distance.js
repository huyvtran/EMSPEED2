Ext.define('Mashup.view.Distance', {
	extend: 'Ext.panel.Panel',
	requires: ['Ext.window.MessageBox'],

	mixins: ['Ext.mixin.Mashup'],
	requiredScripts: ['http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.js'],

	html: 'Look at the console log. :-)',
	bodyPadding: 16,
	title: 'How Far?',
	constructor: function(){
		console.log('Mashup.view.Distance#constructor');

			var pierreSD = L.latLng(43.0814971, -89.4493224);
			var parisTX = L.latLng(33.6751155, -95.5316914);
			var distance = parisTX.distanceTo(pierreSD) / 1000;
			distance = Math.round(distance);
			var s = Ext.util.Format.number(distance, '0,0');
			console.log('The distance between Pierre, South Dakota, and Paris, Texas, is ' + s + ' kilometers.');


		this.callParent(arguments);


	}

});