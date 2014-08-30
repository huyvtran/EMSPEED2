Ext.define('EMSPEEDExt5.controller.Root', {
    extend: 'Ext.app.Controller',
    alias: 'controller.Root',

    requires: [
        'Ext.window.Toast'
    ],

    stores: [
        'ProjectsStore',
        'EmployeesStore'
    ],

    onLaunch: function () {
//        console.log('onLaunch in rootController');
    },

    listen: {
        controller: {
            reporting: {
                report: 'doReportingRoot'
            }
        }
    },
    doReportingRoot: function (reportingBasePanelController) {
        console.log('doReportingRoot');
    },

    routes: {
        ':route/:projectId': {
            before: 'beforeRoute',
            action: 'onRoute'
            //conditions: {
            //    //take control of the :id & :subid parameters, make them optional but delimited by colon
            //    ':id': '(?:(?::){1}([%a-zA-Z0-9\-\_\s,]+))?',
            //    ':subid': '(?:(?::){1}([%a-zA-Z0-9\-\_\s,]+))?'
            //}
        },
        ':route': {
            action: 'onRouteNoProject'
        }
        //':route': {
        //    before: 'beforeRoute',
        //    action: 'onRoute'
        //}
    },

    config: {
        //routes: {
        //    ':route': {
        //        before: 'beforeRoute',
        //        action: 'onRoute'
        //    }
        //},
        control: {
            'tool[toast]': {
                click: 'showToast'
            }
        }
    },

    beforeRoute: function (route, projectId, action) {
        console.log('Root.js - beforeRoute');
        if (project.data === undefined) {
            var me = this;
            var siteId = com.getSiteId();
            var displayTypeId = (siteId == com.flatDisplayTypeId) ? com.flatDisplayTypeId : com.hierarchicalDisplayTypeId;
            var theParms = { "contextId": parseFloat(projectId), "site": siteId, "displayType": displayTypeId };
            console.log('Root.js - GetMasterLayout start');
            com.getData({
                service: 'UserInterfaceService',
                method: 'GetMasterLayout',
                params: theParms,
                callback: function (data) {
                    console.log('Root.js - GetMasterLayout callback');

                    if (data.project != null) {
                        project.data = data.project;
                    }
                    //if (siteId == com.portalSiteId || siteId == com.adminSiteId) {
                    project.programMenu = data.masterMenu.menus[0].menuItems;
                    project.projectMenu = data.masterMenu.menus[0].menuItems;
                    project.last5Projects = data.masterMenu.menus[1].menuItems;
                    project.gearMenu = data.masterMenu.menus[2].menuItems;
                    //}

                    //if (siteId == com.myprojectsSiteId) {
                    //    project.last5Projects = data.masterMenu.menus[0].menuItems;
                    //    project.gearMenu = data.masterMenu.menus[1].menuItems;
                    //}

                    project.feedbackItems = data.feedbackItems;
                    project.centers = data.centers;
                    project.entitlements = data.projectEntitlements;
                    project.projectDashboard = project.getProjectDashboard();
                    project.programDashboard = project.getProgramDashboard();
                    project.user = data.user;


                    //$.getJSON('/api/widgets', function (response) {
                    //    var fArray2 = response;
                    //    var arrayLength = fArray2.length;
                    //    com.parts = response;
                    //    for (var i = 0; i < arrayLength; i++) {
                    //        console.log('load... ' + s + fArray2[i].type + '.' + fArray2[i].extension);
                    //        Ext.Loader.loadScript({ url: s + fArray2[i].type + '.' + fArray2[i].extension, onLoad: function () { flag += 1; }, onError: function () { console.log('FAIL'); }, scope: this });


                    //    }
                    //});


                    var filesArray;

                    var hr = window.location.href;
                    var e = hr.indexOf("index.html");
                    var str1 = hr.substring(0, e);
                    var s = str1 + 'widgets/';
                    com.widgetLocation = s;

                    var theArray = [];
                    $.getJSON('/api/widgets', function (response) {
                        var fArray2 = response;
                        com.parts = fArray2;
                        var arrayLength = fArray2.length;

                        var flag = 0;
                        function checkFlag() {
                            if (flag < arrayLength) {
                                window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
                            } else {
                                console.log('Root.js - Viewport before');
                                me.viewport = Ext.create('EMSPEEDExt5.view.viewport.Viewport', {});
                                console.log('Root.js - Viewport after');
                                //Ext.getCmp('contextcontrollerBasePanel').setContextData(project);
                                document.getElementById('divloading').style.visibility = "hidden";
                                action.resume();
                            }
                        }
                        checkFlag();
                        for (var i = 0; i < arrayLength; i++) {
                            //console.log('load... ' + s + fArray2[i].type + '.' + fArray2[i].extension);
                            Ext.Loader.loadScript({ url: s + fArray2[i].type + '.' + fArray2[i].extension, onLoad: function () { flag += 1; }, onError: function () { console.log('FAIL'); }, scope: this });
                        }
                    });
                }
            });
        }
        else {
            console.log('NOT getting data');
            action.resume();
        }

        //child not found, stop action
        //action.stop();



        //action.resume();
    },
    onRoute: function (route, projectId) {
        console.log('Root.js - onRoute');
        console.log('Root.js - fireEvent');
        this.fireEvent('route', this, route, projectId); //handled in eastController
        this.description = route;
    },

    onRouteNoProject: function (route) {
        alert('no project');
    },


    showToast: function () {
        var me = this,
            //toastAlignTo = me.getContentPanel().header,
            //toastAlignTo = me,
            toast = me.toast;
        if (!toast) {
            me.toast = Ext.toast({
                cls: 'x-toast-light',
                closeAction: 'hide', // we plan to reuse this toast
                html: me.description,
                bodyPadding: 10,
                header: false,
                //anchor: toastAlignTo,
                //mjg maxWidth: Math.floor(toastAlignTo.getWidth() * 0.8),
                //title:'Description', // might need this if closable:true
                //closable: true, //TODO enable when styling is better
                //autoCloseDelay: 1000000,
                //anchorAlignment: 't-b',
                slideInDuration: 400,
                slideBackDuration: 1500,
                align: 't'
            });
        } else {
           //mjg  toast.maxWidth = Math.floor(toastAlignTo.getWidth() * 0.8);
            toast.update(me.description);
        }
    }



});


