Ext.define('EMSPEEDExt5.store.EmployeesStore', {
    extend: 'Ext.data.Store',
    //groupField: 'department',
    model: 'EMSPEEDExt5.model.EmployeeModel',

    proxy: {
        type: 'ajaxProxy',
        service: 'ProjectService',
        method: 'GetEmployees',
        actionMethods: {
            read: 'GET'
        }
    },

    autoLoad: false

});
