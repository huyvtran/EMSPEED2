Ext.define('EMSPEEDExt5.view.baseclass.baseclassPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'baseclassPanel',
    bodyPadding: 10,
    style: { borderLeft: '1px solid #cccccc', borderTop: '1px solid #cccccc' },
    toolbar: [],

    setTheTitle: function(title) {
      // 1x method
    },

    initComponent: function () {
        var me = this;
        
        var fullToolbar = [];
        var leftSide = [
            { ui: 'emspeedglyph-toolbar', style: { fontSize: '22px' }, tooltip: 'favorite', handler: 'onFavorite', glyph: 'xf006@FontAwesome' },
            { text: me.text, xtype: 'label', padding: '5px 0px 0px 0px', cls: 'x-panel-header-title-default' },
            { xtype: 'tbfill' }
        ];
        var rightSide = [
            { xtype: 'component', html: '', margin: '0px 0px 0px 30px' }
            //{ xtype: 'component', html: '<i style="color:blue;font-size:18px;margin-left: 20px;" class="fa fa-star-o fa-fw"></i>' },
            //{ xtype: 'component', html: '<i style="color:blue;font-size:18px;margin-left: 0px;" class="fa fa-star fa-fw"></i>' }
        ];
        fullToolbar = fullToolbar.concat(leftSide);
        fullToolbar = fullToolbar.concat(me.toolbar);
        fullToolbar = fullToolbar.concat(rightSide);
        me.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: fullToolbar
            }
        ]
        com.endLoading();
        this.callParent();
    }

    //tools: [
    //    {
    //        type: 'help',
    //        toast: true
    //    }
    //]


});
