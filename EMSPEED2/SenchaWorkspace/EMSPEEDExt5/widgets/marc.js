//{ name: '', age: '', marc: ''}
Ext.define('widget.marc', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',


    loadPage: function() {
        this.down('button').setText(this.widgetData.name);
    },

    constructor: function() {
        console.log('marc');
        var me = this;

        me.style_rules.push(".blue { color: blue; } ");
        me.style_rules.push(".red { color: red; } ");

        me.callParent(arguments);
    },

    initComponent: function () {
        var me = this;
        me.widgetData.title = me.widgetData.name;
        me.items = [
            { xtype: 'button', text: me.widgetData.name },
            {
                xtype: 'dataview',
                singleSelect: true,
                itemSelector: 'li.liclass',
                emptyText: 'No data available',
                deferInitialRefresh: false,
                tpl: [
                    '<ul>',
                    '<tpl for=".">',
                        '<li class="red liclass">{projectId} - {projectName}</li>',
                    '</tpl>',
                    '</ul>'
                ]
            }
        ];
        me.callParent(arguments);
        me.getData();
    },

    getData: function () {
        var me = this;
        $.getJSON('/api/projects', function (response) {
            var store = Ext.create('Ext.data.Store', {
                fields: ['projectId', 'projectName'],
                data: response
            });
            me.down('dataview').bindStore(store);
        });
    },









    getData3: function () {
        $.getJSON('/api/projects/1234', function (response) {
            alert('Your project is: ' + response.projectName);
        });
    },

    getData4: function () {
        var theUrl = com.ajaxUrl('UserInterfaceService', 'GetMarc');
        var theParms = { type: 1, projectId: 97366 };
        var me = this;
        $.ajax(com.ajaxOptions({
            url: theUrl,
            data: theParms
        }))
        .done(function (data) {
            me.setStoreMatrix(data);
        });
    },

    setStoreMatrix: function (theData) {
        var me = this;
        var storeMatrix = Ext.create('Ext.data.Store', {
            fields: ['name'],
            data: theData
        });
        //me.down('dataview').bindStore(storeMatrix);
        //me.down('dataview').setVisible(true);


        me.down('dataview').data = [
            { name: '1' },
            { name: '2' },
            { name: '3' }
        ];
    },



});