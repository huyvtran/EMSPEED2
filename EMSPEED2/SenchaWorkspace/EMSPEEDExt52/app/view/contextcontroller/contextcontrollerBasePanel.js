function getMyProjects() {
    var menuItemMyProjects = 'myprojectsBasePanel';
    var theItems = Ext.getCmp('projectApplication').items.items;
    var found = false;
    for (var i = 0; i < theItems.length; i++) {
        if (menuItemMyProjects === theItems[i].xtype) {
            found = true;
        }
    }
    if (found === false) {
        Ext.getCmp('projectApplication').add({ xtype: menuItemMyProjects });
    }

    if (document.getElementById("teamSite") != null) {
        document.getElementById("teamSite").style.display = 'none';
    }

    Ext.getCmp('projectApplication').setActivePanel(menuItemMyProjects);
};

function getPopupEdit(panel) {
    var win = Ext.create('EMSPEED.' + panel + '.view.' + panel + 'BasePanel', {});
    win.show();
};

Ext.define('EMSPEEDExt5.view.contextcontroller.contextcontrollerBasePanel', {
    extend: 'Ext.container.Container',
    alias: 'widget.contextcontrollerBasePanel',
    id: 'contextcontrollerBasePanel',
    cls: 'emspeed-header',
    
    setContextData: function (project) {
        Ext.getCmp('emspeed-header-menu').getStore().loadData(project.last5Projects);
        Ext.getCmp('emspeed-gear').getStore().loadData(project.gearMenu);
        Ext.getCmp('auth-user').update('Welcome ' + project.user.preferredName);
    },


    initComponent: function () {
        this.items = [
                {
                    xtype: 'container', layout: 'fit', id: 'identity', cls: 'identity',
                    //html: '<img id="image-1016" src="/resources/images/emspeed/madEMSPEED.jpg">'
                    html: '<img src="resources/emspeed/emspeed.png">'
                },
                {
                    xtype: 'dataview',
                    id: 'emspeed-header-menu',
                    emptyText: 'No data available',
                    margin: '0px 0px 0px 183px',
                    itemSelector: 'aa',
                    deferInitialRefresh: false,
                    store: Ext.create('Ext.data.Store', {
                        fields: ['menuItemName', 'menuItemUrl']
                    }),
                    tpl: [
                        '<div class="emspeed-header-menu">Projects',
                            '<div class="emspeed-header-submenu"><img src="resources/emspeed/pop_up_arrow.png" />',
                                    '<ul class="submenu-section">',
                                        '<li class="emspeed-menu-heading">5 Most Recent:</li>',
                                        '<tpl for=".">',
                                            '<li><a href="/sites/{menuItemUrl}/Portal.aspx">{menuItemUrl} - {menuItemName}</a></li>',
                                        '</tpl>',
                                    '</ul>',
                                    '<ul class="submenu-section emspeed-text-bold">',
                                        '<li><a href="/Portal.aspx" >My Projects</a></li>',
                                    '</ul>',
                            '</div> ',
                        '</div> '
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'fit',
                    id: 'auth-user',
                    cls: 'auth-user'
                },
                {
                    xtype: 'dataview',
                    id: 'emspeed-gear',
                    itemSelector: 'aa',
                    emptyText: 'No data available',
                    deferInitialRefresh: true,
                    store: Ext.create('Ext.data.Store', {
                        fields: ['menuItemName', 'menuItemUrl']
                    }),
                    tpl: [
                        '<div class="emspeed-gear">',
                            '<ul id="gears">',
                                '<li class="gear-icon" id="gear-icon">',
                                   //'<a href="#"><i class="fa fa-cog emspeed-show-gear-menu emspeed-icon-size"></i></a>',
                                   '<a href="#"><span style="font-family: Pictos;font-size: 24px;">*</span></a>',
                                    '<div class="gears-submenu-container"><img src="resources/emspeed/pop_up_arrow.png" />',
                                    '<ul class="gears-submenu">',
                                        '<tpl for=".">',
                                           '<tpl if="menuItemName==' + "'Edit Team Site'" + '">',
                                                '<li><a id="teamSite" style="display:block;" href="#" onclick=getPopupEdit("editteamsite")>{menuItemName}</a></li>',
                                            '<tpl else>',
                                                '<tpl if="menuItemName==' + "'IT Request'" + '">',
                                                    '<li><a id="feedback" style="display:block;" href="#" onclick=getPopupEdit("feedback")>{menuItemName}</a></li>',
                                                '<tpl else>',
                                                    '<tpl if="menuItemName==' + "'Administration'" + '">',
                                                        '<li><a target="_blank" href="' + com.siteRoot + '{menuItemUrl}">{menuItemName}</a></li>',
                                                    '<tpl else>',
                                                        '<li><a target="_blank" href="{menuItemUrl}">{menuItemName}</a></li>',
                                                    '</tpl>',
                                                '</tpl>',
                                            '</tpl>',
                                        '</tpl>',
                                    '</ul>',
                                    '</div>',
                                '</li>',
                            '</ul>',
                        '</div>'
                    ]
                }
        ];
        this.callParent(arguments);

        //var project = {};
        //project.last5Projects = [{ "menuItemId": 10000, "menuItemName": "Another Test", "menuItemBasePanel": "dashboardBasePanel", "menuItemUrl": "98626", "sequence": 1, "parentId": null, "level": 1, "launch": false, "launchFormat": null, "menuItemIcon": null, "menuItemTooltip": null, "menuItems": null }, { "menuItemId": 10001, "menuItemName": "EMSPEED1.1 Jon Test", "menuItemBasePanel": "dashboardBasePanel", "menuItemUrl": "97368", "sequence": 2, "parentId": null, "level": 1, "launch": false, "launchFormat": null, "menuItemIcon": null, "menuItemTooltip": null, "menuItems": null }, { "menuItemId": 10002, "menuItemName": "EMSPEED1.1 Johnny 9737011", "menuItemBasePanel": "dashboardBasePanel", "menuItemUrl": "97370", "sequence": 3, "parentId": null, "level": 1, "launch": false, "launchFormat": null, "menuItemIcon": null, "menuItemTooltip": null, "menuItems": null }];
        //project.gearMenu = [{ "menuItemId": 13, "menuItemName": "IT Request", "menuItemBasePanel": "feedbackBasePanel", "menuItemUrl": null, "sequence": 1, "parentId": null, "level": 1, "launch": true, "launchFormat": "Modal", "menuItemIcon": null, "menuItemTooltip": null, "menuItems": null }, { "menuItemId": 14, "menuItemName": "Help", "menuItemBasePanel": "", "menuItemUrl": "https://wiki.slb.com/display/EMSPEEDDOC/EMSPEED+Documentation+Home", "sequence": 2, "parentId": null, "level": 1, "launch": true, "launchFormat": "Default", "menuItemIcon": null, "menuItemTooltip": null, "menuItems": null }, { "menuItemId": 15, "menuItemName": "Quick Reference Guide - General", "menuItemBasePanel": "", "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMS…20Support/11%20Support%20Documents/EMSPEED%20Quick%20Reference%20Guide.pdf", "sequence": 3, "parentId": null, "level": 1, "launch": true, "launchFormat": "Default", "menuItemIcon": null, "menuItemTooltip": null, "menuItems": null }, { "menuItemId": 16, "menuItemName": "Quick Reference Guide - Reporting", "menuItemBasePanel": "", "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMS…%20Support%20Documents/EMSPEED%20Reporting%20Quick%20Reference%20Guide.pdf", "sequence": 4, "parentId": null, "level": 1, "launch": true, "launchFormat": "Default", "menuItemIcon": null, "menuItemTooltip": null, "menuItems": null }, { "menuItemId": 17, "menuItemName": "EMSPEED Role Access", "menuItemBasePanel": "", "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMS…2F11%2520Support%2520Documents%2FForms%2FAllItems%2Easpx&DefaultItemOpen=1", "sequence": 5, "parentId": null, "level": 1, "launch": true, "launchFormat": "Default", "menuItemIcon": null, "menuItemTooltip": null, "menuItems": null }, { "menuItemId": 55, "menuItemName": "FAQs", "menuItemBasePanel": "", "menuItemUrl": "https://wiki.slb.com/display/EMSPEEDDOC/EMSPEED+FAQs", "sequence": 5, "parentId": null, "level": 1, "launch": true, "launchFormat": "Default", "menuItemIcon": null, "menuItemTooltip": "FAQs", "menuItems": null }, { "menuItemId": 57, "menuItemName": "How To's", "menuItemBasePanel": "", "menuItemUrl": "https://wiki.slb.com/pages/viewpage.action?pageId=21663125", "sequence": 6, "parentId": null, "level": 1, "launch": true, "launchFormat": "Default", "menuItemIcon": null, "menuItemTooltip": "How To's", "menuItems": null }, { "menuItemId": 59, "menuItemName": "EMSPEED Nuances", "menuItemBasePanel": "", "menuItemUrl": "https://wiki.slb.com/display/EMSPEEDDOC/EMSPEED+Nuances", "sequence": 7, "parentId": null, "level": 1, "launch": true, "launchFormat": "Default", "menuItemIcon": null, "menuItemTooltip": "EMSPEED Nuances", "menuItems": null }];
        //project.user = {};
        //project.user.preferredName = "Marc Gusmano";
        //this.setContextData(project);
    }
});


$(function () {
    $("body").on("click", "#emspeed-fullscreen", function () {
        var theToolbar = Ext.getCmp('menuHider'),
            slbHeader = Ext.get('slb-header');
        var theMenu = Ext.getCmp(theToolbar.menuToHide);

        if (theToolbar.menuHidder) {
            $('#emspeed-menu li span').hide();
            theMenu.setWidth(50);
            theToolbar.menuHidder = false;
        } else {
            $('#emspeed-menu li span').show();
            theMenu.setWidth(147); 
            theToolbar.menuHidder = true;
        }
    });
});


