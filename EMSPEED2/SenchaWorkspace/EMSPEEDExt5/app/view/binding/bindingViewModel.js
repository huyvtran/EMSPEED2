Ext.define('EMSPEEDExt5.view.binding.bindingViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.bindingViewModel', // connects to viewModel/type below

    data: {
        firstName: 'John',
        lastName: 'Doe'
    },

    formulas: {
        // We’ll explain formulas in more detail soon.
        name: function (d) {
            var fn = d('firstName'), ln = d('lastName');
            return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
        }
    }
});