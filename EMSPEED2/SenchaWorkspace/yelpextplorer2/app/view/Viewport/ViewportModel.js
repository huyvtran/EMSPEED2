Ext.define('yelpextplorer2.view.viewport.ViewportModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.ViewportModel',

	stores: {
		schools: {
			model: 'YelpExtplorer2.model.School',
			autoLoad: true
//			listeners: {
//				load: {
//					fn: 'onSchoolsLoadFirstTime',
//					single: true
//				}
//			}
		}
	}





});