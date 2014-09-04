Ext.define('EMSPEEDExt5.view.dashboard.dashboardHoverMenu', {
    extend: 'Ext.Component',
    xtype: 'dashboardhovermenu',

    hideMenu: function () {
        var me = this;
        console.log('hide');
        if (me.active === false) {
            Ext.get(me.id + '-hoverMenu').removeCls('hover-icon');
        }
        me.menu.hide();
    },
    tpl: '' +
        '<div id="{id}-hoverMenu" class="hover-menu">' +
        '<div id="{id}-hoverText" class="">{a}</div>' +
        '<span id="{id}-hoverIcon" style="height:7px">' +
        //'<tpl if="showIcon==' + "'yes'" + '">' +
        //    '<span><img style="vertical-align:bottom;" src="resources/emspeed/pop_up_arrow.png"></span>' +
        //'<tpl else>' +
            '&nbsp;' +
        //'</tpl>' +
        '</span>' +
        '</div>' +
        '',

    menuItems: {
        text: 'Menu'
    },
    text: '',

    initComponent: function () {
        var me = this;
        me.data = { a: me.text, id: me.id };
        me.hideTask = new Ext.util.DelayedTask(me.hideMenu, me);

        me.menu = Ext.create('Ext.menu.Menu', {
            btn: me,
            height: 150,
            style: { borderTop: '0px' },
            items: me.menuItems,
            listeners: {
                mouseenter: function () {
                    var me = this;
                    var btn = me.btn;
                    //console.log('menu - mouseenter');
                    btn.hideTask.cancel();
                },
                mouseleave: function () {
                    var me = this;
                    var btn = me.btn;
                    //console.log('menu - mouseleave');
                    //console.log('btn.isOverBtn ' + btn.isOverBtn);
                    btn.isOverBtn
                    if (btn.isOverBtn === false) {
                        btn.hideTask.delay(250);
                    }
                }
            }
        });
        me.callParent(arguments);
    },

    isOverBtn: false,
    onMouseOver: function (sender) {
        var me = this;
        //console.log('btn - onMouseOver');
        me.isOverBtn = true;
        me.hideTask.cancel();
        Ext.get(me.id + '-hoverMenu').addCls('hover-icon');
        me.menu.showBy(me.el, 'bl', [0, 0]);
    },
    onMouseLeave: function () {
        var me = this;
        var btn = me;
        me.isOverBtn = false;
        //console.log('btn - onMouseLeave');
        var mnu = btn.menu;
        btn.hideTask.delay(50);
    },

    onRender: function () {
        var me = this;
        me.callParent(arguments);

        if (me.active === true) {
            Ext.get(me.id + '-hoverMenu').addCls('hover-active');
            Ext.get(me.id + '-hoverMenu').addCls('hover-icon');
        }

        var btnListeners = {
            scope: me,
            mouseover: me.onMouseOver,
            mouseleave: me.onMouseLeave
    };
        btn = me.el;
        me.mon(btn, btnListeners);
    }

});