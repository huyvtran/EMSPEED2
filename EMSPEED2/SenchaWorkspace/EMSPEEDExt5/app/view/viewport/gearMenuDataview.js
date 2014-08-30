Ext.define('EMSPEEDExt5.view.viewport.gearMenuDataview', {
    extend: 'Ext.view.View',
    alias: 'widget.gearmenudataview',
    uses: 'Ext.data.Store',
    singleSelect: false,
    overItemCls: 'x-view-over',
    itemSelector: 'div.thumb-wrap',
    //style: {zIndex: 200000},
    cls: 'emspeed-header',

    xtype: 'gearmenudataview',
    id: 'emspeed-gear',
    itemSelector: 'aa',
    emptyText: 'No data available',
    deferInitialRefresh: true,
    store: Ext.create('Ext.data.Store', {
        fields: ['menuItemName', 'menuItemUrl']
    }),
    tpl: [
        '<div class="emspeed-gear">',
            '<ul id="gears">',
                '<li class="gear-icon" id="gear-icon">',
                   //'<a href="#"><i class="fa fa-cog emspeed-show-gear-menu emspeed-icon-size"></i></a>',
                   '<a href="#"><span style="font-family: Pictos;font-size: 24px;color:white;">*</span></a>',
                    '<div class="gears-submenu-container"><img src="resources/emspeed/pop_up_arrow.png" />',
                    '<ul class="gears-submenu">',
                        '<tpl for=".">',
                           '<tpl if="menuItemName==' + "'Edit Team Site'" + '">',
                                '<li><a id="teamSite" style="display:block;" href="#" onclick=getPopupEdit("editteamsite")>{menuItemName}</a></li>',
                            '<tpl else>',
                                '<tpl if="menuItemName==' + "'IT Request'" + '">',
                                    '<li><a id="feedback" style="display:block;" href="#" onclick=getPopupEdit("feedback")>{menuItemName}</a></li>',
                                '<tpl else>',
                                    '<tpl if="menuItemName==' + "'Administration'" + '">',
                                        '<li><a target="_blank" href="' + com.siteRoot + '{menuItemUrl}">{menuItemName}</a></li>',
                                    '<tpl else>',
                                        '<li><a target="_blank" href="{menuItemUrl}">{menuItemName}</a></li>',
                                    '</tpl>',
                                '</tpl>',
                            '</tpl>',
                        '</tpl>',
                    '</ul>',
                    '</div>',
                '</li>',
            '</ul>',
        '</div>'
    ],

    initComponent: function () {
        //com.startLoading();
        var me = this;

        me.callParent(arguments);
        me.getData();
    },

    getData: function () {
        var me = this;
        me.setStoreMenu(project.gearMenu);
    },

    setStoreMenu: function (theData) {
        var me = this;
        var contextmenu = me;
        var storeMenu = Ext.create('Ext.data.Store', {
            fields: ['menuItemName', 'menuItemUrl'],
            data: theData
        });
        contextmenu.bindStore(storeMenu);
    }

});
