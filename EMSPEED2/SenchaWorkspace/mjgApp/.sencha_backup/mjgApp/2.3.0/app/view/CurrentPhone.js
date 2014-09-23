Ext.define('mjgApp.view.CurrentPhone', {
    extend: 'Ext.Carousel',
    xtype: 'currentphone',
    
    config: {
        bufferSize: 2,
        direction: 'horizontal',
        items: [
            { xtype: 'container', padding: '5 5 5 5', contentEl: 'summary', style: {backgroundColor: '#FFFFFF'} },
            //{ xtype: 'basepage', image: 'SharePointRest.png', header: 'SharePoint REST API Remote List Reader' },
            { xtype: 'imagepanel', image: 'mobile.png', header: 'Project Management Mobile Application' },
            { xtype: 'imagepanel', image: 'EMSPEED12.png', header: 'HTML5 Single Page Application' },
            { xtype: 'imagepanel', image: 'me.png', header: 'This application - iPad resume' },
            { xtype: 'imagepanel', image: 'EMSPEEDPOC.jpg', header: 'HTML5 Graphical Proof of Concept', style: { backgroundColor: '#FFFFFF' } },
            { xtype: 'imagepanel', image: 'EMSPEED10.jpg', header: 'HTML5/Silverlight Web Application' },
            { xtype: 'imagepanel', image: 'NalcoEquip.jpg', header: 'ASP.NET/Silverlight Web Application', style: { backgroundColor: '#FFFFFF' } },
            { xtype: 'imagepanel', image: 'Scheduler.jpg', header: 'Silverlight/SharePoint Web Application' },
            { xtype: 'imagepanel', image: 'Atlas.jpg', header: 'SharePoint Custom Search Web Application', style: { backgroundColor: '#FFFFFF' } },
            { xtype: 'imagepanel', image: 'EMSIX.png', header: 'ASP.NET/AJAX Web Application' }
        ]
    }
});