Ext.define('EMSPEEDTouch.view.requisition.ViewApprovals', {
    extend: 'Ext.Panel',
    xtype: 'viewapprovals',

    initialize: function () {
        this.create();
    },

    create: function () {
        this.getData();
    },

    config: {
        title: null,
        layout: 'vbox',
        items: [
            EMSPEEDTouch.com.getHeader(),
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    { xtype: 'container', html: '' },
                    { xtype: 'container', html: '' }

                ]
            }
        ],
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
                var me = newActiveItem;
                EMSPEEDTouch.com.setTitle(me);
                try {
                }
                catch (exception) {
                }
            }
        }
    }
});
