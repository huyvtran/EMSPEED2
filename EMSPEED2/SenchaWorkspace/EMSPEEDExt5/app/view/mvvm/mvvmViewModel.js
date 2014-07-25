Ext.define('EMSPEEDExt5.view.mvvm.mvvmViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mvvmViewModel', // connects to viewModel/type below
    requires: [
    //'EMSPEEDExt5.view.baseclass.ajaxProxy'
    ],
    data: {
        firstName: 'John',
        lastName: 'Doe'
    },

    stores: {
        Projects: {
            model: 'EMSPEEDExt5.model.Project'
            //autoLoad: false,
            //proxy: {
            //    type: 'ajaxProxy',
            //    service: 'ProjectService',
            //    method: 'GetProjects'
            //    //actionMethods: {
            //    //    read: 'GET'
            //    //}
            //}
        }
    },

    formulas: {
        name: function (d) {
            var fn = d('firstName'), ln = this.data.lastName;
            return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
        }
    }
});