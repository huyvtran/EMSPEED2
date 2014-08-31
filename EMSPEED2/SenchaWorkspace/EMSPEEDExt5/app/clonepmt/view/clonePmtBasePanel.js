Ext.define('EMSPEEDExt5.clonepmt.view.clonepmtBasePanel', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassPanel',
    alias: 'widget.clonepmtBasePanel',
    id: 'clonepmtBasePanel',
    //autoScroll: true,
    //overflowY: 'scroll',
    //overflowX: 'hidden',
    layout: 'fit',
    initComponent: function () {
        this.callParent(arguments);
        this.setTheTitle('Clone PMT');
    },
    items: [
        {
            xtype: 'container',
            layout: 'vbox',
            items: [
                { xtype: 'clonepmtCreateClone' }
                ,
                { xtype: 'clonepmtHistory' }
            ]
        }
    ]
});