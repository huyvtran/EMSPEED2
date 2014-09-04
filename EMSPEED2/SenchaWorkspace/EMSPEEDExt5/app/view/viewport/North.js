Ext.example = function () {
    var msgCt;

    function createBox(t, s) {
        // return ['<div class="msg">',
        //         '<div class="x-box-tl"><div class="x-box-tr"><div class="x-box-tc"></div></div></div>',
        //         '<div class="x-box-ml"><div class="x-box-mr"><div class="x-box-mc"><h3>', t, '</h3>', s, '</div></div></div>',
        //         '<div class="x-box-bl"><div class="x-box-br"><div class="x-box-bc"></div></div></div>',
        //         '</div>'].join('');
        return '<div class="msg ' + Ext.baseCSSPrefix + 'border-box"><h3>' + t + '</h3><p>' + s + '</p></div>';
    }
    return {
        msg: function (title, format) {
            if (!msgCt) {
                msgCt = Ext.DomHelper.insertFirst(document.body, { id: 'msg-div' }, true);
            }
            var s = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 1));
            var m = Ext.DomHelper.append(msgCt, createBox(title, s), true);
            m.hide();
            m.slideIn('t').ghost("t", { delay: 1000, remove: true });
        }
    };
}();


Ext.define('EMSPEEDExt5.view.viewport.North', {
    extend: 'Ext.Container',
    xtype: 'North',
    id: 'North',
    cls: 'north',
    height: 50,
    layout: {
        type: 'hbox'
    },
    initComponent: function () {

        var aMenu = [
            {
                xtype: 'container',
                html: '<div class="emspeed-header-menu"><div class="xemspeed-header-submenu"><ul class="submenu-section" style:"z-index:200000;"=""><li class="emspeed-menu-heading">5 Most Recent:</li><li><a href="/sites/97366/Portal.aspx">97366 - EMSPEED 1.1 testing</a></li><li><a href="/sites/97370/Portal.aspx">97370 - EMSPEED1.1 Johnny test</a></li><li><a href="/sites/97368/Portal.aspx">97368 - EMSPEED1.1 Jon Test</a></li></ul></div></div>'
            }
        ];

        this.items = [
            {
                xtype: 'container',
                width: 141, 
                style : { marginTop: '5px', marginLeft: '5px' },
                html: '<img src="resources/emspeed/slb.png">'
            },

            { xtype: 'dashboardhovermenu', margin: '16px 10px 0px 200px', text: 'Project', active: true, menuItems: aMenu },
            { xtype: 'dashboardhovermenu', margin: '16px 10px 0px 20px', text: 'Product', active: false, menuItems: aMenu },


            //{  xtype: 'contextmenudataview', margin: '6px 0px 0px 50px'  },


            //{ xtype: 'dashboardmenuitem', text: 'Products', style: { color: 'white' } },

            {
                xtype: 'container',
                height: 50,
                flex: 1,
                items: [
                ]
            },

            {
                xtype: 'component',
                margin: '17px 0px 15px 0px',
                html: '' +
                    '<a style="color:white;font-size:14px;" href="#" class="dropdown-toggle" data-toggle="dropdown">' +
                    //'<i class="fa fa-user"></i>' +
                    'Marc Gusmano' +
                    //'<b class="caret"></b>' +
                    '</a>' +
                    ''
            },

            //{
            //    xtype: 'component',
            //    margin: '0px 0px 0px 0px',
            //    html: '<div class="emspeed-header"> <div class="emspeed-header-menuProductTest">Welcome Marc Gusmano</div></div>'
            //},

            //{ xtype: 'button', ui: 'emspeedglyph-toolbar', style: { fontSize: '22px', color: 'white' }, tooltip: 'favorite', handler: function () { alert('clicked') }, glyph: 'xf006@FontAwesome' },

            
            //{
            //    xtype: 'component',
            //    margin: '15px 0px 0px 15px',
            //    html: '<a style="color:white;font-size:14px;" href="#" class="dropdown-toggle" data-toggle="dropdown"><i style="color:white;font-size:14px;" class="fa fa-envelope fa-fw"></i> Messages <span style="color:white;font-size:14px;" class="badge">2</span> <b style="color:white;font-size:14px;" class="caret"></b></a>'
            //},

            { xtype: 'container', style: { marginTop: '17px', marginLeft: '15px' }, html: '<span class="fa fa-envelope fa-fw" style="color:white;font-size:14px;" />' },
            //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '5px' }, html: '<span class="fa fa-caret-down" style="color:white;font-size:12px;" />' },

            { xtype: 'container', style: { marginTop: '17px', marginLeft: '15px' }, html: '<span class="fa fa-tasks fa-fw" style="color:white;font-size:14px;" />' },
            //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '5px' }, html: '<span class="fa fa-caret-down" style="color:white;font-size:12px;" />' },

            { xtype: 'container', style: { marginTop: '17px', marginLeft: '15px' }, html: '<span class="fa fa-bell fa-fw" style="color:white;font-size:14px;" />' },
            //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '5px' }, html: '<span class="fa fa-caret-down" style="color:white;font-size:12px;" />' },

            { xtype: 'container', style: { marginTop: '17px', marginLeft: '15px', marginRight: '15px' }, html: '<span class="fa fa-user fa-fw" style="color:white;font-size:14px;" />' },
            //{ xtype: 'container', style: { marginTop: '17px', marginLeft: '5px', marginRight: '95px' }, html: '<span class="fa fa-caret-down" style="color:white;font-size:12px;" />' },

            {
                xtype: 'gearmenudataview', margin: '0px 0px 0px 30px'
            }

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
