Ext.define('Ext.overrides.dashboard.Column', {
    override: 'Ext.dashboard.Column',

    //listeners: {
    //    resize: 'onResize'
    //}

    listeners: {
    resize: function() {alert('resize')}
    }


});
