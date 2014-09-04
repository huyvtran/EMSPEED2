Ext.define('EMSPEEDExt5.view.parts.subprojects.Subprojects', {
    extend: 'Ext.panel.Panel',
    //extend: 'EMSPEEDExt5.view.dashboard.dashboardPartsBase',
    xtype: 'subprojects',

    initComponent: function () {
        com.startLoading();

        this.fields = [
            { name: 'pddNumber', type: 'int', text: 'Project ID', dataIndex: 'pddNumber', width: 100, menuDisabled: true },
            { name: 'projectName', type: 'string', text: 'Project Name', dataIndex: 'projectName', xwidth: 400, flex: 1, menuDisabled: true, renderer: this.renderProjectName },
            { name: 'projectManager', type: 'string', text: 'Project Manager', dataIndex: 'projectManager', width: 200, menuDisabled: true },
            { name: 'productChampion', type: 'string', text: 'Product Champion', dataIndex: 'productChampion', width: 200, menuDisabled: true },
            { name: 'lastPmtModifiedBy', type: 'string', text: 'Last PMT Modified By', dataIndex: 'lastPmtModifiedBy', width: 200, menuDisabled: true },
            { name: 'lastDfxModifiedBy', type: 'string', text: 'Last DfX Modified By', dataIndex: 'lastDfxModifiedBy', width: 200, menuDisabled: true },
            { name: 'timeSpanFromLastUpdate', type: 'string', text: 'Last Update', dataIndex: 'timeSpanFromLastUpdate', width: 200, hidden: true, menuDisabled: true },
            {
                name: 'lastUpdateDate', type: 'string', text: 'Last Update', dataIndex: 'lastUpdateDate', width: 200, menuDisabled: true, renderer: this.renderLastUpdateDate,
                sortType: function (value) {
                    var theDate = new Date(parseInt(value.replace('/Date(', '')));
                    return theDate;
                }
            }
        ];

        this.items = [
            {
                xtype: 'grid',
                columns: this.fields,
                border: false,
                margin: '0 0 3 0',
                width: '100%',
                cls: 'myprojects-grid',
                disableSelection: true,
                enableCtxMenu: false,  // turn off header context menu
                enableColLock: false,  // turn off column lock context items
                enableColumnMove: false,  // turn off column reorder drag drop
                enableRowHeightSync: true,
                viewConfig: {
                    emptyText: 'No sub projects found for project'
                }
            }
        ];
        this.callParent(arguments);
        this.getData();
    },

    getParams: function () {
        var sParams = {
            "filter": {
                "projectId": parseFloat(com.getProjectId()),
                "depth": 1,
                "loadRoot": false,
                "loadBaseAttributes": true,
                "loadAuditInfo": true,
                "loadLevelInfo": true,
                "loadChildAccessibility": true,
                "loadManagement": true,
                "loadDfxKpis": true,
                "loadPmtKpis": true,
                "loadUrls": true,
                "displayType": 1
            }
        };
        return sParams;
    },

    getData: function () {
        var me = this;
        var theUrl = com.ajaxUrl('ProjectService', 'GetProgram');
        var theParms = this.getParams();
        $.ajax(com.ajaxOptions({
            url: theUrl,
            data: theParms
        }))
        .done(function (data) {
            var store = Ext.create('Ext.data.Store', {
                autoLoad: true,
                fields: me.fields,
                data: data
            });
            me.down('grid').bindStore(store);
            //dashboard.dashboardSubProjects = data;
            com.endLoading();
        });
    },

    renderProjectName: function (value, p, record) {
        //if (record.raw.isAccessible === true) {
        //    return Ext.String.format(
        //        '<b><a style="text-decoration: underline;font-family: Univers 57 condensed " href="/sites/{0}/Portal.aspx" xtarget="_blank">{1}</a></b>',
       //         record.data.pddNumber,
        //        record.data.projectName
        //    );
        //}
        //else {
            return record.data.projectName;
        //}
    },

    renderLastUpdateDate: function (value, p, record) {
        return record.data.timeSpanFromLastUpdate;
    }

});
