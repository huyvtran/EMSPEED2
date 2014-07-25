
Ext.define("Ext5Test.view.someview.SomeView",{
    "extend": "Ext.panel.Panel",
    xtype: 'SomeView',
    requires: [
        'Ext.form.field.ComboBox'
    ],
    "controller": "SomeViewController",
    "viewModel": {
        "type": "SomeViewModel"
    },
    items: [
        {
            xtype: 'combobox',
            reference: 'schoolCombo',
            publishes: 'value',
            fieldLabel: 'University',
            labelWidth: 60,
            width: 180,
            forceSelection: true,
            emptyText: 'Select',
            store: [[0, "USC"], [1, "MIT"], [2, "Harvard"]],
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id'
        },
        {
            xtype: 'textfield',
            reference: 'theTextField',
            bind: {
                value: '{schoolCombo.value}'
            }
        }

    ]
});
