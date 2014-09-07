Ext.define('EMSPEEDExt5.view.project.project', {
    singleton: true,
    alternateClassName: 'project',
    interactiveReporting: false,
    imagesFolder: com.appFolder + '/project' + '/resources/images/',
	errorMessage: 'One or more issues exist. Please contact L2 Support for more information.',
    getProjectDashboard: function () {
        var projectDashboard = [
	        {
	            xtype: 'portalpanel',
	            items: [
                    {
                        xtype: 'portalcolumn', columnWidth: 0.67,
                        items: [
                            { xtype: 'dashboardPortletKPI', collapsed: false, theConfig: { StartDate: null, EndDate: null, MarkerConfigSize: 4, YAxis: { unit: '1', step: 'month' } } }
                        ]
                    },
                    {
                        xtype: 'portalcolumn', columnWidth: 0.33,
                        items: [
                            { xtype: 'dashboardPortletDfX', theConfig: { title: 'DfX' } }
                        ]
                    }
	            ]
	        },
            {
                xtype: 'portalpanel',
                items: [
                    {
                        xtype: 'portalcolumn', columnWidth: 1,
                        items: [
                            { xtype: 'dashboardPortletRiskMatrix', theConfig: { title: 'Risks' } },
                            { xtype: 'dashboardPortletPMTSummary', theConfig: { title: 'PMT Summary' } }
                        ]
                    }
                ]
            }
        ];
        return projectDashboard;
    },
    getProgramDashboard: function () {
        var programDashboard = [
	        {
	            xtype: 'portalpanel',
	            items: [
                    {
                        xtype: 'portalcolumn', columnWidth: 1,
                        items: [
		                    { xtype: 'dashboardPortletRiskMatrix', theConfig: { title: 'Risks' } },
                            { xtype: 'dashboardPortletSubProjects', theConfig: { title: 'Sub Projects', Show: true, collapsed: true } }
                        ]
                    }
	            ]
	        }
        ];
        return programDashboard;
    },




    getProjectData: function () {
        var data = {
            "projectId": 97370,
            "projectName": "Ardmore Drilling Site Supply Chain (m)",
            "pddNumber": "97370",
            "level": 3,
            "isChild": true,
            "isParent": false,
            "isParentAccessible": true,
            "parentProjectId": 97368,
            "parentProjectName": "Ardmore Drilling Site Wellhead Maintenance",
            "lastModifiedBy": "jshyu",
            "lastUpdateDate": "/Date(1079416800000-0500)/",
            "timeSpanFromLastUpdate": "9 Years Ago",
            "targetCdpMilestoneId": 3,
            "targetCdpMilestoneName": "Concurrent Team Launch",
            "productGroupId": 2,
            "productGroupCode": "CLG",
            "plannedCommercializationDate": "/Date(994309200000-0500)/",
            "templateVersion": "1.15 (STS: 4.3.2.0)",
            "projectManager": "Sabina Scordamaglia",
            "productChampion": "Jonathan Guidry",
            "productMaturityTrackerWorksheetUrl": "/stature/control/loadSlbStudy?versionId=1000011035&viewName=Requirement&ignoreViewGroup=true",
            "dfxWorksheetUrl": "/stature/control/loadSlbStudy?versionId=1000016002&viewName=DfX&ignoreViewGroup=true",
            "riskRegisterWorksheetUrl": "/stature/control/loadSlbStudy?versionId=1000013001&viewName=RiskRegister&ignoreViewGroup=true",
            "teamSiteUrl": "",
            "requirementsMaturityIndex": null,
            "productMaturityIndex": null,
            "productMaturityIncrementalIndex": null,
            "riskMaturityIndex": null,
            "rollUpProductMaturityIndex": null,
            "rollUpProductMaturityIncrementalIndex": null,
            "rollUpRiskMaturityIndex": null,
            "dfxScore": null,
            "manufacturabilityMfgScore": null,
            "manufacturabilityScScore": null,
            "reliabilityScore": null,
            "maintainabilityScore": null,
            "projects": null
        };
        return data;
    },
    getProgramMenu: function () {
        var programMenu = [
            {
                "menuItemId": 1,
                "menuItemName": "Home",
                "menuItemBasePanel": "dashboardBasePanel",
                "menuItemUrl": null,
                "sequence": 1,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-home",
                "menuItemTooltip": "Home",
                "menuItems": null
            },
            {
                "menuItemId": 2,
                "menuItemName": "Reporting",
                "menuItemBasePanel": "reportingBasePanel",
                "menuItemUrl": null,
                "sequence": 2,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-reporting",
                "menuItemTooltip": "Reporting",
                "menuItems": null
            },
            {
                "menuItemId": 4,
                "menuItemName": "Manage Team",
                "menuItemBasePanel": "teamBasePanel",
                "menuItemUrl": null,
                "sequence": 4,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-manageTeam",
                "menuItemTooltip": "Manage Team",
                "menuItems": null
            },
            {
                "menuItemId": 5,
                "menuItemName": "PDD Summary",
                "menuItemBasePanel": "statureBasePanel",
                "menuItemUrl": null,
                "sequence": 5,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-pddSummary",
                "menuItemTooltip": "PDD Summary",
                "menuItems": null
            },
            {
                "menuItemId": 6,
                "menuItemName": "PDD CLMS",
                "menuItemBasePanel": "cdpBasePanel",
                "menuItemUrl": null,
                "sequence": 6,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-pddClms",
                "menuItemTooltip": "PDD CLMS",
                "menuItems": null
            },
            {
                "menuItemId": 7,
                "menuItemName": "PDD Summary",
                "menuItemBasePanel": "pddsummaryBasePanel",
                "menuItemUrl": null,
                "sequence": 7,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-snapshots",
                "menuItemTooltip": "PDD Summary",
                "menuItems": null
            },
            {
                "menuItemId": 8,
                "menuItemName": "Clone PMT",
                "menuItemBasePanel": "cloningBasePanel",
                "menuItemUrl": null,
                "sequence": 8,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-ClonePmt",
                "menuItemTooltip": "Clone PMT",
                "menuItems": null
            },
            {
                "menuItemId": 9,
                "menuItemName": "PMT",
                "menuItemBasePanel": "",
                "menuItemUrl": null,
                "sequence": 9,
                "parentId": null,
                "level": 1,
                "launch": true,
                "menuItemIcon": "Icon-pmt",
                "menuItemTooltip": "PMT",
                "menuItems": null
            },
            {
                "menuItemId": 10,
                "menuItemName": "DfX",
                "menuItemBasePanel": "",
                "menuItemUrl": null,
                "sequence": 10,
                "parentId": null,
                "level": 1,
                "launch": true,
                "menuItemIcon": "Icon-dfx",
                "menuItemTooltip": "DfX",
                "menuItems": null
            },
            {
                "menuItemId": 11,
                "menuItemName": "Team Site",
                "menuItemBasePanel": "",
                "menuItemUrl": null,
                "sequence": 11,
                "parentId": null,
                "level": 1,
                "launch": true,
                "menuItemIcon": "Icon-teamSite",
                "menuItemTooltip": "Team Site",
                "menuItems": null
            }
        ];
        return programMenu;
    },
    getProjectMenu: function () {
        var projectMenu = [
            {
                "menuItemId": 1,
                "menuItemName": "Home",
                "menuItemBasePanel": "dashboardBasePanel",
                "menuItemUrl": null,
                "sequence": 1,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-home",
                "menuItemTooltip": "Home",
                "menuItems": null
            },
            {
                "menuItemId": 2,
                "menuItemName": "Reporting",
                "menuItemBasePanel": "reportingBasePanel",
                "menuItemUrl": null,
                "sequence": 2,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-reporting",
                "menuItemTooltip": "Reporting",
                "menuItems": null
            },
            {
                "menuItemId": 4,
                "menuItemName": "Manage Team",
                "menuItemBasePanel": "teamBasePanel",
                "menuItemUrl": null,
                "sequence": 4,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-manageTeam",
                "menuItemTooltip": "Manage Team",
                "menuItems": null
            },
            {
                "menuItemId": 5,
                "menuItemName": "PDD Summary",
                "menuItemBasePanel": "statureBasePanel",
                "menuItemUrl": null,
                "sequence": 5,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-pddSummary",
                "menuItemTooltip": "PDD Summary",
                "menuItems": null
            },
            {
                "menuItemId": 6,
                "menuItemName": "PDD CLMS",
                "menuItemBasePanel": "cdpBasePanel",
                "menuItemUrl": null,
                "sequence": 6,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-pddClms",
                "menuItemTooltip": "PDD CLMS",
                "menuItems": null
            },
            {
                "menuItemId": 7,
                "menuItemName": "Snapshots",
                "menuItemBasePanel": "snapshotsBasePanel",
                "menuItemUrl": null,
                "sequence": 7,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-snapshots",
                "menuItemTooltip": "Snapshots",
                "menuItems": null
            },
            {
                "menuItemId": 8,
                "menuItemName": "Clone PMT",
                "menuItemBasePanel": "cloningBasePanel",
                "menuItemUrl": null,
                "sequence": 8,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": "Icon-ClonePmt",
                "menuItemTooltip": "Clone PMT",
                "menuItems": null
            },
            {
                "menuItemId": 9,
                "menuItemName": "PMT",
                "menuItemBasePanel": "",
                "menuItemUrl": null,
                "sequence": 9,
                "parentId": null,
                "level": 1,
                "launch": true,
                "menuItemIcon": "Icon-pmt",
                "menuItemTooltip": "PMT",
                "menuItems": null
            },
            {
                "menuItemId": 10,
                "menuItemName": "DfX",
                "menuItemBasePanel": "",
                "menuItemUrl": null,
                "sequence": 10,
                "parentId": null,
                "level": 1,
                "launch": true,
                "menuItemIcon": "Icon-dfx",
                "menuItemTooltip": "DfX",
                "menuItems": null
            },
            {
                "menuItemId": 11,
                "menuItemName": "Team Site",
                "menuItemBasePanel": "",
                "menuItemUrl": null,
                "sequence": 11,
                "parentId": null,
                "level": 1,
                "launch": true,
                "menuItemIcon": "Icon-teamSite",
                "menuItemTooltip": "Team Site",
                "menuItems": null
            }
        ];
        return projectMenu;
    },
    getLast5Projects: function () {
        var last5Projects = [
            {
                "menuItemId": 10000,
                "menuItemName": "Ardmore Drilling Site Supply Chain",
                "menuItemBasePanel": "dashboardBasePanel",
                "menuItemUrl": "97370",
                "sequence": 1,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": null,
                "menuItemTooltip": null,
                "menuItems": null
            },
            {
                "menuItemId": 10001,
                "menuItemName": "Ardmore Drilling Site Wellhead Maintenance",
                "menuItemBasePanel": "dashboardBasePanel",
                "menuItemUrl": "97368",
                "sequence": 2,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": null,
                "menuItemTooltip": null,
                "menuItems": null
            }
        ];
        return last5Projects;
    },
    getGearMenu: function () {
        var gearMenu = [
            {
                "menuItemId": 12,
                "menuItemName": "Feedback",
                "menuItemBasePanel": "",
                "menuItemUrl": "javascript:openFeedBackDialog()",
                "sequence": 1,
                "parentId": null,
                "level": 1,
                "launch": true,
                "menuItemIcon": null,
                "menuItemTooltip": null,
                "menuItems": null
            },
            {
                "menuItemId": 13,
                "menuItemName": "Help",
                "menuItemBasePanel": "",
                "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMSPEED_Revised/EMSPEED%20Support/Wiki%20Pages/Home.aspx",
                "sequence": 2,
                "parentId": null,
                "level": 1,
                "launch": true,
                "menuItemIcon": null,
                "menuItemTooltip": null,
                "menuItems": null
            },
            {
                "menuItemId": 14,
                "menuItemName": "Provision Project",
                "menuItemBasePanel": "provisionBasePanel",
                "menuItemUrl": null,
                "sequence": 3,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": null,
                "menuItemTooltip": null,
                "menuItems": null
            },
            {
                "menuItemId": 15,
                "menuItemName": "Quick Reference Guide - General",
                "menuItemBasePanel": "",
                "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMSPEED_Revised/EMSPEED%20Support/11%20Support%20Documents/EMSPEED%201.1%20Quick%20Reference%20Guide.pdf",
                "sequence": 4,
                "parentId": null,
                "level": 1,
                "launch": true,
                "menuItemIcon": null,
                "menuItemTooltip": null,
                "menuItems": null
            },
            {
                "menuItemId": 16,
                "menuItemName": "Quick Reference Guide - Reporting",
                "menuItemBasePanel": "",
                "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMSPEED_Revised/EMSPEED%20Support/11%20Support%20Documents/EMSPEED_Reporting_Quick_Reference_Guide.pdf",
                "sequence": 5,
                "parentId": null,
                "level": 1,
                "launch": true,
                "menuItemIcon": null,
                "menuItemTooltip": null,
                "menuItems": null
            },
            {
                "menuItemId": 17,
                "menuItemName": "EMSPEED Role Access",
                "menuItemBasePanel": "",
                "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMSPEED_Revised/EMSPEED%20Support/_layouts/xlviewer.aspx?id=/sites/EMSBusinessSystems/EngineeringSustaining/EMSPEED_Revised/EMSPEED%20Support/11%20Support%20Documents/EMSPEED%20Roles%20Access%20and%20Security%20Matrix.xlsx&Source=http%3A%2F%2Fteamspace%2Eslb%2Ecom%2Fsites%2FEMSBusinessSystems%2FEngineeringSustaining%2FEMSPEED_Revised%2FEMSPEED%2520Support%2F11%2520Support%2520Documents%2FForms%2FAllItems%2Easpx&DefaultItemOpen=1",
                "sequence": 6,
                "parentId": null,
                "level": 1,
                "launch": true,
                "menuItemIcon": null,
                "menuItemTooltip": null,
                "menuItems": null
            },
            {
                "menuItemId": 18,
                "menuItemName": "FAQs",
                "menuItemBasePanel": "",
                "menuItemUrl": "http://teamspace.slb.com/sites/EMSBusinessSystems/EngineeringSustaining/EMSPEED_Revised/EMSPEED%20Support/Frequently%20Asked%20Questions/Forms/AllPages.aspx",
                "sequence": 7,
                "parentId": null,
                "level": 1,
                "launch": true,
                "menuItemIcon": null,
                "menuItemTooltip": null,
                "menuItems": null
            },
            {
                "menuItemId": 19,
                "menuItemName": "Edit Team Site",
                "menuItemBasePanel": "editteamSiteBasePanel",
                "menuItemUrl": null,
                "sequence": 8,
                "parentId": null,
                "level": 1,
                "launch": false,
                "menuItemIcon": null,
                "menuItemTooltip": null,
                "menuItems": null
            }
        ];
        return gearMenu;
    }

});
