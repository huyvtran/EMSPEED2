Ext.define('yelpextplorerclass.view.detail.BusinessDetailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.detail-businessdetail',

    onEditClick: function () {
        Ext.create({
            xtype: 'editbusinesswindow',
            title: 'Business',
            autoShow: true
        });
    }
    
});
