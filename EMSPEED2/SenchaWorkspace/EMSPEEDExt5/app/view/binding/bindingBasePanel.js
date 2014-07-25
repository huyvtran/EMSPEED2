Ext.define('EMSPEEDExt5.view.binding.bindingBasePanel', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassPanel',
    xtype: 'bindingBasePanel',
    requires: [
        'Ext.layout.container.Form'
    ],
    id: 'bindingBasePanel',
    controller: 'bindingBasePanelController',

    layout: 'form',

    viewModel: {
        type: 'bindingViewModel'  
    },

    bind: {
        title: 'Hello {name}'
    },

    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'First Name',
            bind: '{firstName}'
        }, {
            fieldLabel: 'Last Name',
            bind: '{lastName}'
        },
        {
            xtype: 'checkbox',
            boxLabel: 'Admin',
            reference: 'isAdmin'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Admin Key',
            bind: {
                disabled: '{!isAdmin.checked}'
            }
        },
        {
            xtype: 'button',
            text: 'Submit',
            bind: {
                hidden: '{!name}'
            }
        }
    ]
});