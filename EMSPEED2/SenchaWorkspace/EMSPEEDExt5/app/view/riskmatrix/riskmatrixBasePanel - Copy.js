//Ext.define('EMSPEEDExt5.view.riskmatrix.riskmatrixBasePanel', {
//    extend: 'EMSPEEDExt5.view.baseclass.baseclassPanel',
//    title: 'riskmatrix',
//    xtype: 'riskmatrixBasePanel',
//    //id: 'riskmatrixBasePanel',
//    controller: 'riskmatrixBasePanelController',
//    layout:  'hbox',

//    max: null,
//    all: null,

//    theColors: [
//        ['insignificant', 'low', 'low', 'low', 'medium'],
//        ['low', 'low', 'medium', 'medium', 'high'],
//        ['low', 'medium', 'medium', 'high', 'high'],
//        ['low', 'medium', 'high', 'high', 'extreme'],
//        ['medium', 'high', 'high', 'extreme', 'extreme']
//    ],

//    clickableColors: ['insignificant', 'low', 'medium', 'high', 'extreme'],
//    currColor: 'high', //'extreme',
//    currentSelection: { insignificant: false, low: false, medium: false, high: true, extreme: true },

 
//    initComponent: function () {
//        this.items = [
//            {
//                xtype: 'dataview',
//                //id: 'dataviewMatrix',
//                width: 216,
//                singleSelect: true,
//                overItemCls: 'x-view-over',
//                itemSelector: '.clickable',
//                emptyText: 'No data available',
//                deferInitialRefresh: false,
//                hidden: true,

//                //store: Ext.create('Ext.data.Store', {
//                //    fields: ['severity', 'occurrence', 'count'],
//                //    data: [{"severity":1,"occurrence":1,"count":0},{"severity":1,"occurrence":2,"count":0},{"severity":1,"occurrence":3,"count":0},{"severity":1,"occurrence":4,"count":0},{"severity":1,"occurrence":5,"count":0},{"severity":2,"occurrence":1,"count":0},{"severity":2,"occurrence":2,"count":0},{"severity":2,"occurrence":3,"count":0},{"severity":2,"occurrence":4,"count":0},{"severity":2,"occurrence":5,"count":0},{"severity":3,"occurrence":1,"count":0},{"severity":3,"occurrence":2,"count":0},{"severity":3,"occurrence":3,"count":0},{"severity":3,"occurrence":4,"count":1},{"severity":3,"occurrence":5,"count":0},{"severity":4,"occurrence":1,"count":0},{"severity":4,"occurrence":2,"count":0},{"severity":4,"occurrence":3,"count":0},{"severity":4,"occurrence":4,"count":1},{"severity":4,"occurrence":5,"count":2},{"severity":5,"occurrence":1,"count":0},{"severity":5,"occurrence":2,"count":0},{"severity":5,"occurrence":3,"count":0},{"severity":5,"occurrence":4,"count":0},{"severity":5,"occurrence":5,"count":0}]
//                //}),

//                tpl: new Ext.XTemplate(
//                    '<div class="matrix">',
//                    '<tpl for=".">',
//                    '{[this.doVal(values.severity, values.occurrence, values.count)]}',
//                    '</tpl>',
//                    '<div class="filter">',
//                        '<span>Toggle</span>',
//                        '<ul>',
//                            '<li class="insignificant" id="risk_insignificant" data-e-value="insignificant">&nbsp;</li>',
//                            '<li class="low" id="risk_low" data-e-value="low">&nbsp;</li>',
//                            '<li class="medium" id="risk_medium" data-e-value="medium">&nbsp;</li>',
//                            '<li class="high" id="risk_high" data-e-value="high">&nbsp;</li>',
//                            '<li class="extreme" id="risk_extreme" data-e-value="extreme">&nbsp;</li>',
//                        '</ul>',
//                    '</div>',
//                    '</div>',
//                    {
//                        disableFormats: true,
//                        doVal: function (r, c, v) {
//                            var rm = Ext.getCmp('riskmatrixBasePanel');
//                            var s = '';
//                            if (c === 1) {
//                                s = s + '<ul class="row">';
//                            }
//                            if (v === 0) {
//                                s = s + '<li' + ' r="' + r + '" ' + ' c="' + c + '" ' + ' id="r' + r + 'c' + c + '"' + ' v="' + v + '" ' + 'data-e-value="' + rm.theColors[r - 1][c - 1] + '" class="clickable ' + rm.theColors[r - 1][c - 1] + '">&nbsp;' + '' + '&nbsp;</li>';
//                            } else {
//                                s = s + '<li' + ' r="' + r + '" ' + ' c="' + c + '" ' + ' id="r' + r + 'c' + c + '"' + ' v="' + v + '" ' + 'data-e-value="' + rm.theColors[r - 1][c - 1] + '" class="clickable ' + rm.theColors[r - 1][c - 1] + '">&nbsp;' + v + '&nbsp;</li>';
//                            }
//                            if (c === 5) {
//                                s = s + '</ul>';
//                            }
//                            return s;
//                        }
//                    }
//                )
//            }
//        ];
//        this.callParent();
//        this.getData();
//    },


//    getData: function () {
//        var theUrl = com.ajaxUrl('ProjectService', 'GetRiskBurndowns');
//        var theParms = { type: 1, projectId: 97366 };
//        var me = this;
//        $.ajax(com.ajaxOptions({
//            url: theUrl,
//            data: theParms
//        }))
//        .done(function (data) {
//            me.max = data[0];
//            me.setStoreMatrix(me.max.matrix);
//        });
//    },

//    setStoreMatrix: function (theData) {
//        var me = this;
//        var storeMatrix = Ext.create('Ext.data.Store', {
//            fields: ['count', 'occurrence', 'severity'],
//            data: theData
//        });
//        me.down('dataview').bindStore(storeMatrix);
//        me.down('dataview').setVisible(true);
//    },

//    setStoreMatrix2: function (theData) {
//        var me = this;
//        var storeMatrix = Ext.create('Ext.data.Store', {
//            fields: ['severity', 'occurrence', 'count'],
//            data: [{ "severity": 1, "occurrence": 1, "count": 0 }, { "severity": 1, "occurrence": 2, "count": 0 }, { "severity": 1, "occurrence": 3, "count": 0 }, { "severity": 1, "occurrence": 4, "count": 0 }, { "severity": 1, "occurrence": 5, "count": 0 }, { "severity": 2, "occurrence": 1, "count": 0 }, { "severity": 2, "occurrence": 2, "count": 0 }, { "severity": 2, "occurrence": 3, "count": 0 }, { "severity": 2, "occurrence": 4, "count": 0 }, { "severity": 2, "occurrence": 5, "count": 0 }, { "severity": 3, "occurrence": 1, "count": 0 }, { "severity": 3, "occurrence": 2, "count": 0 }, { "severity": 3, "occurrence": 3, "count": 0 }, { "severity": 3, "occurrence": 4, "count": 1 }, { "severity": 3, "occurrence": 5, "count": 0 }, { "severity": 4, "occurrence": 1, "count": 0 }, { "severity": 4, "occurrence": 2, "count": 0 }, { "severity": 4, "occurrence": 3, "count": 0 }, { "severity": 4, "occurrence": 4, "count": 1 }, { "severity": 4, "occurrence": 5, "count": 2 }, { "severity": 5, "occurrence": 1, "count": 0 }, { "severity": 5, "occurrence": 2, "count": 0 }, { "severity": 5, "occurrence": 3, "count": 0 }, { "severity": 5, "occurrence": 4, "count": 0 }, { "severity": 5, "occurrence": 5, "count": 0 }]
//        });
//        me.down('dataview').bindStore(storeMatrix);
//        me.down('dataview').setVisible(true);
//    }

//});
