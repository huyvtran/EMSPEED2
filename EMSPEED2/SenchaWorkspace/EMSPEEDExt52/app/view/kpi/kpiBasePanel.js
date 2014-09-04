Ext.define('EMSPEEDExt5.view.kpi.rkpiBasePanel', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassPanel',
    xtype: 'kpiBasePanel',
    id: 'kpiBasePanel',
    requires: [
        'Ext.chart.axis.Category'
    ],

    controller: 'kpi',
    title: 'KPI',

    layout: {
        type: 'hbox'
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                { text: 'Legend', width: '100px', handler: 'onLegendClick' }
            ]
        }
    ],



    initComponent: function () {

        var me = this;

        this.myDataStore = Ext.create('Ext.data.JsonStore', {
            fields: ['month', 'data1', 'data2', 'data3', 'data4'],
            data: [
                { month: 'Jan', data1: 20, data2: 37, data3: 35, data4: 4 },
                { month: 'Feb', data1: 20, data2: 37, data3: 36, data4: 5 },
                { month: 'Mar', data1: 19, data2: 36, data3: 37, data4: 4 },
                { month: 'Apr', data1: 18, data2: 36, data3: 38, data4: 5 },
                { month: 'May', data1: 18, data2: 35, data3: 39, data4: 4 },
                { month: 'Jun', data1: 17, data2: 34, data3: 42, data4: 4 },
                { month: 'Jul', data1: 16, data2: 34, data3: 43, data4: 4 },
                { month: 'Aug', data1: 16, data2: 33, data3: 44, data4: 4 },
                { month: 'Sep', data1: 16, data2: 32, data3: 44, data4: 4 },
                { month: 'Oct', data1: 16, data2: 32, data3: 45, data4: 4 },
                { month: 'Nov', data1: 15, data2: 31, data3: 46, data4: 4 },
                { month: 'Dec', data1: 15, data2: 31, data3: 47, data4: 4 }
            ]
        });


        this.items = [

            {
                xtype: 'cartesian',
                id: 'theChart',
                width: '100%',
                height: 410,
                style: 'background: #fff;',
                legend: {
                    docked: 'right'
                },
                store: this.myDataStore,
                insetPadding: 40,
                sprites: [
                    {
                        type: 'text',
                        text: 'KPI Chart',
                        font: '22px Helvetica',
                        width: 100,
                        height: 30,
                        x: 40, // the sprite x position
                        y: 20  // the sprite y position
                    },
                    {
                        type: 'text',
                        text: 'Data: Browser Stats 2012',
                        font: '10px Helvetica',
                        x: 12,
                        y: 380
                    },
                    {
                        type: 'text',
                        text: 'Source: http://www.w3schools.com/',
                        font: '10px Helvetica',
                        x: 12,
                        y: 390
                    }
                    //{
                    //    xtype: 'container',
                    //    x: 52,
                    //    y: 390,

                    //    //id: 'theFooter',
                    //    html: '<div id="emspeed-kpi-label-container"><div id="emspeed-kpi-labels"><ul>' +
                    //            '<li><span style="color:#009900;font-weight:bold;">RMI</span><span style="color:black;">=Requirements Maturity</span></li>' +
                    //            '<li><span style="color:#0000ff;font-weight:bold;">Risk</span><span style="color:black;">=Risk Score</span></li>' +
                    //            '<li><span style="color:#ff0000;font-weight:bold;">PMI</span><span style="color:black;">=Product Maturity</span></li>' +
                    //            '<li><span style="color:#ff9900;font-weight:bold;">DfX</span><span style="color:black;">=Lifecycle Attributes</span></li>' +
                    //            '<ul></div></div>'
                    //}  //footer
                ],
                axes: [{
                    type: 'numeric',
                    fields: ['data1', 'data2', 'data3', 'data4' ],
                    position: 'left',
                    grid: true,
                    minimum: 0,
                    renderer: function (v) { return v.toFixed(v < 10 ? 1: 0) + '%'; }
                }, {
                    type: 'category',
                    fields: 'month',
                    position: 'bottom',
                    grid: true,
                    label: {
                        rotate: {
                            degrees: -45
                        }
                    }
                }],
                series: [{
                    type: 'line',
                    axis: 'left',
                    title: 'RMI 80',
                    xField: 'month',
                    yField: 'data1',
                    style: {
                        lineWidth: 4
                    },
                    marker: {
                        radius: 4
                    },
                    highlight: {
                        fillStyle: '#000',
                        radius: 5,
                        lineWidth: 2,
                        strokeStyle: '#fff'
                    },
                    tips: {
                        trackMouse: true,
                        style: 'background: #FFF',
                        height: 20,
                        renderer: function(storeItem, item) {
                            var title = item.series.title;
                            this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField) + '%');
                        }
                    }
                }, {
                    type: 'line',
                    axis: 'left',
                    title: 'Risk 4',
                    xField: 'month',
                    yField: 'data2',
                    style: {
                        lineWidth: 4
                    },
                    marker: {
                        radius: 4
                    },
                    highlight: {
                        fillStyle: '#000',
                        radius: 5,
                        lineWidth: 2,
                        strokeStyle: '#fff'
                    },
                    tips: {
                        trackMouse: true,
                        style: 'background: #FFF',
                        height: 20,
                        renderer: function(storeItem, item) {
                            var title = item.series.title;
                            this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField) + '%');
                        }
                    }
                }, {
                    type: 'line',
                    axis: 'left',
                    title: 'PMI 0',
                    xField: 'month',
                    yField: 'data3',
                    style: {
                        lineWidth: 4
                    },
                    marker: {
                        radius: 4
                    },
                    highlight: {
                        fillStyle: '#000',
                        radius: 5,
                        lineWidth: 2,
                        strokeStyle: '#fff'
                    },
                    tips: {
                        trackMouse: true,
                        style: 'background: #FFF',
                        height: 20,
                        renderer: function(storeItem, item) {
                            var title = item.series.title;
                            this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField) + '%');
                        }
                    }
                }, {
                    type: 'line',
                    axis: 'left',
                    title: 'DfX 0',
                    xField: 'month',
                    yField: 'data4',
                    style: {
                        lineWidth: 4
                    },
                    marker: {
                        radius: 4
                    },
                    highlight: {
                        fillStyle: '#000',
                        radius: 5,
                        lineWidth: 2,
                        strokeStyle: '#fff'
                    },
                    tips: {
                        trackMouse: true,
                        style: 'background: #FFF',
                        height: 20,
                        renderer: function(storeItem, item) {
                            var title = item.series.title;
                            this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField) + '%');
                        }
                    }
                }]
            }





        ];
        this.callParent();
    }

});
