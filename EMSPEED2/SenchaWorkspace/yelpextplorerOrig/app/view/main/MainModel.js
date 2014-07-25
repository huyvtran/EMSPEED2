/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('YelpExtplorer.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.main',

	data: {
		business: null
	},
	formulas: {
		school: {
			bind: '{schoolCombo.value}',
			get: function(data) {
				var store = data && this.getStore('schools');
				return store && store.getById(data);
			}
		},
		location: function(get) {
			var school = get('school');
			if (school) {
				return {
					latitude: school.data.latitude,
					longitude: school.data.longitude
				}
			}
		}
	},
	stores: {
		categories: {
			type: 'tree',
			model: 'YelpExtplorer.model.Category',
			autoLoad: true,
			rootVisible: true,
			root: {
				text: 'All',
				expanded: true
			}
		},
		businesses: {
			model: 'YelpExtplorer.model.Business',
			//type: 'businesses',
			autoLoad: true,
			remoteFilter: true,
			filters: [{
				property: 'schoolid',
				value: '{school.id}'
			}],
			sorters: ['name']
		},
		businessesForCategory: {
			source: '{businesses}',
			storeId: 'businessesForCategory',
			filters: [{
				category: '{category}',
				id: 'cat',
				filterFn: function(business) {
					// console.log(business && business.data);
					if (!this.category) {
						return true; // treat no selection as "All"
					}
					var c = this.category.get('text');
					return (c === 'All') || Ext.Array.contains(business.get('categories'), c);
				}
			}]
		},
		schools: {
			model: 'YelpExtplorer.model.School',
			autoLoad: true,
			listeners: {
				load: {
					fn: 'onSchoolsLoadFirstTime',
					single: true
				}
			}
		}
	}
});