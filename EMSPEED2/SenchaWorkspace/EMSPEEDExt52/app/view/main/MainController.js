/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('EMSPEEDExt5.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onClickReload: function () {
        window.location = 'http://EMSPEEDExt5.azurewebsites.net/build/production/EMSPEEDExt5/index.html';
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
