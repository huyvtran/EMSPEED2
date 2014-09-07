Ext.define('EMSPEEDExt5.view.project.projectHeaderChildDiv', {
    extend: 'Ext.container.Container',
    xtype: 'projectheaderchilddiv',
    id: 'thisOne',
    //height: 100,

    //listeners: {
    //    afterrender: function () {
    //        var me = this;
    //        me.getEl().addCls('thisOne');
    //    }
    //},

    initComponent: function () {
        var me = this;

        me.items = [
            //{ xtype: 'component', html: me.getHtml('#ffffff', '#428bca', 'comments', '26', 'New Comments') }
            { xtype: 'component', html: '<div>hi</div>' },
            {
                xtype: 'button', text: 'show', handler: function () {
                    Ext.getCmp('theCont').show();
                    Ext.getCmp('theCont').getEl().addCls('doIt');


                }
            },

            {
                xtype: 'container',
                id: 'theCont',
                hidden: true,
                height: 0,
                listeners: {
                    afterrender: function () {
                        var me = this;
                        //me.getEl().addCls('thisOne');
                    }
                },
                items: [
                    { xtype: 'component', html: '<div>hi2</div>' },
                    { xtype: 'component', html: '<div>hi2</div>' },
                    { xtype: 'component', html: '<div>hi2</div>' },
                    { xtype: 'component', html: '<div>hi2</div>' }
                ]
            }
        ];

        me.callParent(arguments);
    },


    style_rules: [],
    constructor: function () {
        var me = this;
        me.style_rules.push('.doIt { transition: height 500ms; height: 500px; }');
        me.style_rules.push('.thisOne:hover { height: 500px;position: relative !important;}');
        me.style_rules.push('.thisOne { transform: translate3d(0, 0, 0);background: blue;height: 100px;transition: height 500ms; xoverflow: hidden; }');
        if (this.style_rules.length > 0) {
            var style = '<style type="text/css">' + this.style_rules.join("\n") + "</style>";
            $("head").append(style);
        }
        me.callParent(arguments);
    }

    //getHtml: function(color, backgroundColor, fa, number, text) {
    //    return '' +
    //            '' +
    //            '<div height="200px" style="transform: translate3d(0, 0, 0);-webkit-transition: width 1s;transition: height 1s;margin:0 10px 0 0;color:' + color + ';border-color:' + backgroundColor + ';background-color:' + backgroundColor + ';border-radius: 3px;padding:5px;">' +
    //            '<i class="fa fa-' + fa + ' fa-1x"></i>' +
    //            '&nbsp' +
    //            number +
    //            '&nbsp' +
    //            text +
    //            ' </div>' +
    //            '';
    //},






//    div {
//        width: 100px;
//height: 100px;
//background: red;
//transition: width 2s;
//}

//div:hover {
//    width: 300px;
//}


//transform: translate3d(0, 0, 0);

//tpl:    '' +
//        '<div style="' +
//        '' +
//        'width: 100px;' +
//        'xtransform: translate3d(0, 0, 0);' +
//        'transition: width 10s;' +
//        'background: blue;' +
//        '' +
//        '' +
//        '' +
//        '">' +
//        '' +
//        ''+
//        ''+
//        '{a}</div>'+
//        ''+
//        ''+
//        ''+
//        ''+
//        ''+
//        '',

//data: { a: 'hello' }


});
