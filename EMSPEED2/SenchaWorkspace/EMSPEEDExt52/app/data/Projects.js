﻿Ext.define('EMSPEEDExt5.data.Projects', {
    requires: [
        'EMSPEEDExt5.data.Init'
    ]
}, function () {       
    Ext.ux.ajax.SimManager.register({
        'http://localhost:8095/ProjectService.svc/json/GetProjects': {
            type: 'json',
            data: [
                { projectId: 10000, projectName: "xException Project", projectManager: "Sabina Scordamaglia" },
                { projectId: 20000, projectName: "x2Exception Project", projectManager: "Sabina Scordamaglia" }
            ]
            //data: [{ "projectId": 10000, "projectName": "xException Project", "pddNumber": "10000", "level": 1, "isChild": false, "isParent": false, "isParentAccessible": false, "parentProjectId": null, "parentProjectName": null, "isAccessible": null, "lastPmtModifiedBy": "Abraham Mathew", "lastDfxModifiedBy": "Tommy Schindler", "lastUpdateDate": "\/Date(1079416800000-0500)\/", "timeSpanFromLastUpdate": "10 Years Ago", "targetCdpMilestoneId": 3, "targetCdpMilestoneName": "Concurrent Team Launch", "productGroupId": 1, "productGroupCode": "ATG", "centerId": null, "centerCode": null, "exception": false, "syncSuccessful": null, "rollUpSuccessful": null, "plannedCommercializationDate": "\/Date(994309200000-0500)\/", "templateVersion": "1.15 (STS: 4.3.2.0)", "projectManager": "Sabina Scordamaglia", "productChampion": "Jonathan Guidry", "productMaturityTrackerWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000011035&viewName=Requirement&ignoreViewGroup=true", "dfxWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000016002&viewName=DfX&ignoreViewGroup=true", "riskRegisterWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000013001&viewName=RiskRegister&ignoreViewGroup=true", "teamSiteUrl": "", "requirementsMaturityIndex": 37.502097868594383, "productMaturityIndex": 93.348699854383568, "productMaturityIncrementalIndex": 45.29525, "riskMaturityIndex": 80.695012249376163, "rollUpRiskMaturityIndex": null, "rollUpProductMaturityIndex": null, "rollUpProductMaturityIncrementalIndex": null, "dfxScore": null, "manufacturabilityMfgScore": null, "manufacturabilityScScore": null, "reliabilityScore": null, "maintainabilityScore": null, "projects": null }, { "projectId": 97366, "projectName": "EMSPEED 1.1 testing", "pddNumber": "97366", "level": 1, "isChild": false, "isParent": false, "isParentAccessible": false, "parentProjectId": null, "parentProjectName": null, "isAccessible": null, "lastPmtModifiedBy": "Johnny Huang", "lastDfxModifiedBy": "Johnny Huang", "lastUpdateDate": "\/Date(1400633886797-0500)\/", "timeSpanFromLastUpdate": "1 Day Ago", "targetCdpMilestoneId": 3, "targetCdpMilestoneName": "Concurrent Team Launch", "productGroupId": 1, "productGroupCode": "ATG", "centerId": 24, "centerCode": "BGC", "exception": false, "syncSuccessful": true, "rollUpSuccessful": null, "plannedCommercializationDate": null, "templateVersion": "Template: 1.18   (STS: 4.3.4.0, Configuration:  06-Mar-14)", "projectManager": "Marcus Gusmano", "productChampion": "Marcus Gusmano", "productMaturityTrackerWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000013001&viewName=Requirement&ignoreViewGroup=true", "dfxWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000016002&viewName=DfX&ignoreViewGroup=true", "riskRegisterWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000013001&viewName=RiskRegister&ignoreViewGroup=true", "teamSiteUrl": null, "requirementsMaturityIndex": 49.53, "productMaturityIndex": 0, "productMaturityIncrementalIndex": 22.65, "riskMaturityIndex": 15.7, "rollUpRiskMaturityIndex": null, "rollUpProductMaturityIndex": null, "rollUpProductMaturityIncrementalIndex": null, "dfxScore": null, "manufacturabilityMfgScore": null, "manufacturabilityScScore": null, "reliabilityScore": null, "maintainabilityScore": null, "projects": null }, { "projectId": 97368, "projectName": "EMSPEED1.1 Jon Test", "pddNumber": "97368", "level": 1, "isChild": false, "isParent": false, "isParentAccessible": false, "parentProjectId": null, "parentProjectName": null, "isAccessible": null, "lastPmtModifiedBy": "", "lastDfxModifiedBy": "", "lastUpdateDate": "\/Date(1400633908497-0500)\/", "timeSpanFromLastUpdate": "1 Day Ago", "targetCdpMilestoneId": 3, "targetCdpMilestoneName": "Concurrent Team Launch", "productGroupId": 2, "productGroupCode": "CLG", "centerId": 5, "centerCode": "HFE", "exception": false, "syncSuccessful": true, "rollUpSuccessful": null, "plannedCommercializationDate": null, "templateVersion": "Template: 1.19   (STS: 4.3.4.0, Configuration:  26-Mar-14)", "projectManager": "Jon Shyu", "productChampion": "Sabina Scordamaglia", "productMaturityTrackerWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000011035&viewName=Requirement&ignoreViewGroup=true", "dfxWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000016006&viewName=DfX&ignoreViewGroup=true", "riskRegisterWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000011035&viewName=RiskRegister&ignoreViewGroup=true", "teamSiteUrl": null, "requirementsMaturityIndex": 88.31, "productMaturityIndex": 0, "productMaturityIncrementalIndex": 13.04, "riskMaturityIndex": 17.17, "rollUpRiskMaturityIndex": null, "rollUpProductMaturityIndex": null, "rollUpProductMaturityIncrementalIndex": null, "dfxScore": null, "manufacturabilityMfgScore": null, "manufacturabilityScScore": null, "reliabilityScore": null, "maintainabilityScore": null, "projects": null }, { "projectId": 97370, "projectName": "EMSPEED1.1 Johnny 9737011", "pddNumber": "97370", "level": 1, "isChild": false, "isParent": false, "isParentAccessible": false, "parentProjectId": null, "parentProjectName": null, "isAccessible": null, "lastPmtModifiedBy": "Johnny Huang", "lastDfxModifiedBy": "Johnny Huang", "lastUpdateDate": "\/Date(1400633943690-0500)\/", "timeSpanFromLastUpdate": "1 Day Ago", "targetCdpMilestoneId": 5, "targetCdpMilestoneName": "Requirement & Concept Validation", "productGroupId": 13, "productGroupCode": "TSG", "centerId": 5, "centerCode": "HFE", "exception": false, "syncSuccessful": true, "rollUpSuccessful": null, "plannedCommercializationDate": null, "templateVersion": "Template: 1.19   (STS: 4.3.4.0, Configuration:  26-Mar-14)", "projectManager": "Johnny Huang", "productChampion": "Jagan Mohan", "productMaturityTrackerWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000011033&viewName=Requirement&ignoreViewGroup=true", "dfxWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000016004&viewName=DfX&ignoreViewGroup=true", "riskRegisterWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000011033&viewName=RiskRegister&ignoreViewGroup=true", "teamSiteUrl": null, "requirementsMaturityIndex": 85.3, "productMaturityIndex": 4.21, "productMaturityIncrementalIndex": 10.26, "riskMaturityIndex": 35.47, "rollUpRiskMaturityIndex": null, "rollUpProductMaturityIndex": null, "rollUpProductMaturityIncrementalIndex": null, "dfxScore": null, "manufacturabilityMfgScore": null, "manufacturabilityScScore": null, "reliabilityScore": null, "maintainabilityScore": null, "projects": null }, { "projectId": 98610, "projectName": "Intermediate Project 1 - Testing", "pddNumber": "98610", "level": 2, "isChild": true, "isParent": true, "isParentAccessible": true, "parentProjectId": 98616, "parentProjectName": "Parent Project for Automated testing", "isAccessible": null, "lastPmtModifiedBy": "MNaser3", "lastDfxModifiedBy": "", "lastUpdateDate": "\/Date(1400633886797-0500)\/", "timeSpanFromLastUpdate": "1 Day Ago", "targetCdpMilestoneId": 3, "targetCdpMilestoneName": "Concurrent Team Launch", "productGroupId": 5, "productGroupCode": "ETG", "centerId": 5, "centerCode": "HFE", "exception": false, "syncSuccessful": true, "rollUpSuccessful": true, "plannedCommercializationDate": null, "templateVersion": "Template: 1.19   (STS: 4.3.4.0, Configuration:  26-Mar-14)", "projectManager": "Sabina Scordamaglia", "productChampion": "Sabina Scordamaglia", "productMaturityTrackerWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030040&viewName=Requirement&ignoreViewGroup=true", "dfxWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030038&viewName=DfX&ignoreViewGroup=true", "riskRegisterWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030040&viewName=RiskRegister&ignoreViewGroup=true", "teamSiteUrl": "www.google.com", "requirementsMaturityIndex": 90.63, "productMaturityIndex": 18.75, "productMaturityIncrementalIndex": 31.25, "riskMaturityIndex": 45.75, "rollUpRiskMaturityIndex": null, "rollUpProductMaturityIndex": null, "rollUpProductMaturityIncrementalIndex": null, "dfxScore": null, "manufacturabilityMfgScore": null, "manufacturabilityScScore": null, "reliabilityScore": null, "maintainabilityScore": null, "projects": null }, { "projectId": 98612, "projectName": "Leaf Project - Testing", "pddNumber": "98612", "level": 3, "isChild": true, "isParent": false, "isParentAccessible": true, "parentProjectId": 98610, "parentProjectName": "Intermediate Project 1 - Testing", "isAccessible": null, "lastPmtModifiedBy": "Johnny Huang", "lastDfxModifiedBy": "", "lastUpdateDate": "\/Date(1400633886797-0500)\/", "timeSpanFromLastUpdate": "1 Day Ago", "targetCdpMilestoneId": 3, "targetCdpMilestoneName": "Concurrent Team Launch", "productGroupId": 5, "productGroupCode": "ETG", "centerId": 5, "centerCode": "HFE", "exception": false, "syncSuccessful": true, "rollUpSuccessful": true, "plannedCommercializationDate": null, "templateVersion": "Template: 1.19   (STS: 4.3.4.0, Configuration:  26-Mar-14)", "projectManager": "Sabina Scordamaglia", "productChampion": "Rakesh Narayan Lal", "productMaturityTrackerWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030048&viewName=Requirement&ignoreViewGroup=true", "dfxWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030046&viewName=DfX&ignoreViewGroup=true", "riskRegisterWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030048&viewName=RiskRegister&ignoreViewGroup=true", "teamSiteUrl": "www.google.com", "requirementsMaturityIndex": 75, "productMaturityIndex": 40, "productMaturityIncrementalIndex": 60, "riskMaturityIndex": 67.2, "rollUpRiskMaturityIndex": null, "rollUpProductMaturityIndex": null, "rollUpProductMaturityIncrementalIndex": null, "dfxScore": null, "manufacturabilityMfgScore": null, "manufacturabilityScScore": null, "reliabilityScore": null, "maintainabilityScore": null, "projects": null }, { "projectId": 98614, "projectName": "Intermediate Project 2 - Testing", "pddNumber": "98614", "level": 2, "isChild": true, "isParent": false, "isParentAccessible": true, "parentProjectId": 98616, "parentProjectName": "Parent Project for Automated testing", "isAccessible": null, "lastPmtModifiedBy": "Johnny Huang", "lastDfxModifiedBy": "", "lastUpdateDate": "\/Date(1400633886797-0500)\/", "timeSpanFromLastUpdate": "1 Day Ago", "targetCdpMilestoneId": 3, "targetCdpMilestoneName": "Concurrent Team Launch", "productGroupId": 5, "productGroupCode": "ETG", "centerId": 5, "centerCode": "HFE", "exception": false, "syncSuccessful": true, "rollUpSuccessful": true, "plannedCommercializationDate": null, "templateVersion": "Template: 1.19   (STS: 4.3.4.0, Configuration:  26-Mar-14)", "projectManager": "Sabina Scordamaglia", "productChampion": "Rakesh Narayan Lal", "productMaturityTrackerWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030044&viewName=Requirement&ignoreViewGroup=true", "dfxWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030042&viewName=DfX&ignoreViewGroup=true", "riskRegisterWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030044&viewName=RiskRegister&ignoreViewGroup=true", "teamSiteUrl": "www.google.com", "requirementsMaturityIndex": 95.32, "productMaturityIndex": 0, "productMaturityIncrementalIndex": 0, "riskMaturityIndex": 22.5, "rollUpRiskMaturityIndex": null, "rollUpProductMaturityIndex": null, "rollUpProductMaturityIncrementalIndex": null, "dfxScore": null, "manufacturabilityMfgScore": null, "manufacturabilityScScore": null, "reliabilityScore": null, "maintainabilityScore": null, "projects": null }, { "projectId": 98616, "projectName": "Parent Project for Automated testing", "pddNumber": "98616", "level": 1, "isChild": false, "isParent": true, "isParentAccessible": false, "parentProjectId": null, "parentProjectName": null, "isAccessible": null, "lastPmtModifiedBy": "Sabina Scordamaglia", "lastDfxModifiedBy": "MNaser3", "lastUpdateDate": "\/Date(1400633965187-0500)\/", "timeSpanFromLastUpdate": "1 Day Ago", "targetCdpMilestoneId": 3, "targetCdpMilestoneName": "Concurrent Team Launch", "productGroupId": 5, "productGroupCode": "ETG", "centerId": 5, "centerCode": "HFE", "exception": false, "syncSuccessful": true, "rollUpSuccessful": true, "plannedCommercializationDate": null, "templateVersion": "Template: 1.19   (STS: 4.3.4.0, Configuration:  26-Mar-14)", "projectManager": "Sabina Scordamaglia", "productChampion": "Sabina Scordamaglia", "productMaturityTrackerWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030037&viewName=Requirement&ignoreViewGroup=true", "dfxWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030034&viewName=DfX&ignoreViewGroup=true", "riskRegisterWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030037&viewName=RiskRegister&ignoreViewGroup=true", "teamSiteUrl": "www.google.com", "requirementsMaturityIndex": 82.5, "productMaturityIndex": 0, "productMaturityIncrementalIndex": 0, "riskMaturityIndex": 30.75, "rollUpRiskMaturityIndex": null, "rollUpProductMaturityIndex": null, "rollUpProductMaturityIncrementalIndex": null, "dfxScore": null, "manufacturabilityMfgScore": null, "manufacturabilityScScore": null, "reliabilityScore": null, "maintainabilityScore": null, "projects": null }, { "projectId": 98626, "projectName": "Another Test", "pddNumber": "98626", "level": 2, "isChild": true, "isParent": false, "isParentAccessible": true, "parentProjectId": 98616, "parentProjectName": "Parent Project for Automated testing", "isAccessible": null, "lastPmtModifiedBy": "Johnny Huang", "lastDfxModifiedBy": "Johnny Huang", "lastUpdateDate": "\/Date(1400633972173-0500)\/", "timeSpanFromLastUpdate": "1 Day Ago", "targetCdpMilestoneId": 3, "targetCdpMilestoneName": "Concurrent Team Launch", "productGroupId": 9, "productGroupCode": "PSG", "centerId": 5, "centerCode": "HFE", "exception": false, "syncSuccessful": true, "rollUpSuccessful": true, "plannedCommercializationDate": null, "templateVersion": "Template: 1.19   (STS: 4.3.4.0, Configuration:  26-Mar-14)", "projectManager": "Sabina Scordamaglia", "productChampion": "Rakesh Narayan Lal", "productMaturityTrackerWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030052&viewName=Requirement&ignoreViewGroup=true", "dfxWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030050&viewName=DfX&ignoreViewGroup=true", "riskRegisterWorksheetUrl": "\/stature\/control\/loadSlbStudy?versionId=1000030052&viewName=RiskRegister&ignoreViewGroup=true", "teamSiteUrl": "www.google.com", "requirementsMaturityIndex": 63.89, "productMaturityIndex": 22.23, "productMaturityIncrementalIndex": 22.23, "riskMaturityIndex": 18.67, "rollUpRiskMaturityIndex": null, "rollUpProductMaturityIndex": null, "rollUpProductMaturityIncrementalIndex": null, "dfxScore": null, "manufacturabilityMfgScore": null, "manufacturabilityScScore": null, "reliabilityScore": null, "maintainabilityScore": null, "projects": null }]
        }
    });
});
