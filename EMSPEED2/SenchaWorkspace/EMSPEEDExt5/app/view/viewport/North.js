Ext.define('EMSPEEDExt5.view.viewport.North', {
    extend: 'Ext.Container',
    xtype: 'North',
    id: 'North',
    title: 'EMSPEED 2.0',
    height: 102,
    requires: [
        'Ext.form.field.ComboBox'
    ],    

    layout: {
        type: 'auto'
    },
    viewModel: {
        type: 'NorthModel'
    },
    //style: {
    //    overflow: 'visible'
    //},

    listeners: {
        afterrender: function (sender, eOpts) {
            //var $theDiv = $('#Test');
            //var $injector = angular.injector(['ng', 'app']);
            //$injector.invoke(function ($rootScope, $compile) {
            //    $compile($theDiv)($rootScope);
            //});

        }
    },

    initComponent: function() {
        document.title = this.title;
        this.items = [
            {
                xtype: 'container',
                width: '100%',
                cls: 'slb-header-div',
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },
                items: [
                    {
                        xtype: 'component',
                        height: 48,
                        flex: 1,
                        //html: '<div style="margin: 15px 0px 0px 5px;"><span style="font-family: Pictos;font-size: 28px;">=</span><span style="margin: 0px 0px 0px 20px;font-size: 26px;">LOGO HERE...</span></div>'
                        html: '<div style="margin: 15px 0px 0px 5px;"><span style="margin: 0px 0px 0px 20px;font-size: 26px;">LOGO HERE...</span></div>'
                    },

                    //{ xtype: 'component', html: '<wt-test></wt-test>'},
                    //{ xtype: 'component', html: '<div style="margin-right:50px;" id="Test" ng-controller="TestController"><div wt-test></div></div>' },
                    //{ xtype: 'component', html: '<div id="Test" style="width:200px;margin-right:50px;" wt-test></div>' },

                    //{ xtype: 'component', id: 'Test', autoEl: { tag: 'div', cls: 'wt-test' } },


                    { xtype: 'component', autoEl: { tag: 'i', cls: 'fa fa-envelope fa-fw', style: 'color:white;font-size:14px;' } },
                    { xtype: 'component', autoEl: { tag: 'i', cls: 'fa fa-caret-down', style: 'color:white;font-size:12px;margin:0px 20px 0px 3px' } },

                    { xtype: 'component', autoEl: { tag: 'i', cls: 'fa fa-tasks fa-fw', style: 'color:white;font-size:14px;' } },
                    { xtype: 'component', autoEl: { tag: 'i', cls: 'fa fa-caret-down', style: 'color:white;font-size:12px;margin:0px 20px 0px 3px' } },

                    { xtype: 'component', autoEl: { tag: 'i', cls: 'fa fa-bell fa-fw', style: 'color:white;font-size:14px;' } },
                    { xtype: 'component', autoEl: { tag: 'i', cls: 'fa fa-caret-down', style: 'color:white;font-size:12px;margin:0px 20px 0px 3px' } },

                    { xtype: 'component', autoEl: { tag: 'i', cls: 'fa fa-user fa-fw', style: 'color:white;font-size:14px;' } },
                    { xtype: 'component', autoEl: { tag: 'i', cls: 'fa fa-caret-down', style: 'color:white;font-size:12px;margin:0px 20px 0px 3px' } },

	                //{
	                //    xtype: 'combobox',
	                //    reference: 'schoolCombo',
                    //    id: 'schoolCombo',
	                //    publishes: 'value',
	                //    fieldLabel: 'University',
	                //    labelWidth: 60,
	                //    width: 180,
	                //    forceSelection: true,
	                //    emptyText: 'Select',

	                //    bind: {
	                //        store: '{schools}'
	                //        // value: {
	                //        // 	bindTo: '{school.id}',
	                //        // 	twoWay: false
	                //        // }
	                //    },

	                //    queryMode: 'local',
	                //    displayField: 'name',
	                //    valueField: 'id'
	                //},


                    //{
                    //    xtype: 'button',
                    //    icon: null,
                    //    glyph: 33,
                    //    text: '33',
                    //    scale: 'medium',
                    //    style: {
                    //        borderWidth: '0px',
                    //        backgroundColor: '#036'
                    //    },
                    //    handler: function (button) {
                    //        var g = button.glyph;
                    //        button.setGlyph(g + 1);
                    //        button.setText(g + 1);
                    //    }
                    //},


                    //{
                    //    xtype: 'Menu'
                    //}
                ]
            },
            { xtype: 'contextcontrollerBasePanel' }
            //{ 
            //    xtype: 'container',
            //    width: '100%',
            //    layout: {
            //        type: 'hbox',
            //        align: 'middle'
            //    },
            //    items: [
            //        {
            //            xtype: 'component',
            //            id: 'app-header-logo2'
            //        },
            //        {
            //            xtype: 'component',
            //            id: 'app-header-title',
            //            html: '<div style=" margin: 0px 0px 0px 0px;" >' +  this.title + '</div>',
            //            flex: 1
            //        }
            //    ]
            //}

            //{
            //    xtype: 'container',
            //    id: 'theme-switcher-btn',
            //    margin: '0 10 0 0',
            //    layout: 'hbox',
            //    items: [
            //        {
            //            xtype: 'component',
            //            id: 'theme-switcher',
            //            cls: 'ks-theme-switcher',
            //            margin: '0 5 0 0',
            //            listeners: {
            //                scope: this,
            //                click: function (e) {
            //                    menu.showBy(this);
            //                },
            //                element: 'el'
            //            }
            //        }
            //    ]

            //}


        ];

        //if (!Ext.getCmp('options-toolbar')) {
        //    this.items.push({
        //        xtype: 'themeSwitcher'
        //    });
        //}

        this.callParent();
    }
});
