//Ext.define('EMSPEEDExt5.view.project.projectHeader', {
//    extend: 'Ext.container.Container',
//    xtype: 'projectheader',
//    style: { backgroundColor: '#f5f5f5' },
//    //height: 40,
//    id: 'ph',
//    layout: {
//        type: 'vbox'
//    },

//    row1: { 
//        xtype: 'container',
//        layout: 'hbox',
//        width: '100%',
//        items: [
//            {
//                xtype: 'label',
//                text: '12345 - my project',
//                style: { fontSize: '17px'},
//                margin: '12 9 0 9'
//            },
//            {
//                xtype: 'container',
//                flex: 1
//            },
//            {
//                xtype: 'label',
//                text: 'Project Manager: Marc Gusmano',
//                style: { fontSize: '17px'},
//                margin: '12 9 0 9'
//            },

//            {
//                xtype: 'tool',
//                type: 'down',
//                margin: '13 17 0 0',
//                callback: function (sender) {
//                    debugger;
//                    var panel = Ext.getCmp('thePanel')
//                    if (panel.getHeight() === 1) {
//                        panel.animate({
//                            to: {
//                                height: 200,
//                                opacity: 1.0
//                            },
//                            duration: 1500
//                        });
//                        sender.down('tool').setType('up');
//                    }
//                    else {
//                        panel.animate({
//                            to: {
//                                height: 0,
//                                opacity: 1.0
//                            },
//                            duration: 1500
//                        });
//                        sender.down('tool').setType('down');

//                    }


//                    //if (Ext.getCmp('thePanel').getHeight() === 40) {
//                    //    //if (sender.up('container').getHeight() === 40) {
//                    //        //sender.up('container').setHeight(200);


//                    //    Ext.getCmp('thePanel').animate({
//                    //        to: {
//                    //            height: 200,
//                    //            opacity: 1.0
//                    //        },
//                    //        duration: 1500
//                    //        //listeners: {
//                    //        //    afteranimate: function () {
//                    //        //        log.debug('finished over animating');
//                    //        //        //me.application.ui.state.results = panel.getState();
//                    //        //    }
//                    //        //}
//                    //    });


//                    //    //Ext.getCmp('thePanel').expand(true);

//                    //    //Ext.create('Ext.fx.Anim', {
//                    //    //    target: Ext.getCmp('thePanel'),
//                    //    //    duration: 1250,
//                    //    //    //easing: 'elasticIn',
//                    //    //    from: {
//                    //    //        height: 40
//                    //    //    },
//                    //    //    to: {
//                    //    //        height: 400
//                    //    //    }
//                    //    //});


//                    //    //Ext.getCmp('ph').getEl().slideIn();

//                    //    //Ext.create('Ext.fx.Anim', {
//                    //    //    target: Ext.getCmp('ph'),
//                    //    //    duration: 250,
//                    //    //    keyframes : {
//                    //    //        '0%': {
//                    //    //            height: 40
//                    //    //        },
//                    //    //        '60%': {
//                    //    //            height: 120
//                    //    //        },
//                    //    //        '80%': {
//                    //    //        },
//                    //    //        '100%': {
//                    //    //            height: 200
//                    //    //        }
//                    //    //    },
//                    //    //    listeners: {
//                    //    //        keyframe: function(o, n) {
//                    //    //            console.log('transition:', n);
//                    //    //        }
//                    //    //    }



//                    //    //    //from: {
//                    //    //    //    height: 40
//                    //    //    //},
//                    //    //    //to: {
//                    //    //    //    height: 200
//                    //    //    //}
//                    //    //});


//                    //    sender.down('tool').setType('up');
//                    //}
//                    //else {

//                    //    //Ext.getCmp('thePanel').collapse(true);


//                    //    //Ext.get("thePanel").slideOut('t', {
//                    //    //    easing: 'easeOut',
//                    //    //    duration: 2000
//                    //    //});

//                    //    Ext.create('Ext.fx.Anim', {
//                    //        target: Ext.getCmp('thePanel'),
//                    //        duration: 250,
//                    //        //easing: 'elasticIn',
//                    //        from: {
//                    //            height: 400 
//                    //        },
//                    //        to: {
//                    //            height: 40
//                    //        }
//                    //    });


//                    //    //sender.up('container').setHeight(40);
//                    //    sender.down('tool').setType('down');
//                    //}
//                }
//            }
//        ]
//    },


////    row2: {
////        xtype: 'panel',
//////        layout: 'hbox',
////        id: 'thePanel',
////        width: '100%',
////        //collapse: true,
////        //height: 400,
////        items: [
////            {
////                xtype: 'label',
////                text: 'more....',
////                style: { fontSize: '17px' },
////                margin: '12 9 0 9'
////            }
////        ]
////    },


//    //row2: {
//    //    xtype: 'container',
//    //    layout: 'hbox',
//    //    width: '100%',
//    //    items: [
//    //        {
//    //            xtype: 'label',
//    //            text: 'more....',
//    //            style: { fontSize: '17px' },
//    //            margin: '12 9 0 9'
//    //        }
//    //    ]
//    //},

//    //row3: {
//    //    xtype: 'container',
//    //    layout: 'hbox',
//    //    width: '100%',
//    //    items: [
//    //        {
//    //            xtype: 'label',
//    //            text: 'more....',
//    //            style: { fontSize: '17px' },
//    //            margin: '12 9 0 9'
//    //        }
//    //    ]
//    //},

//    initComponent: function () {
//        var me = this;
//        me.items = [
//            me.row1,
//            me.row2,
//            me.row3
//        ],


//        this.callParent(arguments);
//        this.setProjectHeaderData();
//    },

//    setProjectHeaderData: function () {
//        this.down('container').update(project.data);
//    }


//    //onRender: function () {
//    //    alert('onRender');
//    //    var me = this;
//    //    me.callParent(arguments);
//    //}



//    //items: [




//    //    {
//    //        xtype: 'label',
//    //        text: '12345 - my project',
//    //        style: { fontSize: '17px'},
//    //        margin: '12 9 0 9'
//    //    },
//    //    {
//    //        xtype: 'container',
//    //        flex: 1
//    //    },
//    //    {
//    //        xtype: 'label',
//    //        text: 'Project Manager: Marc Gusmano',
//    //        style: { fontSize: '17px'},
//    //        margin: '12 9 0 9'
//    //    },

//    //    //{ xtype: 'component', html: '<i style="color:#003366;font-size:26px;margin-top: 7px;margin-right: 5px;" class="fa fa-chevron-circle-down fa-fw"></i>' }
//    //    { 
//    //        xtype: 'tool' ,
//    //        type: 'down',
//    //        margin: '13 17 0 0',
//    //        callback: function (sender) {
//    //            if (sender.getHeight() === 40) {
//    //                sender.setHeight(200);
//    //                sender.down('tool').setType('up');
//    //            }
//    //            else {
//    //                sender.setHeight(40);
//    //                sender.down('tool').setType('down');
//    //            }
//    //        }
//    //    }
//    //]
//    //data: {projectManager: 'mjg'},
//    //tpl: [
//    //'<div>{projectManager}</div>',
//    //''
//    //]


//});
