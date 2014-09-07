Ext.define('EMSPEEDExt5.view.project.projectHeaderRootDiv', {
    extend: 'Ext.container.Container',
    xtype: 'projectheaderrootdiv',
    autoEl: { tag: 'div', cls: 'rootDiv', html: ' hello' },

    style_rules: [],
    constructor: function () {
        var me = this;
        me.style_rules.push('.rootDiv:hover { height: 500px;}');
        me.style_rules.push('.rootDiv { background: green;width: 100px;height: 100px;  -webkit-transition: height 500ms; transition: height 500ms; }');
        me.style_rules.push(
            '@-webkit-keyframes bigger {' +
            'from {height: 0px;}' +
            'to {height: 100px;}' +
            //'0% {height: 100px;}' +
            //'50% {height: 200px;}' +
            //'100% {height: 400px;}' +
            '}' +
            ''
        );
        me.style_rules.push('.animateItBigger { transform: translate3d(0, 0, 0);-webkit-animation: bigger 2s; }');
        if (this.style_rules.length > 0) {
            var style = '<style type="text/css">' + this.style_rules.join("\n") + "</style>";
            $("head").append(style);
        }
        me.callParent(arguments);
    },

    listeners: {
        afterrender: function () {
            var me = this;
            //console.log(me.getEl());
            //me.getEl().id + '-innerCt'
            //Ext.getCmp('theContainer').addCls('animateIt');
            //var element = document.getElementById(me.getEl().id + '-innerCt');
            //element.classList.add('animateIt');
            me.getEl().addCls('animateItBigger');
            //me.addCls('animateIt');
        }
    }


});
