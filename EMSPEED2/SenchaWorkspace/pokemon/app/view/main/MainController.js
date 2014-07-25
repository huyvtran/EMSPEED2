/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Pokemon.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox', 'Pokemon.model.Detail'
    ],

    alias: 'controller.main',

    routes: {
        'id/:id': 'processRoute'
    },

    onSelect: function(dataview, record) {
        console.log(Ext.JSON.encode(record.data));
        var me = this;
        Pokemon.model.Detail.getProxy().setUrl('resources/pokemon/' + record.id + '.json');
        Pokemon.model.Detail.load(record.id, {
            callback: function(record, operation, success) {
                me.getViewModel().set('detail', record);
            }
        });
        this.redirectTo('id/' + record.id);
    },
    processRoute: function(id) {
        var store = this.getViewModel().getStore('summaries');
        if (id && store && (store.loadCount > 0)) {
            this.lookupReference('dataview').select(store.getById(id));
        }
    },
    onSummariesLoadFirstTime: function(store) {
        this.processRoute(Ext.util.History.getToken().substr(3));
    }

});