Ext.define('Pokemon.model.Summary', {
	extend: 'Ext.data.Model',

	fields: ['hp',{
		name: 'attack',
		type: 'auto'
	}, {
		name: 'defense',
		type: 'auto'
	}, {
		name: 'speed',
		type: 'auto'
	}, {
		name: 'aggression',
		calculate: function(data) {
			return data.speed * data.attack;
		}
	}, {
		name: 'keystats',
		calculate: function(data) {
			// Since these are implicitly "depends", we need 
			// to define them in fields:[]
			return [data.hp, data.attack, data.defense, data.speed]
		}
	}],
	proxy: {
		type: 'ajax',
		url: 'resources/pokemon/inventory.json'
	}
});