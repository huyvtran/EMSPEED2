Ext.define('ExecDashboard.view.riskmatrix.riskmatrixController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.riskmatrix',

    init: function (view) {
        // We provide the updater for the activeState config of our View.
        view.updateActiveState = this.updateActiveState.bind(this);
    },

    onToggleKpi: function(button) {
        if (button.pressed) {
            var view = this.getView();
            view.setActiveState(button.filter);
        }
    },

    updateActiveState: function (activeState) {
        var refs = this.getReferences();
        var viewModel = this.getViewModel();

        refs[activeState].setPressed(true);
        viewModel.set('kpiCategory', activeState);

        this.fireEvent('changeroute', this, 'riskmatrix/' + activeState);
    }
});
