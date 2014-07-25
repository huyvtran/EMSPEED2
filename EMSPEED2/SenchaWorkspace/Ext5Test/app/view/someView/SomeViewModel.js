Ext.define('Ext5Test.view.someview.SomeViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.SomeViewModel',
    data: {
        name: 'Ext5Test'
    },
    formulas: {
        school: {
            bind: '{schoolCombo.value}',
            get: function (data) {
                console.log(data);
            }
        }
    }
});
