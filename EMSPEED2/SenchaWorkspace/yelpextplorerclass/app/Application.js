/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('yelpextplorerclass.Application', {
    extend: 'Ext.app.Application',
    
    name: 'yelpextplorerclass',
    requires: ['yelpextplorerclass.*'],
    controllers: [
        'Root'
        // TODO: add controllers here
    ],
    launch: function () {
        //alert('Application launch: The google namespace ' + (((typeof google) === 'undefined') ? 'does not exist' : 'exists'));
    }
});
