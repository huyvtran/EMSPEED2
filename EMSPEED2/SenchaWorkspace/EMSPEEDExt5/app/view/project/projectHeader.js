Ext.define('EMSPEEDExt5.view.project.projectHeader', {
    extend: 'Ext.container.Container',
    xtype: 'projectheader',
    style: { backgroundColor: '#f5f5f5' },
    layout: { type: 'vbox' },

    fromHeight: 40,
    toHeight: 200,
    initComponent: function () {
        var me = this;
        me.height = me.fromHeight;
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
    },

    row1: {
        xtype: 'container',
        layout: 'hbox',
        width: '100%',
        items: [
            {
                xtype: 'label',
                text: '12345 - my project',
                style: { fontSize: '17px' },
                margin: '12 9 0 9'
            },
            {
                xtype: 'container',
                flex: 1
            },
            {
                xtype: 'label',
                text: 'Project Manager: Marc Gusmano',
                style: { fontSize: '17px' },
                margin: '12 9 0 9'
            },

            {
                margin: '13 17 0 0',
                xtype: 'animatetool'
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
    }

    //style_rules: [],
    //constructor: function () {
    //    var me = this;
    //    me.style_rules.push(
    //        '@-webkit-keyframes makeBigger {' +
    //        'from {height: 40px;}' +
    //        'to {height: 100px;}' +
    //        '}' +
    //        '@-webkit-keyframes makeSmaller {' +
    //        'from {height: 100px;}' +
    //        'to {height: 40px;}' +
    //        '}' +
    //        ''
    //    );
    //    me.style_rules.push('.animateItBigger { transform: translate3d(0, 0, 0);-webkit-animation: makeBigger 250ms; }');
    //    me.style_rules.push('.animateItSmaller { transform: translate3d(0, 0, 0);-webkit-animation: makeSmaller 250ms; }');
    //    if (this.style_rules.length > 0) {
    //        var style = '<style type="text/css">' + this.style_rules.join("\n") + "</style>";
    //        $("head").append(style);
    //    }
    //    me.callParent(arguments);
    //},

});
