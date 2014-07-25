Ext.define('EMSPEEDTouch.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id: 'main',
    requires: [
        'EMSPEEDTouch.view.base.ChildPanel',
        'EMSPEEDTouch.view.project.Summary',
        'EMSPEEDTouch.view.project.Team',
        'EMSPEEDTouch.view.project.RiskMatrix',
        'EMSPEEDTouch.view.project.RisksDataview',
        'EMSPEEDTouch.view.requisition.ViewRequisitions',
        'EMSPEEDTouch.view.requisition.ViewApprovals',
        'EMSPEEDTouch.view.home.Dashboard'
    ],

    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                xtype: 'childpanel', iconCls: 'home', title: 'home',
                p: [
                    { panel: 'dashboard', title: 'Dashboard' }
                ]
            },
            {
                xtype: 'childpanel', id: 'projectsID', iconCls: 'team', title: 'projects',
                p: [
                    { panel: 'summary', title: 'Summary' },
                    { panel: 'team', title: 'Team' },
                    { panel: 'riskmatrix', title: 'Risks Matrix' },
                    //{ panel: 'risksgrid', title: 'Risks Grid' },
                    { panel: 'risksdataview', title: 'All Risks' }
                ]
            },
            {
                xtype: 'childpanel', id: 'requisitionsID', iconCls: 'organize', title: 'requisitions',
                p: [
                    { panel: 'viewrequisitions', title: 'Requisitions' },
                    { panel: 'viewapprovals', title: 'Approvals' }
                ]
            }
            //{
            //    xtype: 'childpanel', id: 'miscID', iconCls: 'favorites', title: 'misc',
            //    p: [
            //        { panel: 'textarea', title: 'The TextArea' },
            //        { panel: 'buttons', title: 'The Buttons' },
            //        { panel: 'teamtest', title: 'The TeamTest' },
            //        { panel: 'camera', title: 'The Camera' },
            //        { panel: 'test', title: 'The Test' }
            //    ]
            //}


            //{ xtype: 'tomatos' },

            //{ title: 'arrow_down', iconCls: 'arrow_down' },
            //{ title: 'arrow_left', iconCls: 'arrow_left' },
            //{ title: 'arrow_right', iconCls: 'arrow_right' },
            //{ title: 'arrow_up', iconCls: 'arrow_up' }
            //{ title: 'compose', iconCls: 'compose' },
            //{ title: 'delete', iconCls: 'delete' },
            //{ title: 'organize', iconCls: 'organize' },
            //{ title: 'refresh', iconCls: 'refresh' },
            //{ title: 'reply', iconCls: 'reply' },
            //{ title: 'search', iconCls: 'search' },
            //{ title: 'settings', iconCls: 'settings' },
            //{ title: 'star', iconCls: 'star' },
            //{ title: 'trash', iconCls: 'trash' },
            //{ title: 'maps', iconCls: 'maps' },
            //{ title: 'locate', iconCls: 'locate' },
            //{ title: 'home', iconCls: 'home' },
            //{ title: 'bookmarks', iconCls: 'bookmarks' },
            //{ title: 'download', iconCls: 'download' },
            //{ title: 'favorites', iconCls: 'favorites' },
            //{ title: 'info', iconCls: 'info' },
            //{ title: 'more', iconCls: 'more' },
            //{ title: 'time', iconCls: 'time' },
            //{ title: 'user', iconCls: 'user' },
            //{ title: 'team', iconCls: 'team' },	

        ]
    }
});
