/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Pokemon.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.main',

	requires: ['Pokemon.model.Summary'],

	data: {
		detail: null
	},
	stores: {
		summaries: {
			model: 'Pokemon.model.Summary',
			autoLoad: true,
			listeners: {
				load: {
					fn: 'onSummariesLoadFirstTime',
					single: true
				}
			}
		},
		gridSummaries: {
			source: '{summaries}'
		}

	}
});