Ext.define('ExecDashboard.view.riskmatrix.riskmatrixModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.riskmatrix',

    requires: [
        'ExecDashboard.model.Kpi',
        'ExecDashboard.store.Kpi'
    ],

    data: {
        // This property is placed in the ViewModel by routing
        // kpiCategory: null
    },

    stores: {
        kpiMain: {
            type: 'kpi',
            autoLoad: true,
            filters: {
                property: 'category',
                value: '{kpiCategory}'
            }
        }
    }
});
