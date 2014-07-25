Ext.define('yelpextplorerclass.view.detail.EditBusinessWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.detail-editbusinesswindow',

    onWindowShow: function (window) {
        var business = this.getViewModel().get('business');
        this.lookupReference('form').loadRecord(business);
    },

    onSave: function () {
        // alert('onSave');
        debugger;
        var business = this.getViewModel().get('business');
        this.lookupReference('form').updateRecord(business);

        this.getView().close();
    },
    
    onCancel: function () {
    //    alert('onCancel');
    //    debugger;
        this.getView().close();
    },

    onStarSliderChange: function (slider, stars) {
        this.lookupReference('starsImage').setSrc('resources/images/stars_' + stars + '.png');
    }

});
