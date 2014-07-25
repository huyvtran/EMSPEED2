Ext.define('Pokemon.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: ['Pokemon.model.Summary', 'Ext.view.View', 'Ext.sparkline.Pie', 'Ext.grid.Panel'],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: 'border',

    items: [{
        xtype: 'tabpanel',
        region: 'center',

        items: [{
            xtype: 'dataview',
            reference: 'dataview',
            title: 'View',
            autoScroll: true,
            bind: {
                store: '{summaries}'
            },
            listeners: {
                select: 'onSelect'
            },
            itemCls: 'pokemon',
            overItemCls: 'over',
            selectedItemCls: 'selected',
            itemTpl: '<img src="resources/pokemon/{id}.png"/>'
        }, {
            title: 'Grid',
            xtype: 'grid',
            bind: {
                store: '{gridSummaries}'
            },
            columns: [{
                text: '',
                dataIndex: 'name',
                xtype: 'templatecolumn',
                tpl: '<img src="resources/pokemon/{id}.png" height="20px"/>'
            }, {
                text: 'Name',
                dataIndex: 'name'
            }, {
                text: 'HP',
                dataIndex: 'hp'
            }, {
                text: 'Attack',
                dataIndex: 'attack'
            }, {
                text: 'Defense',
                dataIndex: 'defense'
            }, {
                text: 'Key Stats',
                xtype: 'widgetcolumn',
                widget: {
                    xtype: 'sparklinepie'
                },
                width: 200,
                dataIndex: 'keystats'
            }]
        }, ]
    }, {
        xtype: 'component',
        region: 'east',
        bind: {
            data: '{detail}'
        },
        width: 220,
        padding: 8,
        style: 'background-color: white',
        tpl: [
            '<tpl if="this.isData(values)"><div>',
            '<h1>{name} ({id})</h1>',
            '<p>Height: {height/10} m </p>',
            '<p>Weight: {weight/10} kg</p>',
            '<p>HP: {hp}</p>',
            '<tpl if="growth_rate"><p>Growth Rate: {growth_rate}</p></tpl>',
            '<p>Egg Groups: {[Ext.Array.pluck(values.egg_groups, "name")]}</p>',
            '<p>Abilities: {[Ext.Array.pluck(values.abilities, "name")]}</p>',
            '<p>Evolutions: <tpl for="evolutions">{to}{[values.level?"@"+values.level:""]}</tpl></p>',
            '</tpl>', {
                isData: function(data) {
                    return !Ext.Object.isEmpty(data);
                }
            }
        ]
    }]

});