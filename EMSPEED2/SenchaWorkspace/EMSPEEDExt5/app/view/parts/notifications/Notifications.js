Ext.define('EMSPEEDExt5.view.parts.notifications.Notifications', {
    extend: 'EMSPEEDExt5.view.dashboard.dashboardPartsBase',
    xtype: 'notifications',
    layout: 'fit',
    height: 300,
    items: [

        {
            xtype: 'component',
            padding: '5',
            html: 'Notifications'
        }
    ],

    tools: [
        { type: 'pin' },
        { type: 'refresh' },
        { type: 'search' },
        { type: 'save' }
    ]


});
