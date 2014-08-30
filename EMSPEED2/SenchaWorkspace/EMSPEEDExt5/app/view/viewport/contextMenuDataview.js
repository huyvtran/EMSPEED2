Ext.define('EMSPEEDExt5.view.viewport.contextMenuDataview', {
    extend: 'Ext.view.View',
    alias: 'widget.contextmenudataview',
    uses: 'Ext.data.Store',
    singleSelect: false,
    overItemCls: 'x-view-over',
    itemSelector: 'div.thumb-wrap',

    xtype: 'contextmenudataview',
    cls: 'emspeed-header',
    emptyText: 'No data available',
    itemSelector: 'aa',
    deferInitialRefresh: false,
    store: Ext.create('Ext.data.Store', {}),
    tpl: [
        '<div class="emspeed-header-menu">Projects',
            '<div class="emspeed-header-submenu"><img src="resources/emspeed/pop_up_arrow.png" />',
                    '<ul class="submenu-section" style:"z-index:200000;">',
                        '<li class="emspeed-menu-heading">5 Most Recent:</li>',
                        '<tpl for=".">',
                            '<li><a href="/sites/{menuItemUrl}/Portal.aspx">{menuItemUrl} - {menuItemName}</a></li>',
                        '</tpl>',
                    '</ul>',
                    '<ul class="submenu-section emspeed-text-bold" style:"z-index:200000;">',
                        '<li><a href="/Portal.aspx" >My Projects</a></li>',
                    '</ul>',
            '</div> ',
        '</div> '
    ],

    initComponent: function () {
        //com.startLoading();
        var me = this;

        me.callParent(arguments);
        me.getData();
    },

    getData: function () {
        var me = this;
        me.setStoreMenu(project.last5Projects);
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
