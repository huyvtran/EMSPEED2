Ext.define('EMSPEEDExt5.view.dashboard.dashboardPropertiesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboardproperties',

    onSave: function (sender) {
        var grid = sender.up('propertygrid');
        console.log(grid.theWidget);
        console.log(grid.currentPanelHeader);
        console.log(grid.getSource());
        grid.theWidget.configModified(grid.getSource());
        grid.currentPanelHeader.ownerCt.el.dom.style.borderWidth = '1px';
        grid.currentPanelHeader.ownerCt.el.dom.style.borderColor = '#C2C2C2';
        grid.setSource({});
        grid.hide();
    },
    onApply: function (sender) {
        var grid = sender.up('propertygrid');
        console.log(grid.theWidget);
        console.log(grid.currentPanelHeader);
        console.log(grid.getSource());
        grid.theWidget.configModified(grid.getSource());
    },
    onCancel: function (sender) {
        var grid = sender.up('propertygrid');
        grid.currentPanelHeader.ownerCt.el.dom.style.borderWidth = '1px';
        grid.currentPanelHeader.ownerCt.el.dom.style.borderColor = '#C2C2C2';
        grid.setSource({});
        grid.hide();
    }

 
});