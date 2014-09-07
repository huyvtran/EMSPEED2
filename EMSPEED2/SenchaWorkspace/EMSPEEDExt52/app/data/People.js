Ext.define('EMSPEEDExt5.data.People', {
    requires: [
        'EMSPEEDExt5.data.Init'
    ]
}, function () {       
    Ext.ux.ajax.SimManager.register({
       'http://localhost:8095/ProjectService.svc/json/GetPeople': {
        //'/EMSPEEDExt5/People': {
            type: 'json',
            data : [
                { 
                    'name'  : 'Lisa8',  
                    'email' : 'lisa@simpsons.com',
                    'phone' : '555-111-1224' 
                },
                { 
                    'name'  : 'Bart',  
                    'email' : 'bart@simpsons.com',
                    'phone' : '555-222-1234'
                },
                { 
                    'name'  : 'Homer', 
                    'email' : 'homer@simpsons.com',
                    'phone' : '555-222-1244'
                },
                { 
                    'name'  : 'Marge', 
                    'email' : 'marge@simpsons.com',
                    'phone' : '555-222-1254'
                }
            ]
        }
    });
});
