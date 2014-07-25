Ext.define('EMSPEEDTouch.view.misc.TextArea', {
    extend: 'Ext.Container',
    xtype: 'textarea',
    requires: [
    ],

    initialize: function () {
        this.create();
    },

    create: function () {
    },

    config: {
        title: null,
        layout: 'vbox',
        items: [
            EMSPEEDTouch.com.getHeader(),
                {
                    xtype: 'textareafield',
                    flex: 1,
                    id: 'theTextArea',
                    name: 'bio',
                    margin: '5 5 5 5'
                }
        ]
    }
});