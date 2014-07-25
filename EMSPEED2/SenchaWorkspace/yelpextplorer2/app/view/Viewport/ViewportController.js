Ext.define('yelpextplorer2.view.viewport.ViewportController', {
    extend: 'Ext.app.ViewController',

    //requires: [
    //    'Ext.MessageBox'
    //],

    alias: 'controller.ViewportController',

	onSchoolsLoadFirstTime: function(store) {
		var token = Ext.util.History.getToken().substr(1); // Skip the !
		var index = token.indexOf('/');
		var tab = token.substr(0, index);
		var schoolId = token.substr(index + 1);
		//this.processRoute(tab, schoolId);
	}

});
