Ext.define('widget.tpl', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    initComponent: function () {
        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    //tpl: '{a}'

                    tpl: new Ext.XTemplate(
                        '<tpl for=".">',
                        '<div class="dfx">',
						    '<div>Overall DfX Score: {[this.formatDfxNumbers(values.dfxSummary.overallIndex)]}</div>',
                        '</div>',
                        '</tpl>',
                        {
                            disableFormats: true,
                            getDate: function (d) {
                                var theDate = new Date(parseInt(d.replace('/Date(', '')));
                                return theDate.toDateString();
                            },
                            formatDfxNumbers: function (value) {
                                var parsedValue = parseFloat(value);
                                if (isNaN(parsedValue)) {
                                    return value;
                                } else {
                                    return Math.round(parsedValue) + '%';
                                }
                            }
                        }
                    ),	



                }
            ]
        });
        this.callParent(arguments);
        this.getData();
    },


    getData: function () {
        var me = this;
        var theUrl = com.ajaxUrl('ProjectService', 'GetCdpDfxSummary');
        var theParms = { projectId: parseFloat(com.getProjectId()) };
        var theData = {};
        $.ajax(com.ajaxOptions({ url: theUrl, data: theParms }))
        .done(function (data) {
            var dashboard = {};
            dashboard.cdpDfxSummary = {};
            dashboard.cdpDfxSummary.cdpSummary = {};
            dashboard.cdpDfxSummary.dfxSummary = data.dfxSummary;
            dashboard.cdpDfxSummary.cdpSummary.maintainabilityIndex = data.cdpSummary.maintainabilityIndex;
            dashboard.cdpDfxSummary.cdpSummary.manufacturingMfgIndex = data.cdpSummary.manufacturingMfgIndex;
            dashboard.cdpDfxSummary.cdpSummary.manufacturingScIndex = data.cdpSummary.manufacturingScIndex;
            dashboard.cdpDfxSummary.cdpSummary.reliabilityIndex = data.cdpSummary.reliabilityIndex;
            dashboard.cdpDfxSummary.cdpSummary.maintainabilityOverride = data.cdpSummary.maintainabilityOverride;
            dashboard.cdpDfxSummary.cdpSummary.manufacturingMfgOverride = data.cdpSummary.manufacturingMfgOverride;
            dashboard.cdpDfxSummary.cdpSummary.manufacturingScOverride = data.cdpSummary.manufacturingScOverride;
            dashboard.cdpDfxSummary.cdpSummary.reliabilityOverride = data.cdpSummary.reliabilityOverride;
            dashboard.cdpDfxSummary.cdpSummary.cdpTargetName = data.cdpSummary.cdpTargetName;
            me.down('container').update(dashboard.cdpDfxSummary);
            me.cdpTargetName = data.cdpSummary.cdpTargetName;
            com.endLoading();
        });
    },




    xgetData: function () {
        var me = this;

        var dataGetCdpDfxSummary97366 = {
            "dfxSummary": {
                "overallIndex": 10.2,
                "manufacturingMfgIndex": 10.2,
                "manufacturingScIndex": 10.2,
                "reliabilityIndex": 10.2,
                "maintainabilityIndex": 10.2
            },
            "cdpSummary": {
                "cdpNextName": "Project Request",
                "cdpTargetName": "Concurrent Team Launch",
                "inSync": false,
                "manufacturingMfgIndex": 0,
                "manufacturingMfgOverride": false,
                "manufacturingScIndex": 0,
                "manufacturingScOverride": false,
                "reliabilityIndex": 0,
                "reliabilityOverride": false,
                "maintainabilityIndex": 0,
                "maintainabilityOverride": false,
                "previousPlanDate": "/Date(1372568400000)/",
                "readiness": "0%",
                "slip": "32W"
            }
        };
        me.down('container').data = dataGetCdpDfxSummary97366 ;
    }
});