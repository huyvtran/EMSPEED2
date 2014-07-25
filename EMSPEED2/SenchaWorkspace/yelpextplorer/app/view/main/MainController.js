/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('YelpExtplorer.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    mixins: ['YelpExtplorer.view.main.Routes'],

    alias: 'controller.main',

    routes: {
        '!:tab': 'processRoute',
        '!:tab/:schoolId': 'processRoute'
    },

    initViewModel: function(vm) {
        vm.bind('{school.id}', this.onSchoolIdChange, this);
    },

    onCategorySelect: function(sender, category) {
        console.log(category.data.text);
        this.getViewModel().set('category', category);
    }

});