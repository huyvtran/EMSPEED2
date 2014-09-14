Ext.define('widget.dfx', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    //layout: 'fit',
	
	//listeners: {
	//	scope: this,
	//	afterrender: function () {
	//		Ext.create('Ext.tip.ToolTip',
	//			{
	//				target: Ext.select("#theTip"),
	//				constrainPosition: true,
	//				style: {
	//					backgroundColor: '#ffa500',
	//					color: '#222',
	//					margin: '350px 50px 50px 50px'

	//				},

	//				showDelay: 0,
	//				dismissDelay: 0,
	//				html: '<div><h2>CDP mismatch</h2> Target DfX CDP : ' + this.cdpTargetName + '</div>'
	//			}
	//		);
	//	}
	//},		
	
    initComponent: function () {
		com.startLoading();
        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',				
                    tpl: new Ext.XTemplate(
                        '<tpl for=".">',
                        '<div class="dfx">',
                        '<tpl if="dfxSummary ==' + "null" + ' || dfxSummary == ' + "undefined" + '">',
                             'Loading...',
                        '<tpl else>',
                            '<table class="dfx-table">',
                                '<thead>',
                                '<tr>',
                                    '<th>Overall DfX Score: {[this.formatDfxNumbers(values.dfxSummary.overallIndex)]}</th>',
                                    '<th style="width: 2%; border-bottom: 1px solid #FFF; background-color: #FFF;">&nbsp;</th>',
                                    '<th>Target DfX CDP</th>',
                                '</tr>',
                                '</thead>',
                                '<tr>',
                                    '<td colspan="3">',
                                        '<table class="dfx-data-grid">',
                                            '<tr>',
                                                '<td class="overall">{[this.formatDfxNumbers(values.dfxSummary.manufacturingMfgIndex)]}</td>',
                                                '<th>Manufacturing</th>',
                                                '<td class="next <tpl if="cdpSummary.manufacturingMfgIndex==' + "100" + ' || cdpSummary.manufacturingMfgOverride==' + "true" + '">next-complete</tpl>">{[this.formatDfxNumbers(values.cdpSummary.manufacturingMfgIndex)]}</td>',
                                            '</tr>',
                                            '<tr>',
                                                '<td class="overall">{[this.formatDfxNumbers(values.dfxSummary.manufacturingScIndex)]}</td>',
                                                '<th>Supply Chain </th>',
                                                '<td class="next <tpl if="cdpSummary.manufacturingScIndex==' + "100" + ' || cdpSummary.manufacturingScOverride==' + "true" + '">next-complete</tpl>">{[this.formatDfxNumbers(values.cdpSummary.manufacturingScIndex)]}</td>',
                                            '</tr>',
                                            '<tr>',
                                                '<td class="overall">{[this.formatDfxNumbers(values.dfxSummary.reliabilityIndex)]}</td>',
                                                '<th>Reliability</th>',
                                                '<td class="next <tpl if="cdpSummary.reliabilityIndex==' + "100" + ' || cdpSummary.reliabilityOverride==' + "true" + '">next-complete</tpl>">{[this.formatDfxNumbers(values.cdpSummary.reliabilityIndex)]}</td>',
                                            '</tr>',
                                            '<tr>',
                                                '<td class="overall">{[this.formatDfxNumbers(values.dfxSummary.maintainabilityIndex)]}</td>',
                                                '<th>Maintainability</th>',
                                                '<td class="next <tpl if="cdpSummary.maintainabilityIndex==' + "100" + ' || cdpSummary.maintainabilityOverride==' + "true" + '">next-complete</tpl>">{[this.formatDfxNumbers(values.cdpSummary.maintainabilityIndex)]}</td>',
                                            '</tr>',
                                        '</table>',
                                    '</td>',
                                '</tr>',
                            '</table>',
                            '<div class="cdp-readiness" style="xheight: 63px">',
                                '<tpl if="cdpSummary.cdpNextName ==' + "null" + '">',
                                    'Loading...',
                                '<tpl else>',
                                    '<div class="row"><span class="label" id="emspeed-target-pdd-cdd-label">',
                                            'Target PDD CDP: </span><span id="emspeed-target-pdd-cdd-value" class="value">{cdpSummary.cdpNextName} ({[this.getDate(values.cdpSummary.previousPlanDate)]})</span> ',
                                                '<tpl if="cdpSummary.inSync ==' + "false" + '">',
                                                    '<a href="#" title="&lt;h2&gt;CDP mismatch&lt;/h2&gt; Target DfX CDP : <strong>{cdpSummary.cdpTargetName}</strong>">',
                                                        '<i id="theTip" class="fa fa-warning emspeed-mismatch"></i>',
                                                    '</a>',
                                                '</tpl>',
                                    '</div>',
                                    '<div class="row"><span class="label">CDP Readiness:</span> <span class="value">{cdpSummary.readiness}</span></div>',
                                    '<div class="row"><span class="label">Slip:</span> <span class="value">{cdpSummary.slip}</span></div>',
                                '</tpl>',
                            '</div>',
                        '</tpl>',
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
                    )					
                }
            ]
        });
        this.callParent(arguments);
        //this.getSecondaryData();
        this.getData();
    },
	
    getData: function () {
        var me = this;
        var theUrl = com.ajaxUrl('ProjectService', 'GetCdpDfxSummary');
        var theParms = { projectId: parseFloat(com.getProjectId()) };
        var theData = {};
        $.ajax(com.ajaxOptions({ url: theUrl, data: theParms }))
        .done(function (data) {
            //dashboard.cdpDfxSummary.dfxSummary = data.dfxSummary;
            //dashboard.cdpDfxSummary.cdpSummary.maintainabilityIndex = data.cdpSummary.maintainabilityIndex;
            //dashboard.cdpDfxSummary.cdpSummary.manufacturingMfgIndex = data.cdpSummary.manufacturingMfgIndex;
            //dashboard.cdpDfxSummary.cdpSummary.manufacturingScIndex = data.cdpSummary.manufacturingScIndex;
            //dashboard.cdpDfxSummary.cdpSummary.reliabilityIndex = data.cdpSummary.reliabilityIndex;
            //dashboard.cdpDfxSummary.cdpSummary.maintainabilityOverride = data.cdpSummary.maintainabilityOverride;
            //dashboard.cdpDfxSummary.cdpSummary.manufacturingMfgOverride = data.cdpSummary.manufacturingMfgOverride;
            //dashboard.cdpDfxSummary.cdpSummary.manufacturingScOverride = data.cdpSummary.manufacturingScOverride;
            //dashboard.cdpDfxSummary.cdpSummary.reliabilityOverride = data.cdpSummary.reliabilityOverride;
            //dashboard.cdpDfxSummary.cdpSummary.cdpTargetName = data.cdpSummary.cdpTargetName;
            //  ugger;
            //debugger;
            me.items.items[0].update(data);
            me.cdpTargetName = data.cdpSummary.cdpTargetName;
            com.endLoading();
        });
    },

    getSecondaryData: function () {
        var me = this;
        var theUrl = com.ajaxUrl('ProjectService', 'GetCdpSummary');
        var theParms = { projectId: parseFloat(com.getProjectId()) };
        var theData = {};
        $.ajax(com.ajaxOptions({ url: theUrl, data: theParms }))
        .done(function (data) {
            dashboard.cdpDfxSummary.cdpSummary.cdpNextName = data.cdpNextName;
            dashboard.cdpDfxSummary.cdpSummary.previousPlanDate = data.previousPlanDate;
            dashboard.cdpDfxSummary.cdpSummary.readiness = data.readiness;
            dashboard.cdpDfxSummary.cdpSummary.slip = data.slip;
            dashboard.cdpDfxSummary.cdpSummary.inSync = data.inSync;
            me.items.items[0].update(dashboard.cdpDfxSummary);
        });
    }

});

//$(function () {
//    $(document).tooltip({
//        content: function () {
//            return $(this).attr('title');
//        }
//    });
//    $('body').on('mouseover', '#theTip', function () {
//        $("#emspeed-target-pdd-cdd-value").css({ 'backgroundColor': '#ffa500', 'border': '2px solid #ffa500' });
//    }).on('mouseout', '#theTip', function () {
//        $("#emspeed-target-pdd-cdd-value").css({ 'backgroundColor': '#ffffff', 'border': '2px solid #ffffff' });
//    });
//});


