//Ext.define('widget.listPart', {
//    extend: 'Ext.dashboard.Part',
//    alias: 'part.list',
//    type: 'list',
//    viewTemplate: {
//        layout: 'fit',
//        items: {
//            xclass: 'widget.listView',
//            widgetData: '{widgetData}'
//        },
//        tools: [
//            {
//                type: 'refresh',
//                tooltip: 'Refresh form Data',
//                // hidden:true,
//                handler: function (event, toolEl, panelHeader) {
//                    alert('click');
//                }
//            },


//            {
//                //xtype: 'tool',
//                type: 'gear',
//                tooltip: 'The Gear Tooltip',
//                //scope: this,
//                handler: function (e, target, panelHeader, tool) {
//                    alert('click');
//                }
//            },
//            {
//                type: 'help',
//                toast: true
//            }
//        ]




//    }
//});

Ext.define('widget.list', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    controller: 'list',
    viewModel: { type: 'listModel' },
    //config: {
    //    data: null
    //},

    //bind: {
    //    data: {
    //        bindTo: '{name}',
    //        deep: true
    //    }
    //},

    load: function(){
    //    alert('load');
    },

    initComponent: function () {
        var me = this;
        //me.widgetData.title = me.widgetData.name;
        me.items = [
            { xtype: 'button', text: me.widgetData.name, handler: 'onClickButton' },
            {
                xtype: 'dataview',
                bind: {
                    data: {
                        bindTo: '{data}',
                        deep: true
                    }
                },
                singleSelect: true,
                itemSelector: 'li.liclass',
                emptyText: 'No data available',
                deferInitialRefresh: false,
                tpl: [
                    '<ul>',
                    '<tpl for=".">',
                        '<li class="liclass">{name}</li>',
                    '</tpl>',
                    '</ul>'
                ]
            }
        ];
        me.callParent(arguments);
    }
});

Ext.define('widget.listController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.list',

    init: function () {
        var me = this;
        Ext.Ajax.request({
            url: 'http://localhost:88/api/products',
            success: function (response, opts) {
                var data = Ext.decode(response.responseText);
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

Ext.define('widget.listModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.listModel',
    data: {
        name: 'marc',
        data: null
    }
});