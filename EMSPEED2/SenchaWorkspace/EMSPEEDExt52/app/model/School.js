Ext.define('EMSPEEDExt5.model.School', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'integer' },
        { name: 'name', type: 'string' }
    ],

    proxy: {
        type: 'ajaxProxy',
        service: 'ProjectService',
        method: 'GetSchools',
        actionMethods: {
            read: 'GET'
        }
    }

    //proxy: {
    //    type: 'memory',
    //    reader: 'array',
    //    data: [
    //        [1, "Illinois"],
    //        [2, "Minnesota"],
    //        [3, "Iowa"],
    //        [4, "Kansas"],
    //        [5, "Nebraska"],
    //        [6, "Michigan"]
    //    ]
    //}

});
