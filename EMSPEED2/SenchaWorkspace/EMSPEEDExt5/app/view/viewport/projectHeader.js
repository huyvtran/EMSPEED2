Ext.define('EMSPEEDExt5.view.viewport.projectHeader', {
    extend: 'Ext.container.Container',
    xtype: 'projectheader',
    style: { backgroundColor: '#f5f5f5' },
    height: 40,
    layout: {
        type: 'vbox'
    },

    row1: { 
        xtype: 'container',
        layout: 'hbox',
        width: '100%',
        items: [
            {
                xtype: 'label',
                text: '12345 - my project',
                style: { fontSize: '17px'},
                margin: '12 9 0 9'
            },
            {
                xtype: 'container',
                flex: 1
            },
            {
                xtype: 'label',
                text: 'Project Manager: Marc Gusmano',
                style: { fontSize: '17px'},
                margin: '12 9 0 9'
            },

            {
                xtype: 'tool',
                type: 'down',
                margin: '13 17 0 0',
                callback: function (sender) {
                    if (sender.up('container').getHeight() === 40) {
                        sender.up('container').setHeight(200);
                        sender.down('tool').setType('up');
                    }
                    else {
                        sender.up('container').setHeight(40);
                        sender.down('tool').setType('down');
                    }
                }
            }
        ]
    },

    row2: {
        xtype: 'container',
        layout: 'hbox',
        width: '100%',
        items: [
            {
                xtype: 'label',
                text: 'more....',
                style: { fontSize: '17px' },
                margin: '12 9 0 9'
            }
        ]
    },

    row3: {
        xtype: 'container',
        layout: 'hbox',
        width: '100%',
        items: [
            {
                xtype: 'label',
                text: 'more....',
                style: { fontSize: '17px' },
                margin: '12 9 0 9'
            }
        ]
    },

    initComponent: function () {
        var me = this;
        me.items = [
            me.row1,
            me.row2,
            me.row3
        ],


        this.callParent(arguments);
        this.setProjectHeaderData();
    },

    setProjectHeaderData: function () {
        this.down('container').update(project.data);
    }


    //items: [




    //    {
    //        xtype: 'label',
    //        text: '12345 - my project',
    //        style: { fontSize: '17px'},
    //        margin: '12 9 0 9'
    //    },
    //    {
    //        xtype: 'container',
    //        flex: 1
    //    },
    //    {
    //        xtype: 'label',
    //        text: 'Project Manager: Marc Gusmano',
    //        style: { fontSize: '17px'},
    //        margin: '12 9 0 9'
    //    },

    //    //{ xtype: 'component', html: '<i style="color:#003366;font-size:26px;margin-top: 7px;margin-right: 5px;" class="fa fa-chevron-circle-down fa-fw"></i>' }
    //    { 
    //        xtype: 'tool' ,
    //        type: 'down',
    //        margin: '13 17 0 0',
    //        callback: function (sender) {
    //            if (sender.getHeight() === 40) {
    //                sender.setHeight(200);
    //                sender.down('tool').setType('up');
    //            }
    //            else {
    //                sender.setHeight(40);
    //                sender.down('tool').setType('down');
    //            }
    //        }
    //    }
    //]
    //data: {projectManager: 'mjg'},
    //tpl: [
    //'<div>{projectManager}</div>',
    //''
    //]


});
