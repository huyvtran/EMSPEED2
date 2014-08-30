Ext.define('EMSPEEDExt5.view.viewport.North', {
    extend: 'Ext.Container',
    xtype: 'North',
    style: {
        backgroundColor: '#003366'
        //font-family: arial; font-size: 24px; margin: 0px 0px 0px 0px; background-color: #003366; color: #ffffff;

    },
//    title: 'EMSPEED 2.0',
    height: 50,
    layout: {
        type: 'hbox'
    },
    //listeners: {
    //    afterrender: function (sender, eOpts) {
    //        //var $theDiv = $('#Test');
    //        //var $injector = angular.injector(['ng', 'app']);
    //        //$injector.invoke(function ($rootScope, $compile) {
    //        //    $compile($theDiv)($rootScope);
    //        //});

    //    }
    //},

    initComponent: function() {
        //document.title = this.title;
        this.items = [
            {
                xtype: 'container',
                width: 141, 
                style : { marginTop: '5px', marginLeft: '5px' },
                html: '<img xstyle="margin-top: 5px;margin-left: 5px;" src="resources/emspeed/slb.png">'
            },

            {
                xtype: 'contextmenudataview', margin: '0px 0px 0px 50px'
            },

            {
                xtype: 'component',
                margin: '0px 0px 0px 0px',
                html: '<div class="emspeed-header"> <div class="emspeed-header-menuProductTest">Products</div></div>'
            },

            {
                xtype: 'container',
                height: 50,
                flex: 1,
                items: [


                ]
            },

            {
                xtype: 'component',
                margin: '0px 0px 0px 0px',
                html: '<div class="emspeed-header"> <div class="emspeed-header-menuProductTest">Welcome Marc Gusmano</div></div>'
            },

            { xtype: 'container', style: { marginTop: '17px', marginLeft: '15px' }, html: '<span class="fa fa-envelope fa-fw" style="color:white;font-size:14px;" />' },
            { xtype: 'container', style: { marginTop: '17px', marginLeft: '5px' }, html: '<span class="fa fa-caret-down" style="color:white;font-size:12px;" />' },

            { xtype: 'container', style: { marginTop: '17px', marginLeft: '15px' }, html: '<span class="fa fa-tasks fa-fw" style="color:white;font-size:14px;" />' },
            { xtype: 'container', style: { marginTop: '17px', marginLeft: '5px' }, html: '<span class="fa fa-caret-down" style="color:white;font-size:12px;" />' },

            { xtype: 'container', style: { marginTop: '17px', marginLeft: '15px' }, html: '<span class="fa fa-bell fa-fw" style="color:white;font-size:14px;" />' },
            { xtype: 'container', style: { marginTop: '17px', marginLeft: '5px' }, html: '<span class="fa fa-caret-down" style="color:white;font-size:12px;" />' },

            { xtype: 'container', style: { marginTop: '17px', marginLeft: '15px' }, html: '<span class="fa fa-user fa-fw" style="color:white;font-size:14px;" />' },
            { xtype: 'container', style: { marginTop: '17px', marginLeft: '5px', marginRight: '95px' }, html: '<span class="fa fa-caret-down" style="color:white;font-size:12px;" />' },

            {
                xtype: 'gearmenudataview', margin: '0px 0px 0px 0px'
            },

        ];

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

        this.callParent();
    }
});


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
