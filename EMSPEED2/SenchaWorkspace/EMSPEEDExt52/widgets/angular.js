Ext.define('widget.angularPart', {
    extend: 'Ext.dashboard.Part',
    alias: 'part.angular',
    type: 'angular',
    viewTemplate: {
        layout: 'fit',
        items: {
            xclass: 'widget.angularView',
            widgetData: '{widgetData}'
        }
    }
});

Ext.define('widget.angularView', {
    extend: 'widget.base',
    controller: 'angular',
    viewModel: { type: 'angularModel' },

    html: '<div ng-app="app">' +
        '<div ng-controller="MainController">' +
        '{{2+2}}' +
        '</div>' +
        '</div>'

    //config: {
    //    data: null
    //},

    //bind: {
    //    data: {
    //        bindTo: '{name}',
    //        deep: true
    //    }
    //},

    //initComponent: function () {
    //    var me = this;
    //    me.widgetData.title = me.widgetData.name;
    //    me.items = [
    //        { xtype: 'button', text: me.widgetData.name, handler: 'onClickButton' },
    //        {
    //            xtype: 'dataview',
    //            bind: {
    //                data: {
    //                    bindTo: '{data}',
    //                    deep: true
    //                }
    //            },
    //            singleSelect: true,
    //            itemSelector: 'li.liclass',
    //            emptyText: 'No data available',
    //            deferInitialRefresh: false,
    //            tpl: [
    //                '<ul>',
    //                '<tpl for=".">',
    //                    '<li class="liclass">{name}</li>',
    //                '</tpl>',
    //                '</ul>'
    //            ]
    //        }
    //    ];
    //    me.callParent(arguments);
    //}
});

Ext.define('widget.angularController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.angular',

    init: function () {
        var me = this;
        Ext.Ajax.request({
            url: 'http://localhost:88/api/products',
            success: function (response, opts) {
                var data = Ext.decode(response.responseText);
                console.log('success: ' + data);
                console.log(data);
                me.getViewModel().set('data', data);
            },
            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },

    onClickButton: function () {
        alert('click');
    }
});

Ext.define('widget.angularModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.angularModel',
    data: {
        name: 'marc',
        data: null
    }
});