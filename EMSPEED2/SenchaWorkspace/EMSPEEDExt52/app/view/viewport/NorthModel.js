Ext.define('EMSPEEDExt5.view.viewport.NorthModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.NorthModel',
	stores: {
		schools: {
		    model: 'EMSPEEDExt5.model.School',
			autoLoad: true
		}
	}
});