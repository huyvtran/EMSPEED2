Ext.define('EMSPEEDExt5.view.dashboard.dashboardAddWidgetBrowser', {
    extend: 'Ext.view.View',
    alias: 'widget.dashboardaddwidgetbrowser',
    uses: 'Ext.data.Store',
    singleSelect: false,
    overItemCls: 'x-view-over',
    itemSelector: 'div.thumb-wrap',
    tpl: new Ext.XTemplate(
        '<tpl for=".">',
            '<div class="thumb-wrap">',
                '<div class="thumb">',
                    '<img src="widgets/{type}.png" style="width:250px;height:100px;object-fit: contain;" />',
                '</div>',
                '<span>{title}</span>',
            '</div>',
        '</tpl>',

        //'<table border="1">',
        //'<tpl for=".">',
        //    '<tr>',
        //    '  <td>',
        //    '    <img src="{[this.getImage(values.type)]}">',
        //    '  </td>',
        //    '  <td>',
        //    '    title: {title}<br>',
        //    '    description: {description}<br>',
        //    '    type: {type}<br>',
        //    '  </td>',
        //    '  <td>',
        //    '    widgetDataDef: {[this.getWidgetDataDef(values.widgetDataDef)]}',
        //    '  </td>',
        //    '</tr>',
        //'</tpl>',
        //'</table>',
        {
            disableFormats: true,
            getImage: function (type) {
                return com.widgetLocation + type + '.png';
            },
            getWidgetDataDef: function (widgetDataDef) {
                return widgetDataDef.name;
            }
        }
    ),

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        me.getData();
    },

    getData: function () {
        var me = this;
        $.getJSON('/api/widgets', function (response) {
            var store = Ext.create('Ext.data.Store', {
                fields: ['type', 'extension', 'height', 'widgetDataDef', 'title', 'description'],
                data: response
            });
            me.bindStore(store);
        });
    }

});
