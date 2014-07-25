Ext.define('EMSPEEDExt5.view.viewport.projectNavigation', {
    extend: 'Ext.view.View',
    alias: 'widget.projectNavigation',
    id: 'projectNavigation',
    controller: 'projectNavigationController',
    title: 'Menu',
    border: false,
    dock: 'left',
    padding: '0px 0px 0px 0px ',
    margin: '0px 0px 0px 0px',
    layout: 'fit',
    style: { backgroundColor: '#ededed' },
    width: 147,

    isMenuExpanded: true,
    isRefreshed: false,

    listeners: {
        scope: 'controller',
        itemclick: 'onitemclick2'
    },

    xlisteners: {
        refresh: function (view, eOpts) {
            if (!this.isRefreshed) {
                com.endLoading();
                this.isRefreshed = true;
            }
        },

        //itemclick: function (dataview, record, item, index, e, eOpts) {
        //    this.redirectTo(record.getId());
        //},

        itemclick2: function (dataview, record, item, index, e, eOpts) {
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
            }

        }
    },
    singleSelect: true,
    itemSelector: 'li.liclass',
    emptyText: 'No data available',
    deferInitialRefresh: false,
    tpl: [
        '<div style="height: 23px;xborder-right: 1px solid #6084a8;xwidth: 101%;" ></div>',
        '<div class="emspeed-menu-container">',
        '<div style="xborder-right: 1px solid #6084a8;width: 101%;xheight: 30px; xmargin: 0px -5px 0px 0px; ">',
        '<span  class="emspeed-show-hide-menu fa fa-play fa-flip-horizontal" id="emspeed-show-hide-menu"></span>',
        '</div>',
        '<ul class="emspeed-menu" id="emspeed-menu">',
        '<tpl for=".">',
            '<li id="menu{menuItemBasePanel}"  class="liclass  ',
                '<tpl if="menuItemBasePanel==' + "'dashboardBasePanel'" + '">emspeed-item-over</tpl>',
                '<tpl if="launch==' + "true" + '">emspeed-menu-item-external</tpl>">',
                '<div class="emspeed-menu-icon emspeed-tooltip" data-tooltip="{menuItemName}"><i  class="fa fa-{menuItemIcon}"></i></div>',
            '<div class="emspeed-menu-link"><span>{menuItemName}</span></div><br class="clearfix" /></li>',

        '</tpl>',
        '</ul>',
        '</div>'
    ],
    setTheMenu: function (to) {
        com.currentTab = to;
        var theData = [];
        if (to === 'Program Management') {
            theData = project.programMenu;
        }
        else {
            theData = project.projectMenu;
        };
        var store = Ext.create('Ext.data.Store', {
            fields: ['menuItemBasePanel', 'menuItemName', 'launch', 'menuItemBaseUrl', 'menuItemIcon'],
            data: theData
        });
        this.bindStore(store);
    },

    initComponent: function () {
        com.startLoading();
        this.callParent(arguments);

        if (project.hasChildren === true) {
            this.setTheMenu("Program Management");
        }
        else {
            this.setTheMenu("Project Management");
        }
        com.endLoading();
    }

});

$(function () {
    $(document).on("click", "#emspeed-show-hide-menu", function () {
        var $this = $(this);
        var theToolbar = Ext.getCmp('projectNavigation');
        var theMenu = Ext.getCmp(theToolbar.menuToHide);

        if (theToolbar.isMenuExpanded) {
            $('#emspeed-menu').css({ width: '35px' });
            $('#emspeed-menu li .emspeed-menu-link').hide();
            theToolbar.setWidth(34);

            theToolbar.isMenuExpanded = false;

            $this.removeClass('fa-flip-horizontal');

        } else {
            $('#emspeed-menu li .emspeed-menu-link').show();
            $('#emspeed-menu').css({ width: '148px' });
            theToolbar.isMenuExpanded = true;
            theToolbar.setWidth(147);

            $this.addClass('fa-flip-horizontal');
        }

    });
});
