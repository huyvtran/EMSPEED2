Ext.define('widget.stocks', {
    //extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    extend: 'Ext.grid.Panel',
    requires: [
        'widget.sparklineline'
        //'plugin.cellupdating'
    ],

    controller: 'stocks',

    height: 300,

    store: {
        type: 'stocks',
        autoLoad: true
    },

    stripeRows: true,
    columnLines: true,

    //plugins: [
    //    'cellupdating'
    //],

    columns: [{
        text: 'Company',
        flex: 1,
        sortable: true,
        dataIndex: 'name'
    }, {
        text: 'Price',
        width: 75,
        formatter: 'usMoney',
        dataIndex: 'price',
        align: 'right'
    }, {
        text: 'Trend',
        width: 100,
        dataIndex: 'trend',
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'sparklineline',
            tipTpl: 'Price: {y:number("0.00")}'
        }
    }, {
        text: 'Change',
        width: 80,
        producesHTML: true,
        renderer: 'renderChange',
        dataIndex: 'change',
        align: 'right'
    }, {
        text: '%',
        width: 70,
        renderer: 'renderChangePercent',
        updater: 'updateChangePercent',
        dataIndex: 'pctChange',
        align: 'right'
    }, {
        text: 'Last Updated',
        hidden: true,
        width: 175,
        sortable: true,
        formatter: 'date("m/d/Y H:i:s")',
        dataIndex: 'lastChange'
    }]
});

Ext.define('widget.stocksController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.stocks',

    renderPositiveNegative: function (val, format) {
        var out = Ext.util.Format.number(val, '0.00'),
            s = '<span';

        if (val > 0) {
            s += ' style="color:#73b51e;"';
        } else if (val < 0) {
            s += ' style="color:#cf4c35;"';
        }

        return s + '>' + out + '</span>';
    },

    renderChange: function (val) {
        return this.renderPositiveNegative(val, '0.00');
    },

    renderChangePercent: function (val) {
        return this.renderPositiveNegative(val, '0.00%');
    },

    updaterPositiveNegative: function (cell, value, format) {
        var innerSpan = Ext.fly(cell).down('span', true);

        innerSpan.style.color = value > 0 ? '#73b51e' : '#cf4c35';
        innerSpan.firstChild.data = Ext.util.Format.number(value, format);
    },

    updateChangePercent: function (cell, value) {
        this.updaterPositiveNegative(cell, value, '0.00%');
    }
});

