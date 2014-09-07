Ext.define('EMSPEEDExt5.model.Project', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'projectId', type: 'integer' },
        { name: 'projectName', type: 'string' },
        { name: 'projectManager', type: 'string' }
    ]
});
