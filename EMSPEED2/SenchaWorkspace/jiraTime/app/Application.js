/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('jiraTime.Application', {
    extend: 'Ext.app.Application',
    
    name: 'jiraTime',

    requires: [
        //'Ext.app.*',
        'Ext.state.CookieProvider',
        'MyPackage.package.mjg',
        'EMSPEED.common.com',
        'EMSPEED.common.Marc',
        'Ext.state.LocalStorageProvider',
        'Ext.window.MessageBox',
        'Ext.tip.QuickTipManager',
        'EMSPEEDExt5.*'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Root'
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
