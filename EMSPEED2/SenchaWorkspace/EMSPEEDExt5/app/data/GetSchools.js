Ext.define('EMSPEEDExt5.data.GetSchools', {
    requires: [
        'EMSPEEDExt5.data.Init'
    ]
}, function () {
    Ext.ux.ajax.SimManager.register({
        'http://emspeed1.nam.slb.com:8095/ProjectService.svc/json/GetSchools': {
            type: 'json',
            data: [
                { 'id': 1, 'name': "Illinois" },
                { 'id': 2, 'name': "Minnesota" },
                { 'id': 3, 'name': "ND" },
                { 'id': 4, 'name': "Kansas" },
                { 'id': 5, 'name': "Nebraska" },
                { 'id': 6, 'name': "Michigan" }
            ]
        }
    });
});