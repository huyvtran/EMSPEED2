Ext.define('mjgApp.view.CurrentTablet', {
    extend: 'Ext.Carousel',
    xtype: 'currenttablet',
    config: {
        bufferSize: 2,
        direction: 'horizontal',
        items: [
            //{ xtype: 'imagepanel', image: 'SharePointRest.png', header: 'SharePoint REST API Remote List Reader'},
            { xtype: 'imagepanel', image: 'mobile.png', header: 'Project Management Mobile Application' },
            { xtype: 'imagepanel', image: 'me.png', header: 'This application - iPad resume' },
            { xtype: 'imagepanel', image: 'EMSPEED12a.png', header: 'HTML5 Single Page Application', style: { backgroundColor: '#FFFFFF' } },
            { xtype: 'imagepanel', image: 'EMSPEEDPOC.jpg', header: 'HTML5 Graphical Proof of Concept' },
            { xtype: 'imagepanel', image: 'EMSPEED10.jpg', header: 'HTML5/Silverlight Web Application', style: { backgroundColor: '#FFFFFF' } },
            { xtype: 'imagepanel', image: 'NalcoEquip.jpg', header: 'ASP.NET/Silverlight Web Application' },
            { xtype: 'imagepanel', image: 'Scheduler.jpg', header: 'Silverlight/SharePoint Web Application', style: { backgroundColor: '#FFFFFF' } },
            { xtype: 'imagepanel', image: 'Atlas.jpg', header: 'SharePoint Custom Search Web Application' },
            { xtype: 'imagepanel', image: 'EMSIX.png', header: 'ASP.NET/AJAX Web Application', style: { backgroundColor: '#FFFFFF' } }
        ]
    }
});