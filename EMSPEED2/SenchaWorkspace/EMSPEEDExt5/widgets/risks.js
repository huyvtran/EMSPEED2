Ext.define('widget.risks', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    xtype: 'risks',

    max: null,
    all: null,

        theColors: [
            ['insignificant', 'low', 'low', 'low', 'medium'],
            ['low', 'low', 'medium', 'medium', 'high'],
            ['low', 'medium', 'medium', 'high', 'high'],
            ['low', 'medium', 'high', 'high', 'extreme'],
            ['medium', 'high', 'high', 'extreme', 'extreme']
        ],

        initComponent: function () {
            com.startLoading();
            com.startLoading();
            var me = this;

            var mainItems = {
                xtype: 'container',
                width: '100%',
                layout: 'hbox',
                items: [
                    me.getMatrixArea(),
                    me.getGrid()
                ]
            };


            project.data.isParent = true; //for testing only
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
                        me.getRadioGroup(),
                        mainItems
                    ]
                });
            };
            me.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: me.getToolbar()
                }
            ];
            me.callParent(arguments);
            me.getData();
        },
        getData: function () {
            var me = this;
            var risks = me;
            var matrix = risks.down('#matrix');
            var filters = risks.down('#filters');
            var risksgrid = risks.down('#risksgrid');
            var storeGrid = risksgrid.getStore();

            var theUrl = com.ajaxUrl('ProjectService', 'GetRiskBurndowns');
            var theType;
            if (project.data.isParent === true) { theType = 2; }
            else { theType = 1; }
            var theParms = { type: theType, projectId: parseFloat(project.projectId) };
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
                me.setStoreFilters();
                me.setStoreGrid(me.max.risks);

                filters.getSelectionModel().select(3, true, true);
                filters.getSelectionModel().select(4, true, false);

                com.endLoading();
            });
        },
        setStoreMatrix: function (theData) {
            var me = this;
            var risks = me;
            var matrix = risks.down('#matrix');
            var filters = risks.down('#filters');
            var risksgrid = risks.down('#risksgrid');
            var storeGrid = risksgrid.getStore();
            var storeMatrix = Ext.create('Ext.data.Store', {
                fields: ['count', 'occurrence', 'severity'],
                data: theData
            });
            matrix.bindStore(storeMatrix);
            matrix.setVisible(true);
            matrix.dataRetrieved = true;
        },
        setStoreFilters: function () {
            var me = this;
            var risks = me;
            var matrix = risks.down('#matrix');
            var filters = risks.down('#filters');
            var risksgrid = risks.down('#risksgrid');
            var storeGrid = risksgrid.getStore();

            var theDataArray = [];
            for (var row = 0; row < risks.theColors.length; row++) {
                var theRow = risks.theColors[row];
                for (var column = 0; column < risks.theColors[row].length; column++) {
                    if (theDataArray.indexOf(risks.theColors[row][column]) === -1) {
                        theDataArray.push(risks.theColors[row][column]);
                    }
                }
            };
            var theData = [];
            for (var i = 0; i < theDataArray.length; i++) {
                theData.push({ name: theDataArray[i] });
            };

            var storeFilters = Ext.create('Ext.data.Store', {
                fields: ['name'],
                data: theData
            });
            filters.bindStore(storeFilters);
            filters.setVisible(true);
        },
        setStoreGrid: function (theData) {
            var me = this;
            var risks = me;
            var matrix = risks.down('#matrix');
            var filters = risks.down('#filters');
            var risksgrid = risks.down('#risksgrid');
            //var storeGrid = risksgrid.getStore();
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
            risksgrid.bindStore(storeGrid);
            risksgrid.columns[0].setVisible(project.data.isParent);
            risksgrid.setVisible(true);
            risksgrid.view.dataRetrieved = true;

        },

        getToolbar: function () {
            return [
                {
                    xtype: 'button', text: 'clear', handler: function (sender) {
                        var v = sender.up('baseclasswidget').down('#matrix');
                        v.getSelectionModel().deselectAll();

                        var f = sender.up('baseclasswidget').down('#filters');
                        f.getSelectionModel().deselectAll();
                    }
                },
                {
                    xtype: 'button', text: 'range', handler: function (sender) {
                        var v = sender.up('baseclasswidget').down('#matrix');
                        v.getSelectionModel().selectRange(9, 9, true, true);
                        v.getSelectionModel().selectRange(13, 14, true, true);
                        v.getSelectionModel().selectRange(17, 19, true, true);
                        v.getSelectionModel().selectRange(21, 24, true, false);
                    }
                },
                {
                    xtype: 'button', text: 'initial', handler: function (sender) {
                        var v = sender.up('baseclasswidget').down('#matrix');
                        var nodes = v.getNodes();
                        var arrayLength = nodes.length;
                        for (var i = 0; i < arrayLength; i++) {
                            if (nodes[i].className.indexOf("high") > -1 || nodes[i].className.indexOf("extreme") > -1) {
                                v.getSelectionModel().select(i, true, true);
                            }
                        }
                    }
                },
                {
                    xtype: 'button', text: 'all', handler: function (sender) {
                        var v = sender.up('baseclasswidget').down('#matrix');
                        v.getSelectionModel().selectAll();
                    }
                },
                {
                    xtype: 'button', text: 'three', handler: function (sender) {
                        var v = sender.up('baseclasswidget').down('#matrix');
                        v.getSelectionModel().select(3, true, true);
                        v.getSelectionModel().select(9, true, true);
                        v.getSelectionModel().select(19, true, false);
                    }
                },
                {
                    xtype: 'button', text: 'log', handler: function (sender) {
                        var v = sender.up('baseclasswidget').down('#matrix');
                        console.log(v.getSelectionModel().getCount());
                        console.log(v.getSelectionModel().getSelection());
                        //console.log(v.getViewItems());
                    }
                }
            ];
        },
        getRadioGroup: function () {
            return {
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
                                var me = this;
                                var risks = me.up('risks');
                                var matrix = risks.down('#matrix');
                                var filters = risks.down('#filters');
                                var risksgrid = risks.down('#risksgrid');
                                var storeGrid = risksgrid.getStore();
                                if (nv) {
                                    risks.setStoreMatrix(risks.max.matrix);
                                    risks.setStoreGrid(risks.max.risks);
                                }
                            }
                        }
                    },
                    {
                        boxLabel: 'All', name: 'rb-auto',
                        listeners: {
                            change: function (cb, nv, ov) {
                                var me = this;
                                var risks = me.up('risks');
                                var matrix = risks.down('#matrix');
                                var filters = risks.down('#filters');
                                var risksgrid = risks.down('#risksgrid');
                                var storeGrid = risksgrid.getStore();
                                if (nv) {
                                    risks.setStoreMatrix(risks.all.matrix);
                                    risks.setStoreGrid(risks.all.risks);
                                }
                            }
                        }
                    }
                ]
            };
        },
        getMatrixArea: function () {

            return {
                xtype: 'container',
                layout: 'hbox',
                margin: '10 10 10 10',
                items: [
                    { xtype: 'draw', height: 60, width: 15, items: [{ type: 'text', text: 'Severity', rotate: { degrees: -90 } }] },
                    {
                        xtype: 'container',
                        layout: 'vbox',
                        items: [
                            { xtype: 'draw', height: 15, width: 70, margin: '0 0 0 20', items: [{ type: 'text', text: 'Occurence' }] },
                            this.getMatrix(),
                            this.getFilters()
                        ]
                    }
                ]
            }

        },
        getMatrix: function () {
            return {
                xtype: 'dataview',
                itemId: 'matrix',

                dataRetrieved: false,
                //finalRefresh: false,
                listeners: {
                    refresh: function (view, eOpts) {
                        if (this.dataRetrieved) {
                            com.endLoading();
                            //this.dataRetrieved = false;
                            //this.finalRefresh = true;
                        }
                        //if (this.finalRefresh) {
                        //    //var parent = this.up('baseclasswidget');
                        //    //parent.updateFilter(parent);
                        //}
                    },

                    selectionchange: function (selectionModel, selected, eOpts) {
                        var me = this;
                        var risks = me.up('risks');
                        var matrix = risks.down('#matrix');
                        var filters = risks.down('#filters');
                        var risksgrid = risks.down('#risksgrid');
                        var storeGrid = risksgrid.getStore();
                        risks.updateFilter();
                    }
                },
                width: 216,
                multiSelect: true,
                overItemCls: 'hover',
                selectedItemCls: 'selected',
                itemSelector: 'li.clickable',
                emptyText: 'No data available',
                deferInitialRefresh: false,
                hidden: true,
                tpl: new Ext.XTemplate(
                    '<div class="matrix">',
                    '<tpl for=".">',
                    '{[this.doVal(values.severity, values.occurrence, values.count)]}',
                    '</tpl>',
                    '</div>',
                    {
                        disableFormats: true,
                        theColors: this.theColors,
                        doVal: function (r, c, v) {
                            //console.log(' r ' + r + ' c ' + c + ' v ' + v);
                            var s = '';
                            if (c === 1) { s = s + '<ul class="row">'; };
                            if (v === 0) { v = '&nbsp;'; }
                            s = s + '<li class="clickable ' + this.theColors[r - 1][c - 1] + '">' + v + '</li>';
                            if (c === 5) { s = s + '</ul>'; };
                            return s;
                        }
                    }
                )
            };
        },
        getFilters: function () {
            return {
                xtype: 'dataview',
                itemId: 'filters',
                listeners: {
                    selectionchange: function (selectionModel, selected, eOpts) {
                        var me = this;
                        var risks = me.up('risks');
                        var matrix = risks.down('#matrix');
                        var filters = risks.down('#filters');
                        var risksgrid = risks.down('#risksgrid');
                        var storeGrid = risksgrid.getStore();

                        var theNodesToBeSelected = [];
                        for (var i = 0; i < selected.length; i++) {
                            var theName = selected[i].data.name;
                            var nodes = matrix.getNodes();
                            for (var j = 0; j < nodes.length; j++) {
                                if (nodes[j].className.indexOf(theName) > -1) {
                                    theNodesToBeSelected.push(j);
                                }
                            }
                        };
                        var k = 0;
                        for (k = 0; k < theNodesToBeSelected.length - 1; k++) {
                            matrix.getSelectionModel().select(theNodesToBeSelected[k], true, true);
                        }
                        matrix.getSelectionModel().select(theNodesToBeSelected[k], true, false);
                    }
                },
                width: 216,
                multiSelect: true,
                overItemCls: 'hover',
                selectedItemCls: 'selected',
                itemSelector: 'li.clickable',
                emptyText: 'No data available',
                deferInitialRefresh: false,
                hidden: true,
                tpl: [
                    '<div class="matrix">',
                    '<div class="filter">',
                        '<span>Toggle</span>',
                        '<ul>',
                            '<tpl for=".">',
                            '<li class="clickable {name}">&nbsp;</li>',
                            '</tpl>',
                        '</ul>',
                    '</div>',
                    '</div>'
                ]
            };
        },
        getGrid: function () {
            return {
                xtype: 'grid',
                itemId: 'risksgrid',
                plugins: 'bufferedrenderer',
                margin: '27 15 0 0',
                border: true,
                flex: 1,
                height: 261,
                hidden: true,
                store: Ext.create('Ext.data.Store', {}),
                viewConfig: {
                    dataRetrieved: false,
                    finalRefresh: false,
                    emptyText: 'Please modify your risk matrix selections. No risks found',
                    listeners: {
                        refresh: function (view, eOpts) {
                            //if (this.dataRetrieved) {
                            //    com.endLoading();
                            //    this.dataRetrieved = false;
                            //}
                            //debugger;




                            if (this.dataRetrieved) {
                                com.endLoading();
                                this.dataRetrieved = false;
                                this.finalRefresh = true;
                            }
                            if (this.finalRefresh) {
                                //var storeGrid = this.getStore();
                                //storeGrid.filter("riskSeverity", 1); 
                                //storeGrid.filter("riskOccurrence", 1); 
                                //var parent = this.up('baseclasswidget');
                                //parent.updateFilter(parent);
                            }

                        }
                    }
                },
                columns: [
                    { text: 'Project ID', name: 'projectId', dataIndex: 'projectId', width: 85, menuDisabled: true },
                    {
                        text: 'Name', name: 'riskName', dataIndex: 'riskName', xwidth: 300, menuDisabled: true, flex: 1,
                        renderer: function (value, meta, record) {
                            meta.tdAttr = 'data-qtip="' + record.get('placesUsed') + '"';
                            return com.columnWrap(value);
                        }
                    },
                    { text: 'S', name: 'riskSeverity', dataIndex: 'riskSeverity', width: 40, menuDisabled: true },
                    { text: 'O', name: 'riskOccurrence', dataIndex: 'riskOccurrence', width: 40, menuDisabled: true },
                    { text: 'R', name: 'riskScore', dataIndex: 'riskScore', width: 40, menuDisabled: true, renderer: this.renderColor }
                ]
            }
        },

        renderColor: function (value, metadata, record) {
            var me = this;
            var risks = me.up('risks');
            var matrix = risks.down('#matrix');
            var filters = risks.down('#filters');
            var risksgrid = risks.down('#risksgrid');
            var storeGrid = risksgrid.getStore();
            var o = record.get('riskOccurrence');
            var s = record.get('riskSeverity');
            if (o > 0 && s > 0) {
                var theColor = risks.theColors[o - 1][s - 1];
                var color = theColor + '-cell';
                metadata.tdCls = metadata.tdCls + ' ' + color;
            }
            return value;
        },

        updateFilter: function () {
            var me = this;
            var risks = me;
            var matrix = risks.down('#matrix');
            var filters = risks.down('#filters');
            var risksgrid = risks.down('#risksgrid');
            var storeGrid = risksgrid.getStore();
            storeGrid.clearFilter(true);
            storeGrid.filterBy(function (record, id) {
                if (record.data.riskSeverity === null) {
                    return false;
                }
                if (record.data.riskOccurrence === null) {
                    return false;
                }
                var theRow = record.data.riskSeverity - 1,
                    theColumn = record.data.riskOccurrence - 1;

                var theSelectedItems = matrix.getSelectionModel().getSelection();
                for (var item in theSelectedItems) {
                    selectedItemSeverity = theSelectedItems[item].data.severity;
                    selectedItemOccurrence = theSelectedItems[item].data.occurrence;
                    if (record.data.riskSeverity === selectedItemSeverity && record.data.riskOccurrence === selectedItemOccurrence) {
                        return true;
                    }
                }
                return false;
            }, me);

            //var theItems = g.view.headerCt.items.items;
            //for (var item in theItems) {
            //    if (theItems[item].sortState != null) {
            //        storeGrid.sort([{ property: theItems[item].dataIndex, direction: theItems[item].sortState }]);
            //    }
            //}

            //for (var item in rm.currentSelection) {
            //    if (rm.currentSelection[item]) {
            //        $('.matrix ul.row li.' + item).addClass('the-selected-' + item);
            //        $('.matrix .filter li.' + item).addClass('the-selected-' + item);
            //    } else {
            //        $('.matrix ul.row li.' + item).removeClass('the-selected-' + item);
            //        $('.matrix .filter li.' + item).removeClass('the-selected-' + item);
            //    }
            //}
        },

            //constructor: function () {
            //    debugger;
            //    var me = this;
            //    me.style_rules.push('.matrix2 ul {list-style: none;margin: 0 0 6px 0;padding: 0;}');
            //    me.style_rules.push('.matrix2 ul li {display: inline-block;padding: 0;line-height: 33px;box-sizing: border-box;cursor: pointer;width: 35px;height: 35px;text-align: center;overflow: hidden;margin: 0 3px;zoom: 1;}');

            //    me.style_rules.push('.matrix2 ul li.insignificant {background: linear-gradient(to bottom, #83a1bf 0%, #6187ae 100%);border: 2px solid #6b8fb3;border-radius: 3px;}');
            //    me.style_rules.push('.matrix2 ul li.insignificant.hover {background: linear-gradient(to bottom, #a4bad1 0%, #94adc8 100%) !important;}');
            //    me.style_rules.push('.matrix2 ul li.insignificant.selected {background: linear-gradient(to bottom, #c6d4e2 0%, #b5c7d9 100%);}');

            //    me.style_rules.push('.matrix2 ul li.low {background: linear-gradient(to bottom, #9fbe6e 0%, #87ac4d 100%);border: 2px solid #8fb355;border-radius: 3px;}');
            //    me.style_rules.push('.matrix2 ul li.low.hover {background: linear-gradient(to bottom, #b6ce91 0%, #abc680 100%) !important;}');
            //    me.style_rules.push('.matrix2 ul li.low.selected {background: linear-gradient(to bottom, #cedeb4 0%, #c2d6a3 100%);}');

            //    me.style_rules.push('.matrix2 ul li.medium {background: linear-gradient(to bottom, #fed739 0%, #fecd06 100%);border: 2px solid #fed015;border-radius: 3px;}');
            //    me.style_rules.push('.matrix2 ul li.medium.hover {background: linear-gradient(to bottom, #ffec9e 0%, #fee16c 100%) !important;}');
            //    me.style_rules.push('.matrix2 ul li.medium.selected {background: linear-gradient(to bottom, #ffec9e 0%, #ffe685 100%);}');

            //    me.style_rules.push('.matrix2 ul li.high {background: linear-gradient(to bottom, #f15053 0%, #ed2124 100%);border: 2px solid #ee2f32;border-radius: 3px;}');
            //    me.style_rules.push('.matrix2 ul li.high.hover {background: linear-gradient(to bottom, #f57f81 0%, #f3686a 100%) !important;}');
            //    me.style_rules.push('.matrix2 ul li.high.selected {background: linear-gradient(to bottom, #f8afb0 0%, #f79798 100%);}');

            //    me.style_rules.push('.matrix2 ul li.extreme {background: linear-gradient(to bottom, #4d4d4d 0%, #333333 100%);border: 2px solid #3b3b3b;border-radius: 3px;color: #ccc;}');
            //    me.style_rules.push('.matrix2 ul li.extreme.hover {background: linear-gradient(to bottom, #666666 0%, #595959 100%) !important;}');
            //    me.style_rules.push('.matrix2 ul li.extreme.selected {background: linear-gradient(to bottom, #808080 0%, #737373 100%);}');

            //    me.style_rules.push('.matrix2 .filter {margin-top: 15px;border: 1px solid darkgray;border-radius: 3px;padding: 3px;height: 28px;width: 210px;position: relative;}');
            //    me.style_rules.push('.matrix2 .filter span {display: inline-block;padding: 0 10px 0 2px;position: absolute;top: 7px;text-transform: uppercase;color: darkgray;}');

            //    me.style_rules.push('.matrix2 .filter ul {position: absolute;left: 64px;}');
            //    me.style_rules.push('.matrix2 .filter ul li {width: 20px;height: 20px;zoom: 1;}');

            //    //me.style_rules.push('.matrix2 ul li.insignificant {background: linear-gradient(to bottom, #83a1bf 0%, #6187ae 100%);border: 2px solid #6b8fb3;border-radius: 3px;}');
            //    //me.style_rules.push('.matrix2 ul li.low {background: linear-gradient(to bottom, #9fbe6e 0%, #87ac4d 100%);border: 2px solid #8fb355;border-radius: 3px;}');
            //    //me.style_rules.push('.matrix2 ul li.medium {background: linear-gradient(to bottom, #fed739 0%, #fecd06 100%);border: 2px solid #fed015;border-radius: 3px;}');
            //    //me.style_rules.push('.matrix2 ul li.high {background: linear-gradient(to bottom, #f15053 0%, #ed2124 100%);border: 2px solid #ee2f32;border-radius: 3px;}');
            //    //me.style_rules.push('.matrix2 ul li.extreme {background: linear-gradient(to bottom, #4d4d4d 0%, #333333 100%);border: 2px solid #3b3b3b;border-radius: 3px;color: #ccc;}');

            //    //me.style_rules.push('.matrix2 ul li.insignificant.the-hover {background: linear-gradient(to bottom, #a4bad1 0%, #94adc8 100%) !important;}');
            //    //me.style_rules.push('.matrix2 ul li.low.the-hover {background: linear-gradient(to bottom, #b6ce91 0%, #abc680 100%) !important;}');
            //    //me.style_rules.push('.matrix2 ul li.medium.the-hover {background: linear-gradient(to bottom, #fee16c 0%, #fedc52 100%) !important;}');
            //    //me.style_rules.push('.matrix2 ul li.high.the-hover {background: linear-gradient(to bottom, #f57f81 0%, #f3686a 100%) !important;}');
            //    //me.style_rules.push('.matrix2 ul li.extreme.the-hover {background: linear-gradient(to bottom, #666666 0%, #595959 100%) !important;}');
            //    //me.style_rules.push('.matrix2 ul li.insignificant.the-selected {background: linear-gradient(to bottom, #c6d4e2 0%, #b5c7d9 100%);}');
            //    //me.style_rules.push('.matrix2 ul li.low.the-selected {background: linear-gradient(to bottom, #cedeb4 0%, #c2d6a3 100%);}');
            //    //me.style_rules.push('.matrix2 ul li.medium.the-selected {background: linear-gradient(to bottom, #ffec9e 0%, #ffe685 100%);}');
            //    //me.style_rules.push('.matrix2 ul li.high.the-selected {background: linear-gradient(to bottom, #f8afb0 0%, #f79798 100%);}');
            //    //me.style_rules.push('.matrix2 ul li.extreme.the-selected {background: linear-gradient(to bottom, #808080 0%, #737373 100%);}');



            //    me.callParent(arguments);
            //},

    });

