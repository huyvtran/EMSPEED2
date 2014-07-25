Ext.define('mjgApp.view.Details', {
    extend: 'Ext.Panel',
    xtype: 'details',

    initialize: function () {
        this.items.items[0].setTitle(this.getTitle());
        var i = this.getSrc();
        var theStart = 'resources/images/';
        var s = i.indexOf(theStart) + theStart.length;
        var e = i.indexOf('.');
        var theImage = i.substring(s, e);
        this.setContentEl(theImage);
        //var me = this;
        //this.mon(this.el, {
        //    tap: function (e, t) {
        //        me.destroy();
        //    }
        //});
        this.callParent(arguments);
    },

    config: {
        back: null,
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
            }
        },
        title: null,
        html: null,
        src: null,
        modal: true,
        centered: true,
        hideOnMaskTap: true,
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },



        width: (Ext.os.deviceType == 'Phone') ? '95%' : '100%',
        height: Ext.os.deviceType == 'Phone' ? '95%' : '100%',
        //width: '60%',
        //height: '50%',
        //width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 290 : 800,
        //height: Ext.filterPlatform('ie10') ? '30%' : Ext.os.deviceType == 'Phone' ? 490 : 400,
        styleHtmlContent: true,
        scrollable: true,
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                pack: 'center',
                title: '',
                style: {fontFamily: 'Arial' },
                items: [
                   { xtype: 'spacer' },
                   {
                       xtype: 'button',
                       width: 32,
                       iconCls: "delete",
                       ui: "plain",
                       style: {
                           background: 'transparent',
                           color: '#ffffff',
                           padding: '0 0 0 0'
                       },
                       listeners: {
                           tap: function () {
                               //this.up('panel').hide();
                               this.up('panel').destroy();
                           }
                       }
                   }
                ]
            }
        ]
    }
});

$(function () {
    $('body').on('click', '.pastworkxx', function () {
        Ext.getCmp('c' + this.id).destroy();
    });
});

$(function () {
    $('body').on('click', '.pastcompany', function () {
        Ext.getCmp('d' + this.id).destroy();
    });
});