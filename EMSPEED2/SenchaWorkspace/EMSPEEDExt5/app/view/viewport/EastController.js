Ext.define('EMSPEEDExt5.view.viewport.EastController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.EastController',

    config: {
        refs: {
            center: 'Center'
        },
        projectId: null
    }, 

    listen: {
        controller: {
            Root: {
                route: 'doRoute'
            }
        }
    },
    doRoute: function (controller, route, projectId) {
        console.log('EastController.js - doRoute');
        var me = this;
        com.setProjectId(projectId);
        var navigation = me.getView();
        var store = navigation.getStore();
        var node = store.getNodeById(route);
        if (node != undefined) {
            navigation.getSelectionModel().select(node);
            navigation.getView().focusNode(node);

            var center = Ext.getCmp('Center');
            var theItems = center.items.items;
            var found = false;
            for (var i = 0; i < theItems.length; i++) {
                if (node.data.id === theItems[i].itemId) {
                    found = true;
                }
            }
            if (found === false) {
                com.startLoading();
                if (node.data.action === 'dashboard') {
                    $.getJSON('/api/dashboard/' + project.projectId + '/' + node.data.id + '/' + '1', function (response) {
                        center.add({ xtype: node.data.menuItemBasePanel, text: node.data.text, itemId: node.data.id, dashboardLayout: response });
                        center.getLayout().setActiveItem(node.data.id);
                    });
                }
                else {
                    center.add({ xtype: node.data.menuItemBasePanel, text: node.data.text, itemId: node.data.id });
                    center.getLayout().setActiveItem(node.data.id);
                }
            }
            else {
                center.getLayout().setActiveItem(node.data.id);
            }
        }
        else {
            Ext.Msg.alert(
                'Route Failure',
                'The view for ' + route + ' could not be found. You will be taken to the application\'s start',
                function () {
                    //me.redirectTo(me.getApplication().getDefaultToken());
                    me.redirectTo('Dashboard/97366');
                }
            );
        }
    },

    onItemCollapse: function (p, eOpts) {

        // West-placeholder-targetEl

        //document.getElementById("West-placeholder_hd-textEl").appendChild(element);
        //document.getElementById("West-placeholder-targetEl").appendChild(element);

        //var list = $("#West-placeholder_hd-textEl").append('<ul></ul>').find('ul');


        //var list = $("#West-placeholder-innerCt").append('<ul class="emspeed-menu" style="margin: 90px 10px 10px -20px"></ul>').find('ul');
        //for (var i = 0; i < 10; i++)
        //    list.append('<li>something</li>');


    },

    beforeNavSelectionChange: function(selModel, record, recIdx) {
        return record.isLeaf();
    },

    onNavSelectionChange: function(selModel, records) {
        var record = records[0];
        if (record && record.isLeaf()) {
//            this.redirectTo(record.getId() + '/' + this.projectId);
            this.redirectTo(record.getId() + '/' + com.getProjectId());
        }
    }
});