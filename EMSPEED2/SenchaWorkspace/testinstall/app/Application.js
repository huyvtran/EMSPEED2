Ext.define('TestInstall.Application', {
    extend: 'Ext.app.Application',

    name: 'TestInstall',

    launch: function() {

        Ext.fly('fail').remove();
        Ext.create('Ext.panel.Panel', {
            title: ':-)',
            html: '<h2>It looks like your workspace is set up ok!</h2>',
            x: 20,
            y: 20,
            bodyPadding: 24,
            width: 340,
            height: 180,
            renderTo: Ext.getBody()
        });

    }
});