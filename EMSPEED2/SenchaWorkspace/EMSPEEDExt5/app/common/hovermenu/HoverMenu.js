Ext.define('EMSPEEDExt5.common.hovermenu.HoverMenu', {
    extend: 'Ext.Component',
    xtype: 'hovermenu',

    hideMenu: function () {
        var me = this;
        //console.log('hide');
        if (me.active === false) {
            Ext.get(me.id + '-hoverMenu').removeCls('hover-icon');
        }
        me.menu.hide();
    },

    testMe: function () {
        console.log(this.text);
        return true;
    },


    tpl: '' +
        '<div id="{id}-hoverMenu" style="color:#6084A8;height:45px;padding-top:14px;" class="hover-menu">' +
        '   <div id="{id}-hoverText" class="">' + 
        '       <tpl if="icon != &quot;&quot;"><span class="fa fa-{icon} fa-fw"></span></tpl>' +
        '       <tpl if="text != &quot;&quot;">{text}</tpl>' +
        '   </div>' +
        '   <tpl if="text != &quot;&quot;"><span id="{id}-hoverIcon"></span></tpl>' +
        '</div>' +
        '',
    menuItems: {
        text: 'Menu'
    },

    initComponent: function () {
        var me = this;
        me.data = { text: me.text, id: me.id, icon: me.icon };
        me.hideTask = new Ext.util.DelayedTask(me.hideMenu, me);

        me.menu = Ext.create('Ext.menu.Menu', {
            cls: 'hoverMenuDropMenu',
            btn: me,
            //style: { borderTop: '3px', borderColor: '#6084A8' },
            bodyPadding: 10,
            items: [
                { xtype: 'container', indent: false, items: me.pre },
                {
                    xtype: 'dataview',
                    indent: false,
                    //multiSelect: true,
                    overItemCls: 'hoverMenuHover',
                    selectedItemCls: 'selected',
                    itemSelector: 'li.clickable',
                    emptyText: 'No data available',
                    //deferInitialRefresh: false,
                    listeners: {
                        selectionchange: function (selectionModel, selected, eOpts) {
                            me.fireEvent('selected', selected[0]);
                        }
                    },
                    store: Ext.create('Ext.data.Store', {
                        fields: ['name', 'val', 'line'],
                        data: me.menuItems
                    }),

                    tpl: new Ext.XTemplate(
                        '<ul style="list-style:none;">',
                        '<tpl for=".">',
    //                    '{[this.doVal(values.severity, values.occurrence, values.count)]}',
                        '<li class="clickable hoverMenuBase">',
                        '{val}',
                        '<tpl if="line != &quot;&quot;"><div>----------------------------</div></tpl>' +
                        '</li>',



                        '</tpl>',
                        '</ul>',
                        {
                            disableFormats: true,
                            doVal: function (r, c, v) {
                                return s;
                            }
                        }
                    )
                },
                { xtype: 'container', indent: false, items: me.post }
            ],



            listeners: {
                mouseenter: function () {
                    var me = this;
                    var btn = me.btn;
                    btn.hideTask.cancel();
                },
                mouseleave: function () {
                    var me = this;
                    var btn = me.btn;
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
        me.isOverBtn = true;
        me.hideTask.cancel();
        Ext.get(me.id + '-hoverMenu').addCls('hover-icon');
        var align = me.align;
        me.menu.showBy(me.el, align, [-me.menuOffset, 0]);
        //me.menu.showBy(me.el, align, [0, 0]);
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