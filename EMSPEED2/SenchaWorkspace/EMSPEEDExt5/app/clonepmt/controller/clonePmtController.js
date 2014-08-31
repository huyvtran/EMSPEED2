Ext.define('EMSPEEDExt5.clonepmt.controller.clonepmtController', {
    extend: 'Ext.app.Controller',
    requires: [
        'EMSPEEDExt5.clonepmt.model.clonepmtHistoryModel',
        'EMSPEEDExt5.clonepmt.view.clonepmtBasePanel',
        'EMSPEEDExt5.clonepmt.view.clonepmtCreateClone',
        'EMSPEEDExt5.clonepmt.view.clonepmtHistory'
    ],

    init: function () {
        console.log('clonepmtController.js - init');
        this.control({
            'clonepmtBasePanel': { activate: this.clonepmtBasePanel_activate },
            '#btnCreateClone': { click: this.btnCreateClone_click }
        });
    },

    clonepmtBasePanel_activate: function (panel, e, eOpts) {
        console.log('clonepmtBasePanel_activate');
        Ext.getCmp('txtPmtCloneName').reset();
        Ext.getCmp('txtNewPmtCloneName').reset();
        this.getData();
    },

    btnCreateClone_click: function (button, e, eOpts) {

        var txtPmtCloneName = Ext.getCmp('txtPmtCloneName');
        var txtNewPmtCloneName = Ext.getCmp('txtNewPmtCloneName');

        if (txtPmtCloneName.isValid()) {
            if (txtNewPmtCloneName.isValid()) {
                var callbackFunction = function (selection) {
                    if (selection) {
                        com.startLoading('Creating PMT Clone...');

                        var cloneSourceName = Ext.getCmp('txtPmtCloneName').getValue();
                        var newCloneName = Ext.getCmp('txtNewPmtCloneName').getValue();
                        if (cloneSourceName = 'Default Study') {
                            cloneSourceName = "";
                        }

                        var me = this;
                        var theUrl = com.ajaxUrl('ProjectService', 'CreatePmtClone');
                        var theParms = { "projectId": com.getProjectId(), "cloneSource": cloneSourceName, "newCloneName": newCloneName };
                        $.ajax(com.ajaxOptions({
                            url: theUrl,
                            data: theParms,
                            dataType: 'void'
                        }))
                        .done(function (data) {
                            Ext.getCmp('txtPmtCloneName').reset();
                            Ext.getCmp('txtNewPmtCloneName').reset();
                            com.endLoading();
                            me.getData();
                        });
                    }
                };
                var result = com.confirmSelection(callbackFunction, 'Clone Selected Study?','Are you sure you want to clone the selected study?', this);
            }
            else {
                var errMsgPddId = 'Please enter a name for the newly cloned study.';
                Ext.Msg.alert('Validation Error', errMsgPddId, Ext.emptyFn);
            }
        }
        else {
            var errMsgPddId = 'Please click on a row to select a study to clone.';
            Ext.Msg.alert('Validation Error', errMsgPddId, Ext.emptyFn);
        }

    },

    getData: function () {
        com.startLoading();
        var me = this;
        var theUrl = com.ajaxUrl('ProjectService', 'GetPmtClones');
        var theParms = { "projectId": com.getProjectId() };
        $.ajax(com.ajaxOptions({
            url: theUrl,
            data: theParms
        }))
        .done(function (data) {
            var response = data;
            var grdClonePmtHistory = Ext.getCmp('grdClonePmtHistory');

            var theStore = Ext.create('Ext.data.Store', {
                model: 'EMSPEEDExt5.clonepmt.model.clonepmtHistoryModel',
                data: response
            });

            grdClonePmtHistory.reconfigure(theStore);

            com.endLoading();

        });
    }
});
