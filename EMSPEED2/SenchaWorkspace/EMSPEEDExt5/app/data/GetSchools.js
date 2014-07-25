Ext.define('EMSPEEDExt5.data.GetSchools', {
    requires: [
        'EMSPEEDExt5.data.Init'
    ]
}, function () {
    Ext.ux.ajax.SimManager.register({
        'http://emspeed1.nam.slb.com:8095/ProjectService.svc/json/GetSchools': {
            type: 'json',
            data: dataGetSchools
        }
    });
});