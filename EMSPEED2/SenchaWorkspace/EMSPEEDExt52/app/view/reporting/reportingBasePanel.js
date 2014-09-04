Ext.define('EMSPEEDExt5.view.reporting.reportingBasePanel', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassPanel',
    xtype: 'reportingBasePanel',
    id: 'reportingBasePanel',
    controller: 'reporting',
    title: 'Reporting',

    layout: {
        type: 'hbox'
    },

    defaults: {
        xtype: 'button'
        //width: 200,
        //height: 280
    },

    initComponent: function () {
        this.items = [
            {
                text: 'reporting',
                handler: 'onClickReporting'
            },
            {
                xtype: 'button',
                glyph: 'xf002@FontAwesome',
                text: 'Search'

            },
            {
                xtype: 'button',
                glyph: 'xf075@FontAwesome',
                text: '2'

            }
        ];
        this.callParent();
    }

});
