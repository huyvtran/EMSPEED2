Ext.define('EMSPEEDExt5.view.viewport.projectNavigationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projectNavigationController',

    listen: {
        controller: {
            Root: {
                route: 'doRoute'
            }
        }
    },

    doRoute: function (controller, route) {
        alert(route);
        //var refs = this.getReferences();
        //var store = refs.projectNavigation.getStore();
        //var r = store.findRecord('menuItemName', route);
        //debugger;
    },

    onitemclick: function (dataview, record, item, index, e, eOpts) {
        this.redirectTo(record.data.menuItemName);
    },

    onitemclick2: function (dataview, record, item, index, e, eOpts) {
        var $elm = $('#emspeed-menu .emspeed-item-over');
        record.raw = record.data;
        if (record.raw.launch === true) {
            if (record.raw.launchFormat === 'Stature') {
                if (project.entitlements.allowStature) {

                    if (typeof ALLOW_CHROME === "undefined") {
                        if (!Ext.isIE) {
                            launchDetailPanel = false;
                            var newMsg = '<span>' + record.raw.menuItemName + ' is only available using Internet Explorer as your browser.  If you wish to use the ' + record.raw.menuItemName + ' feature, then please close your current browser and return using Internet Explorer.</span>';
                            Ext.Msg.show({
                                title: 'Incompatible Browser',
                                msg: newMsg,
                                buttons: Ext.MessageBox.OK,
                                fn: Ext.emptyFn,
                                closable: false,
                                icon: Ext.Msg.INFO
                            });
                            return;
                        }
                    }
                    //else {
                    var num = new Date().getTime() + 'test';
                    var height = screen.height - 100;
                    var width = screen.width - 50;
                    var win = window.open('LoadingPage.aspx?type=' + record.raw.menuItemName, num, "left=0,top=0,height=" + height + ",width=" + width + ",resizable=yes");
                    //}
                }
                else {
                    Ext.MessageBox.confirm(
                    'Submit Ticket?',
                    'You are a stakeholder in this project but currently do not have access to it.  Would you like to submit a ticket requesting access to this project?  Click YES to submit a ticket.  Click NO to do nothing',
                    function (selection) {
                        if (selection == 'yes') {
                            com.startLoading('Creating Ticket');
                            var feedbackType = 'Bug/Error';
                            var urgency = 'Item2High';
                            var impact = 'Item4MinorLocalized';
                            var description = 'Add user ' + project.user.firstName + ' ' + project.user.lastName + ' (' + project.user.alias + ') as a stakeholder to project ' + project.projectId + ' in Stature.';
                            var theUrl = com.ajaxUrl('TicketService', 'CreateTicket');
                            var theParms = { ticketRequest: { "feedbackType": feedbackType, "urgency": urgency, "impact": impact, "description": description } };
                            $.ajax(com.ajaxOptions({
                                url: theUrl,
                                data: theParms,
                                dataType: 'void'
                            }))
                            .done(function (data) {
                                com.endLoading();
                                var newMsg = 'Your ticket has been submitted.';
                                Ext.Msg.show({
                                    title: 'Ticket Submitted',
                                    msg: newMsg,
                                    buttons: Ext.MessageBox.OK,
                                    fn: Ext.emptyFn,
                                    closable: false,
                                    icon: Ext.Msg.INFO
                                });

                            });
                        }
                    }, this);

                }
            }
            else {
                window.open(record.raw.menuItemUrl);
            }
        }
        else {
            $($elm).removeClass('emspeed-item-over');
            item.className = 'liclass emspeed-item-over';
            document.title = project.projectId + " " + "EMSPEED" + " " + record.data.menuItemName;

            var center = Ext.getCmp('Center');
            //var theItems = Ext.getCmp('projectApplication').items.items;
            var theItems = center.items.items;
            var found = false;
            for (var i = 0; i < theItems.length; i++) {
                if (record.data.menuItemBasePanel === theItems[i].xtype) {
                    found = true;
                }
            }
            if (found === false) {
                //Ext.getCmp('projectApplication').add({ xtype: record.data.menuItemBasePanel });
                center.add({ xtype: record.data.menuItemBasePanel });
            }

            //Ext.getCmp('projectApplication').setActivePanel(record.data.menuItemBasePanel);
            center.getLayout().setActiveItem(record.data.menuItemBasePanel);
            this.redirectTo(record.data.menuItemName);
        }

    }



 });