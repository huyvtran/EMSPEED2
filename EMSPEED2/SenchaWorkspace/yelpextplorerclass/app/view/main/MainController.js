/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('yelpextplorerclass.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
        'Ext.MessageBox'
    ],

    onCategorySelect: function(sender, category) {
        console.log(category.data.text);
        this.getViewModel().set('category', category);
    },

    onSchoolsLoadFirstTime: function (store) {
        this.lookupReference('schoolCombo').setValue(20); // 20 is the University of Illinois
    },

    onBusinessesLoad: function (store) {
       //console.log('onBusinessesLoad');
        this.getViewModel().set('business', null);

        var school = this.getViewModel().get('school');

        //store.suspendEvents();

        store.each(function (business) {
            var from = new google.maps.LatLng(school.data.latitude, school.data.longitude);
            var to = new google.maps.LatLng(business.data.latitude, business.data.longitude);
            var meters = google.maps.geometry.spherical.computeDistanceBetween(from, to);
            business.set('distance', meters);
            //console.log(business.data.distance);
        })

        //store.resumeEvents();

    },

    initViewModel: function (vm) {
        vm.bind('{business}', function(record){
            //console.log(record && record.data.name);
        })
    }

});
