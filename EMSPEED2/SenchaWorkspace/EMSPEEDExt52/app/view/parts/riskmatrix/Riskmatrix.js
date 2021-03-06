Ext.define('EMSPEEDExt5.view.parts.riskmatrix.Riskmatrix', {
    extend: 'EMSPEEDExt5.view.dashboard.dashboardPartsBase',
    xtype: 'riskmatrix',
    layout: 'vbox',
    id: 'dashboardPortletRiskMatrix',
    requires: [
        'Ext.form.Label'
    ],

    max: null,
    all: null,

    theColors: [
        ['insignificant', 'low', 'low', 'low', 'medium'],
        ['low', 'low', 'medium', 'medium', 'high'],
        ['low', 'medium', 'medium', 'high', 'high'],
        ['low', 'medium', 'high', 'high', 'extreme'],
        ['medium', 'high', 'high', 'extreme', 'extreme']
    ],

    clickableColors: ['insignificant', 'low', 'medium', 'high', 'extreme'],
    currColor: 'high', //'extreme',
    currentSelection: { insignificant: false, low: false, medium: false, high: true, extreme: true },

    updateFilter: function (rm) {
        var store = Ext.getCmp('gridStore').getStore();

        store.clearFilter();
        store.filterBy(function (r) {
            if (r.data.riskSeverity === null) {
                return false;
            }
            if (r.data.riskOccurrence === null) {
                return false;
            }

            var theRow = r.data.riskSeverity - 1,
                theColumn = r.data.riskOccurrence - 1;

            for (var item in rm.currentSelection) {
                if (rm.currentSelection[item]) {
                    if (rm.theColors[r.data.riskOccurrence - 1][r.data.riskSeverity - 1] == item) {
                        return true;
                    }
                }
            }


            return false;
        });

        var theItems = Ext.getCmp('gridStore').view.headerCt.items.items;
        for (var item in theItems) {
            if (theItems[item].sortState != null) {
                store.sort([{ property: theItems[item].dataIndex, direction: theItems[item].sortState }]);
            }
        }

        for (var item in rm.currentSelection) {
            if (rm.currentSelection[item]) {
                $('.matrix ul.row li.' + item).addClass('the-selected-' + item);
                $('.matrix .filter li.' + item).addClass('the-selected-' + item);
            } else {
                $('.matrix ul.row li.' + item).removeClass('the-selected-' + item);
                $('.matrix .filter li.' + item).removeClass('the-selected-' + item);
            }
        }
    },

    initComponent: function () {
        com.startLoading();
        var me = this;
        console.log('initComponent ' + me.widgetData);

//        var mainItems2 = { xtype: 'button', text: 'hi' };
        var mainItems = {
            xtype: 'container',
            width: '100%',
            layout: 'hbox',
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    margin: '10 10 10 10',
                    items: [

                        { xtype: 'label', text: 'Occurrence', margin: '0 0 0 25', degrees: 0 },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                          items: [

                                //{ xtype: 'label', text: 'Severity', margin: '10 0 0 0', degrees: -90 },
                                {
                                    xtype: 'dataview',
                                    id: 'dataviewMatrix2',
                                    width: 216,
                                    singleSelect: true,
                                    overItemCls: 'x-view-over',
                                    itemSelector: '.clickable',
                                    emptyText: 'No data available',
                                    deferInitialRefresh: false,
                                    hidden: true,
                                    tpl: new Ext.XTemplate(
                                        '<div class="matrix">',
                                        '<tpl for=".">',
                                        '{[this.doVal(values.severity, values.occurrence, values.count)]}',
                                        '</tpl>',
                                        '<div class="filter">',
                                            '<span>Toggle</span>',
                                            '<ul>',
                                                '<li class="insignificant" id="risk_insignificant" data-e-value="insignificant">&nbsp;</li>',
                                                '<li class="low" id="risk_low" data-e-value="low">&nbsp;</li>',
                                                '<li class="medium" id="risk_medium" data-e-value="medium">&nbsp;</li>',
                                                '<li class="high" id="risk_high" data-e-value="high">&nbsp;</li>',
                                                '<li class="extreme" id="risk_extreme" data-e-value="extreme">&nbsp;</li>',
                                            '</ul>',
                                        '</div>',
                                        '</div>',
                                        {
                                            disableFormats: true,
                                            doVal: function (r, c, v) {
                                                var rm = Ext.getCmp('dashboardPortletRiskMatrix');
                                                var s = '';
                                                if (c === 1) {
                                                    s = s + '<ul class="row">';
                                                }
                                                if (v === 0) {
                                                    s = s + '<li' + ' r="' + r + '" ' + ' c="' + c + '" ' + ' id="r' + r + 'c' + c + '"' + ' v="' + v + '" ' + 'data-e-value="' + com.theColors[r - 1][c - 1] + '" class="clickable ' + com.theColors[r - 1][c - 1] + '">&nbsp;' + '' + '&nbsp;</li>';
                                                } else {
                                                    s = s + '<li' + ' r="' + r + '" ' + ' c="' + c + '" ' + ' id="r' + r + 'c' + c + '"' + ' v="' + v + '" ' + 'data-e-value="' + com.theColors[r - 1][c - 1] + '" class="clickable ' + com.theColors[r - 1][c - 1] + '">&nbsp;' + v + '&nbsp;</li>';
                                                }
                                                if (c === 5) {
                                                    s = s + '</ul>';
                                                }
                                                return s;
                                            }
                                        }
                                    )
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'grid',
                    id: 'gridStore',
                    margin: '27 15 0 0',
                    flex: 1,
                    height: 251,
                    border: true,
                    plugins: 'bufferedrenderer',
                    viewConfig: {
                        emptyText: 'Please modify your risk matrix selections. No risks found'
                    },
                    columns: [
                        { text: 'Project ID', name: 'projectId', dataIndex: 'projectId', width: 85, menuDisabled: true },
                        { text: 'Name', name: 'riskName', dataIndex: 'riskName',  menuDisabled: true, flex: 1, renderer: com.columnWrap },
                        { text: 'S', name: 'riskSeverity', dataIndex: 'riskSeverity', width: 40, menuDisabled: true },
                        { text: 'O', name: 'riskOccurrence', dataIndex: 'riskOccurrence', width: 40, menuDisabled: true },
                        { text: 'R', name: 'riskScore', dataIndex: 'riskScore', width: 40, menuDisabled: true, renderer: this.renderColor }
                    ]
                }
            ]
        };
        if (!project.data.isParent) {
            Ext.apply(this, {
                items: [
                    mainItems
                ]
            })
        }
        else {
            Ext.apply(this, {
                items: [
                    {
                        xtype: 'radiogroup',
                        margin: '10 0 0 45',
                        fieldLabel: 'Rollup Rule',
                        labelWidth: 70,
                        columns: [220, 50],
                        items: [
                            {
                                boxLabel: 'Max Risk By Exposure Category', name: 'rb-auto', checked: true,
                                listeners: {
                                    change: function (cb, nv, ov) {
                                        if (nv) {
                                            me.setStoreMatrix(me.max.matrix);
                                            me.setStoreGrid(me.max.risks);
                                        }
                                    }
                                }
                            },
                            {
                                boxLabel: 'All', name: 'rb-auto',
                                listeners: {
                                    change: function (cb, nv, ov) {
                                        if (nv) {
                                            me.setStoreMatrix(me.all.matrix);
                                            me.setStoreGrid(me.all.risks);
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    mainItems
                ]
            });

        }

        this.callParent(arguments);
        this.getData();
    },

    renderColor: function (value, metadata, record) {
        var rm = Ext.getCmp('dashboardPortletRiskMatrix');
        var o = record.get('riskOccurrence');
        var s = record.get('riskSeverity');
        if (o > 0 && s > 0) {
            var theColor = rm.theColors[o - 1][s - 1];
            var color = theColor + '-cell';
            metadata.tdCls = metadata.tdCls + ' ' + color;
        }
        return value;
    },

    setStoreMatrix: function (theData) {
        var me = this;
        var storeMatrix = Ext.create('Ext.data.Store', {
            fields: ['count', 'occurrence', 'severity'],
            data: theData
        });
        me.down('dataview').bindStore(storeMatrix);
        me.down('dataview').setVisible(true);
    },

    setStoreGrid: function (theData) {
        var me = this;
        var storeGrid = Ext.create('Ext.data.Store', {
            fields: [
                { name: 'riskSequence', type: 'int', mapping: 'riskSequence' },
                { name: 'projectId', type: 'int', mapping: 'projectId' },
                { name: 'riskName', type: 'string', mapping: 'riskName' },
                { name: 'riskSeverity', type: 'int', mapping: 'riskSeverity' },
                { name: 'riskOccurrence', type: 'int', mapping: 'riskOccurrence' },
                { name: 'riskScore', type: 'int', mapping: 'riskScore' },
                { name: 'riskExposureCategorySequence', type: 'int', mapping: 'riskExposureCategorySequence' },
                { name: 'riskExposureCategoryName', type: 'string', mapping: 'riskExposureCategoryName' },
                { name: 'placesUsed', type: 'string', mapping: 'placesUsed' },
                {
                    name: 'riskDisplayName',
                    type: 'string',
                    mapping: 'riskName',
                    convert: function (v, rec) {
                        var display = rec.data.riskName
                        if (project.data.isParent) {
                            display = rec.data.projectId + ' - ' + rec.data.riskName;
                        }
                        return display;
                    }
                }
            ],
            data: theData
        });
        storeGrid.filter("riskSeverity", 10);
        storeGrid.filter("riskOccurrence", 10);
        var riskGrid = me.down('grid');
        riskGrid.bindStore(storeGrid);
        riskGrid.columns[0].setVisible(project.data.isParent);
        me.updateFilter(me);
    },

    getData: function () {
        var theUrl = com.ajaxUrl('ProjectService', 'GetRiskBurndowns');
        var theType;
        if (project.data.isParent === true) { theType = 2; }
        else { theType = 1; }
        var theParms = { type: theType, projectId: parseFloat(project.projectId) };
        var me = this;
        $.ajax(com.ajaxOptions({
            url: theUrl,
            data: theParms
        }))
        .done(function (data) {
            if (project.data.isParent) {
                me.max = data[0];
                me.all = data[1];
            }
            else {
                me.max = data[0];
            }
            me.setStoreMatrix(me.max.matrix);
            me.setStoreGrid(me.max.risks);
            com.endLoading();
        });
    }
});


$(function () {

    $('body').on('click', '.matrix .filter li', function () {
        com.startLoading();
        var type = $(this).attr('data-e-value'),
            rm = Ext.getCmp('dashboardPortletRiskMatrix');
        rm.currentSelection[type] = !rm.currentSelection[type];
        rm.updateFilter(rm);
        com.endLoading();
    });

    $('body').on('click', '.matrix ul.row li', function () {
        com.startLoading();
        var color = $(this).attr('data-e-value');
        clearSelection();

        $(this).addClass('the-selected-' + color);

        var me = Ext.getCmp('gridStore');
        var store = me.getStore();
        store.clearFilter();
        store.filter("riskSeverity", $(this).attr('r'));
        store.filter("riskOccurrence", $(this).attr('c'));
        com.endLoading();
    });

    // filters
    $('body').on('mouseover', '.matrix .filter li', function () {
        var type = $(this).attr('data-e-value');
        $('.matrix ul.row li.' + type).addClass('the-hover-' + type);

    }).on('mouseout', '.matrix .filter li', function () {
        var type = $(this).attr('data-e-value');
        $('.matrix ul.row li.' + type).removeClass('the-hover-' + type);
    });

    var clearSelection = function () {
        rm = Ext.getCmp('dashboardPortletRiskMatrix');

        for (var item in rm.currentSelection) {
            rm.currentSelection[item] = false;
        }

        $('.matrix li').removeClass(function (index, classNames) {
            var currentClasses = classNames.split(" "),
                classesToRemove = [];

            $.each(currentClasses, function (index, className) {
                if (/the-selected.*/.test(className)) {
                    classesToRemove.push(className);
                }
            });

            return classesToRemove.join(" ");
        });

    };

});
