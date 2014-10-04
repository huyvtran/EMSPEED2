Ext.define('EMSPEEDExt5.view.viewport.North', {
   extend: 'Ext.Container',
    xtype: 'north',
    id: 'North',
    xcls: 'north',
    width: '100%',


    layout: {
        type: 'vbox'
    },
    initComponent: function () {
        var me = this;

        var aMenu = [
            { xtype: 'component', indent: false, html: '<h1>header</h1>' },
            { xtype: 'button', indent: false, handler: function () { alert('hi'); } },
            { xtype: 'button', indent: false, handler: function () { alert('hi'); } }
            //{ xtype: 'button', handler: function () { alert('hi'); } },
            //{ xtype: 'button', handler: function () { alert('hi'); } },
        ];

        var aMenu2 = [
             {
                 xtype: 'container',
                 html: '<div class="emspeed-header-menu"><div class="xemspeed-header-submenu"><ul class="submenu-section" style:"z-index:200000;"=""><li class="emspeed-menu-heading">5 Most Recent:</li><li><a href="/sites/97366/Portal.aspx">97366 - EMSPEED 1.1 testing</a></li><li><a href="/sites/97370/Portal.aspx">97370 - EMSPEED1.1 Johnny test</a></li><li><a href="/sites/97368/Portal.aspx">97368 - EMSPEED1.1 Jon Test</a></li></ul></div></div>'
             }
        ];


        this.items = [

            {
                xtype: 'container',
                width: '100%',
                height: 0,
                layout: 'hbox',
                //cls: 'north',
                style: { backgroundColor: '#003366' },
                items: [
                    {
                        xtype: 'container',
                        width: 141,
                        style: { marginTop: '5px', marginLeft: '5px' },
                        html: '<img src="resources/emspeed/slb.png">'
                    }
                ]
            },

            {
                xtype: 'container',
                width: '100%',
                height: 45,
                layout: 'hbox',
                style: { backgroundColor: '#ffffff' },
                items: [
                    {
                        xtype: 'hovermenu',
                        listeners: {
                            selected: function (selection) {
                                var me = this;
                                alert(selection.data.val);
                            }
                        },
                        align: 'bl',
                        icon: '',
                        menuOffset: 0,
                        margin: '0px 10px 0px 300px',
                        text: 'Projects',
                        active: true,
                        menuItems: [
                            { name: '1', val: '97370 - EMSPEED1.1 Johnny test' },
                            { name: '2', val: '97366 - EMSPEED 1.1 testing' }
                        ],
                        pre: [
                            {
                                xtype: 'container',
                                html:   '<ul style="list-style:none;margin-top:10px;margin-bottom:20px;">' +
                                            '<li style="text-transform:uppercase;color: #6f6f6f;border-bottom: 1px dotted #6f6f6f;padding" 10px 5px;margin-bottom: 10px;white-space: nowrap;">5 Most Recent:</li>' +
                                        '</ul>'
                            }
                        ],
                        post: [
                            {
                                xtype: 'button',
                                //baseCls: 'iconButtonBlue',
                                margin: '10px 1px 1px 1px;',
                                text: 'All Projects',
                                handler: function () {
                                    alert('all projects');
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'hovermenu', align: 'bl', icon: '',
                        menuOffset: 0, margin: '0px 10px 0px 20px', text: 'Products', active: false, menuItems: aMenu
                    },

                    { xtype: 'container', height: 50, flex: 1, items: [] },

                    {
                        xtype: 'component',
                        margin: '14px 0px 15px 0px',
                        html: '' +
                            '<a style="color:white;font-size:14px;" href="#" class="dropdown-toggle" data-toggle="dropdown">' +
                            'Marc Gusmano' +
                            '</a>' +
                            ''
                    },


                    //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '15px', marginRight: '15px' }, html: '<span class="fa fa-bell fa-fw" style="color:white;font-size:14px;" />' },
                    //{ xtype: 'gearmenudataview', margin: '0px 0px 0px 30px' },

                    //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '15px', marginRight: '15px' }, html: '<span class="fa fa-bell fa-fw" style="color:white;font-size:14px;" />' },
                    //{ xtype: 'hovermenu', align: 'bl', menuOffset: 280, margin: '0px 10px 0px 20px', text: '', active: false, menuItems: aMenu },

                    {
                        xtype: 'hovermenu',
                        listeners: {
                            selected: function (selection) {
                                //var me = this;
                                //alert(selection.data.val);
                                //debugger;
                                //me.redirectTo('project/' + '97366' + '/' + 'angular');
                                window.location = '#project/' + '97366' + '/' + 'Angular';

                            }
                        },
                        align: 'bl',
                        menuOffset: 200,
                        icon: 'bell',
                        margin: '0px 10px 0px 20px',
                        text: '',
                        active: false,
                        menuItems: [
                            { name: '1', val: '<span class="fa fa-envelope fa-fw"></span> New ECO - Project 12345', line: true },
                            { name: '2', val: '<span class="fa fa-dollar fa-fw"></span> PO Price Change - Project 12345', line: true },
                            { name: '3', val: '<span class="fa fa-calendar fa-fw"></span> ECO Late - Project 12345', line: true },
                            { name: '4', val: '<span class="fa fa-dollar fa-fw"></span> PO Price Change - Project 12345', line: true },
                            { name: '5', val: '<span class="fa fa-envelope fa-fw"></span> New ECO - Project 98765', line: true }
                        ],
                        pre: [
                        ],
                        post: [
                        ]
                    },

                    {
                        xtype: 'hovermenu',
                        listeners: {
                            selected: function (selection) {
                                var me = this;
                                alert(selection.data.val);
                            }
                        },
                        align: 'bl',
                        menuOffset: 200,
                        icon: 'gear',
                        margin: '0px 10px 0px 0px',
                        text: '',
                        active: false,
                        menuItems: [
                            { name: '1', val: 'IT Request' },
                            { name: '2', val: 'Help' },
                            { name: '3', val: 'Quick Reference Guide - General' },
                            { name: '4', val: 'Quick Reference Guide - Reporting' },
                            { name: '5', val: 'EMSPEED Role Access' },
                            { name: '6', val: 'Administration' },
                            { name: '7', val: 'Edit Team Site' }
                        ],
                        pre: [
                        ],
                        post: [
                        ]
                    },






                    {
                        xtype: 'button', glyph: 'xf150@FontAwesome', tooltip: 'Show the Hub Bar', baseCls: 'iconButtonBlue', margin: '14px 15px 0px 15px',
                        handler: function () {
                            var me = this;
                            if (this.glyph === 'xf151@FontAwesome') {
                                this.setGlyph('xf150@FontAwesome');
                                this.setTooltip('Show the Hub Bar');
                                me.up('north').down('container').setHeight(0);
                            }
                            else {
                                this.setGlyph ('xf151@FontAwesome');
                                this.setTooltip('Hide the Hub Bar');
                                me.up('north').down('container').setHeight(50);
                            }
                            //fa-toggle-down (alias) [&#xf150;]
                            //fa-toggle-up (alias) [&#xf151;]
                        }
                    }
                ]
            },




            { xtype: 'container', width: '100%', html: '<div id="line1" style="margin: 0px 0px 0px 0px;height:3px; border: 0px #000 solid; background-color: #6084A8;"></div>' }
        ]
        this.callParent();
    }
});




            //{  xtype: 'contextmenudataview', margin: '6px 0px 0px 50px'  },
            //{ xtype: 'dashboardmenuitem', text: 'Products', style: { color: 'white' } },



            //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '15px' }, html: '<span class="fa fa-envelope fa-fw" style="color:white;font-size:14px;" />' },
            //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '5px' }, html: '<span class="fa fa-caret-down" style="color:white;font-size:12px;" />' },

            //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '15px' }, html: '<span class="fa fa-tasks fa-fw" style="color:white;font-size:14px;" />' },
            //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '5px' }, html: '<span class="fa fa-caret-down" style="color:white;font-size:12px;" />' },

            //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '5px' }, html: '<span class="fa fa-caret-down" style="color:white;font-size:12px;" />' },

            //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '15px', marginRight: '15px' }, html: '<span class="fa fa-user fa-fw" style="color:white;font-size:14px;" />' },
            //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '5px', marginRight: '95px' }, html: '<span class="fa fa-caret-down" style="color:white;font-size:12px;" />' },


//        ];

                    //{
                    //    xtype: 'component',
                    //    height: 48,
                    //    //flex: 1,
                    //    //html: '<div style="margin: 15px 0px 0px 5px;"><span style="font-family: Pictos;font-size: 28px;">=</span><span style="margin: 0px 0px 0px 20px;font-size: 26px;">LOGO HERE...</span></div>'
                    //    html: '<div style="margin: 15px 0px 0px 5px;"><span style="margin: 0px 0px 0px 20px;font-size: 26px;">LOGO HERE...</span></div>'
                    //},

                    //{ xtype: 'component', html: '<wt-test></wt-test>'},
                    //{ xtype: 'component', html: '<div style="margin-right:50px;" id="Test" ng-controller="TestController"><div wt-test></div></div>' },
                    //{ xtype: 'component', html: '<div id="Test" style="width:200px;margin-right:50px;" wt-test></div>' },

                    //{ xtype: 'component', id: 'Test', autoEl: { tag: 'div', cls: 'wt-test' } },



        //if (!Ext.getCmp('options-toolbar')) {
        //    this.items.push({
        //        xtype: 'themeSwitcher'
        //    });
        //}



//{
//    xtype: 'splitbutton',
//    text: 'Options',
//    margin: '25px 0px 0px 0px',
//    style: {
//        backgroundColor: '#003366',
//        borderColor: '#003366',
//        color: 'white', 
//        textTransform: 'uppercase',
//        fontSize: '20px',
//        backgroundImage: 'url("emspeed/pop_up_arrow.png")',
//        backgroundRepeat: 'no-repeat',
//        backgroundPosition: 'center bottom',
//        font: '300 20px/20px helvetica, arial, verdana, sans-serif'
//    },
//    // handle a click on the button itself
//    handler: function () {
//        alert("The button was clicked");
//    },
//    menu: new Ext.menu.Menu({
//        items: [
//            // these will render as dropdown menu items when the arrow is clicked:
//            { text: 'Item 1', handler: function () { alert("Item 1 clicked"); } },
//            { text: 'Item 1', handler: function () { alert("Item 1 clicked"); } },
//            { text: 'Item 1', handler: function () { alert("Item 1 clicked"); } },
//            { text: 'Item 1', handler: function () { alert("Item 1 clicked"); } },
//            '-',
//            { text: 'Item 1', handler: function () { alert("Item 1 clicked"); } },
//            { text: 'Item 2', handler: function () { alert("Item 2 clicked"); } }
//        ]
//    })
//},
