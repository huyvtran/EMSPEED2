Ext.define('Ext.overrides.dashboard.Dashboard', {
    override: 'Ext.dashboard.Dashboard',

    bodyStyle: {
        borderStyle: 'none'
    },

    applyParts: function (parts, collection) {
        var me = this;
        if (!collection) {
            collection = new Ext.util.Collection({
                decoder: Ext.Factory.part
            });
        }

        //mjg start
        var id, partString, part;
        for (id in parts) {
            partString = parts[id].type;
            //if (Ext.isString(part)) {
                //part = {
                //    type: part
                //};
                //var partString = part;

                part = {};
                part.widgetDataDef = parts[id].widgetDataDef;
                part.viewTemplate = {
                    title: partString,
                    widgetDataDef: parts[id].widgetDataDef,
                    tools: [
                        {
                            xtype: 'tool',
                            type: 'gear',
                            handler: function (event, target, panelHeader, tool) {
                                var p = panelHeader.up('panel').up('panel').up('panel').down('dashboardproperties');
                                if (p.currentPanelHeader != undefined) {
                                    p.currentPanelHeader.ownerCt.el.dom.style.borderWidth = '1px'
                                    p.currentPanelHeader.ownerCt.el.dom.style.borderColor = '#C2C2C2'
                                }
                                p.currentPanelHeader = panelHeader;
                                panelHeader.ownerCt.el.dom.style.borderWidth = '2px'
                                panelHeader.ownerCt.el.dom.style.borderColor = 'red'
                                p.setTitle('Configuration for ' + panelHeader.title.text);
                                //dashboard.dashboardPropertiesVisible = true;

                                if (p.hidden === true) {
                                    p.show();
                                }
                                var w = panelHeader.up('panel').items.items[0];
                                var theConfig = {};
                                for (var propertyName in w.widgetData) {

                                    if (Object.prototype.toString.call(w.widgetData[propertyName]) === '[object Object]') {
                                        theConfig[propertyName] = Ext.encode(w.widgetData[propertyName]);
                                    }
                                    else {
                                        theConfig[propertyName] = w.widgetData[propertyName];
                                    }
                                }
                                p.theWidget = w;
                                p.setSource(theConfig);



                                //if (p.hidden === true) {
                                //    p.setVisible(true);
                                //}
                                //else {
                                ////    p.setGrid();
                                //}

                            }
                        }
                    ],
                    items: [{
                            xclass: 'widget.' + partString,
                            widgetData: '{widgetData}'
                        }]
                }
                part.id = partString;
            //}
            //part.id = id;
            //mjg end
            part.dashboard = this;
            collection.add(part);
        }
        return collection;
    }

});
