Ext.define('EMSPEEDExt5.view.mvvm.mvvmBasePanel', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassPanel',
    xtype: 'mvvmBasePanel',
    id: 'mvvmBasePanel',
    requires: [
        //'EMSPEEDExt5.data.GetProjects'
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                { text: 'Load', width: '100px', handler: 'onLoadClick', glyph: 61 },
                { text: 'Export', width: '100px', handler: 'onExportClick', glyph: 115 }
            ]
        }
    ],

    controller: 'mvvmBasePanelController',
    layout: 'vbox',
    viewModel: {
        type: 'mvvmViewModel'
    },
    bind: {
        title: 'Hello {name}'
    },

    initComponent: function () {

        this.items = [

                {
                    xtype: 'textfield',
                    reference: 'theTextField'
                },

                {
                    xtype: 'grid',
                    reference: 'theGrid',
                    id: 'theGrid',
                    listeners: {
                        select: 'onGridSelect'
                    },

                    width: '100%',
                    title: 'Master Panel',
                    store: 'ProjectsStore',
                    //this does not seem to work
                    //bind: {
                    //    store: '{Projects}'
                    //},

                    columns: [
                        { text: 'Project ID', dataIndex: 'projectId' },
                        { text: 'Project Name', dataIndex: 'projectName', flex: 1 },
                        { text: 'Project Manager', dataIndex: 'projectManager', width: 300 }
                    ]
                }
         ];

        this.callParent(arguments);
        com.endLoading();
    },

    constructor: function (config) {
        this.callParent(arguments);
        //console.log('constructor');
        this.getData();
    },

    getData: function () {
        var refs = this.getReferences();
        var theGridStore = refs.theGrid.getStore();
        theGridStore.load({
            params: { "filter": { "displayType": 1, "loadAuditInfo": true, "loadBaseAttributes": true, "loadLevelInfo": true, "loadManagement": true, "loadPmtKpis": true, "loadPmtRollUpKpis": false, "loadUrls": true } },
            scope: this,
            callback: function (records, operation, success) {
                console.log(records);
            }
        });
    },




    itemsx: [

        {
            xtype: 'textfield',
            reference: 'theTextField'
        },

        {
            xtype: 'grid',
            reference: 'theGrid',
            listeners: {
                select: 'onGridSelect' 
            },

            width: '100%',
            title : 'Master Panel',
            bind: {
                store: '{Projects}'
            },

            columns: [
                { text : 'Project ID', dataIndex: 'projectId' },
                { text : 'Project Name', dataIndex: 'projectName', flex : 1 },
                { text : 'Project Manager', dataIndex: 'projectManager', width: 300 }
            ]
        }
    ]
});