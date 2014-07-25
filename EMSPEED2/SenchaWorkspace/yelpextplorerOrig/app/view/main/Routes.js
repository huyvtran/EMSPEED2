Ext.define('YelpExtplorer.view.main.Routes', {
	extend: 'Ext.Mixin',
	processRoute: function(tab, schoolId) {
		tab = tab || 'map';
		this.lookupReference('businessTabPanel').setActiveItem(tab);

		this.cardItemId = tab;
		this.schoolId = schoolId;

		if (schoolId) {
			var vm = this.getViewModel();
			var store = vm.getStore('schools');
			if (store && (store.loadCount > 0)) {
				var school = store.getById(schoolId);
				if (school) {
					vm.set('school', school);
				}
			}
		}
	},

	onSchoolIdChange: function(schoolId) {
		this.lookupReference('schoolCombo').setValue(schoolId);
		this.schoolId = schoolId;
		this.updateHash();
	},
	onBusinessesTabChange: function(tabpanel, card) {
		this.cardItemId = card.getItemId();
		this.updateHash();
	},
	updateHash: function() {
		var hash = '!' + this.cardItemId;
		if (this.schoolId) {
			hash += '/' + this.schoolId;
		}
		this.redirectTo(hash);
	},

	onSchoolsLoadFirstTime: function(store) {
		var token = Ext.util.History.getToken().substr(1); // Skip the !
		var index = token.indexOf('/');
		var tab = token.substr(0, index);
		var schoolId = token.substr(index + 1);
		this.processRoute(tab, schoolId);
	}
});