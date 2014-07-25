/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Ext5Test.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Ext5Test',

    requires: [
        'EMSPEED.common.Marc'
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
        marc.test('hi');
    }
});
