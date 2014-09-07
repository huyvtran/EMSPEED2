Ext.define('EMSPEEDExt5.store.ProjectsStore', {
    extend: 'Ext.data.Store',
    model: 'EMSPEEDExt5.model.ProjectModel'
    //proxy: {
    //    type: 'ajaxProxy',
    //    service: 'ProjectService',
    //    method: 'GetProjects'
    //    //actionMethods: {
    //    //    read: 'GET'
    //    //}
    //},
    //autoLoad: false
});
