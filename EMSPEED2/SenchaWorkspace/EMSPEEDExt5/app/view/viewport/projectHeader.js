Ext.define('EMSPEEDExt5.view.viewport.projectHeader', {
    extend: 'Ext.container.Container',
    xtype: 'projectheader',
    style: { backgroundColor: '#f5f5f5' },
    height: 40,
    layout: {
        type: 'hbox'
    },
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

        //{ xtype: 'component', html: '<i style="color:#003366;font-size:26px;margin-top: 7px;margin-right: 5px;" class="fa fa-chevron-circle-down fa-fw"></i>' }
        { 
            xtype: 'tool' ,
            type: 'down',
            margin: '13 17 0 0',
            callback: function (sender) {
                if (sender.getHeight() === 40) {
                    sender.setHeight(200);
                }
                else {
                    sender.setHeight(40);
                }
                //debugger;
                //alert('onClick');
            }
        }



    ]
    //data: {projectManager: 'mjg'},
    //tpl: [
    //'<div>{projectManager}</div>',
    //''
    //]


});
