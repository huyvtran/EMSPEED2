Ext.define('EMSPEEDExt5.model.ProjectModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'projectId', type: 'integer' },
        { name: 'projectName', type: 'string' },
        { name: 'projectManager', type: 'string' }
    ],
    proxy: {
        type: 'ajaxProxy',
        service: 'ProjectService',
        method: 'GetProjects'
        //actionMethods: {
        //    read: 'GET'
        //}
    },
    autoLoad: true
});
