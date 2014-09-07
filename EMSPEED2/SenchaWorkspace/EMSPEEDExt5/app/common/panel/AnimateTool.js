Ext.define('EMSPEEDExt5.common.panel.AnimateTool', {
    extend: 'Ext.panel.Tool',
    xtype: 'animatetool',

    type: 'down',
    callback: function (sender) {
        if (sender.down('tool').type === 'down') {
            sender.down('tool').setType('up');
            var panel = sender.up('container');
            var panelEl = panel.getEl();
            var panelElDom = panel.getEl().dom;
            panelElDom.addEventListener('webkitAnimationEnd', function () {
                panel.setHeight(parseInt(panel.toHeight));
                panelEl.addCls('x-docked');
                panelEl.removeCls('animateItBigger');
            }, false);
            panelEl.removeCls('x-docked');
            document.getElementById("Center-body").style["top"] = "0px";
            document.getElementById(panelEl.id + '-innerCt').style["height"] = panel.toHeight + 'px';
            panelElDom.classList.add('animateItBigger');
        }
        else {
            sender.down('tool').setType('down');
            var panel = sender.up('container');
            var panelEl = panel.getEl();
            var panelElDom = panel.getEl().dom;
            panelElDom.addEventListener('webkitAnimationEnd', function () {
                panel.setHeight(parseInt(panel.fromHeight));
                panelEl.addCls('x-docked');
                panelEl.removeCls('animateItSmaller');
            }, false);
            panelEl.removeCls('x-docked');
            var centerBody = document.getElementById("Center-body");
            centerBody.style["top"] = "0px";
            var newHeight = centerBody.clientHeight + (panel.toHeight - panel.fromHeight);
            centerBody.style.height = newHeight + 'px';
            panelElDom.classList.add('animateItSmaller');
        }
    }

});