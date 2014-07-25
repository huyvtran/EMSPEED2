
Ext.define("yelpextplorerclass.view.detail.EditBusinessWindow",{
    "extend": "Ext.window.Window",
    "controller": "detail-editbusinesswindow",
    "xtype": 'editbusinesswindow',
    requires: ['Ext.form.Panel', 'Ext.Img', 'Ext.slider.Single'],
    bodyPadding: 8,
    modal: true,
    resizable: false,

    layout: 'fit',

    listeners: {
        show: {
            scope: 'controller',
            fn: 'onWindowShow'
        }
    },

    items: [{
        xtype: 'form',
        reference:'form',
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Name',
                name: 'name'
            },
            {
                xtype: 'container',
                layout: "hbox",
                items: [
                    {
                        xtype: 'image',
                        width: 84,
                        height: 17,
                        reference: 'starsImage',
                        style: { 'margin-right': '16px' }
                    },
                    {
                        xtype: 'slider',
                        increment: 0.5,
                        decimalPrecision: 1,
                        minValue: 1,
                        maxValue: 5,
                        width: 160,
                        name: 'stars',
                        listeners: {
                            change: 'onStarSliderChange'
                        }
                    }
                ]
            }
        ]
    }],
    buttons: [
        {
            text: 'Save',
            handler: 'onSave'
        },
        {
            text: 'Cancel',
            handler: 'onCancel'
        }
    ]
});
