Ext.define('EMSPEEDExt5.view.dashboard.dashboardKpiWidgetPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboardkpiwidgetpanel',
    bodyPadding: '10 0 10 9',
    height: 50,
    layout: 'hbox',
    style: {
        borderBottomStyle: 'none'
    },

    initComponent: function () {
        var me = this;
        me.items = [
            //#5cb85c green
            //#f0ad4e yellow
            //#d9534f red
            //#ddd default


            { xtype: 'component', html: me.getHtml('#ffffff', '#428bca', 'comments', '26', 'New Comments') },
            { xtype: 'component', html: me.getHtml('#ffffff', '#5cb85c', 'tasks', '12', 'New Tasks') },
            { xtype: 'component', html: me.getHtml('#ffffff', '#f0ad4e', 'shopping-cart', '124', 'New Orders') },
            { xtype: 'component', html: me.getHtml('#ffffff', '#d9534f', 'support', '13', 'Support Tickets') },
            { xtype: 'component', html: me.getHtml('#000000', '#ddd', 'truck', '10', 'New Shipments') },





            //{
            //    xtype: 'component',
            //    html: '' +
            //        '<div class="top-content">' +
            //        '	<ul class="list-inline mini-stat">' +
            //        '		<li>' +
            //        '			<h5>NEW PO\'S <span class="stat-value stat-color-orange"><i class="fa fa-shopping-cart"></i> 30</span></h5>' +
            //        //'			<span id="mini-bar-chart1" class="mini-bar-chart"><canvas width="53" height="25" style="display: inline-block; vertical-align: top; width: 53px; height: 25px;"></canvas></span>' +
            //        '		</li>' +
            //        '		<li>' +
            //        '			<h5>ECO\'S <span class="stat-value stat-color-blue"><i class="fa fa-plus-circle"></i> 25</span></h5>' +
            //        //'			<span id="mini-bar-chart2" class="mini-bar-chart"><canvas width="53" height="25" style="display: inline-block; vertical-align: top; width: 53px; height: 25px;"></canvas></span>' +
            //        '		</li>' +
            //        '		<li>' +
            //        '			<h5>CUSTOMERS <span class="stat-value stat-color-seagreen"><i class="fa fa-plus-circle"></i> 43,748</span></h5>' +
            //        //'			<span id="mini-bar-chart3" class="mini-bar-chart"><canvas width="53" height="25" style="display: inline-block; vertical-align: top; width: 53px; height: 25px;"></canvas></span>' +
            //        '		</li>' +
            //        '	</ul>' +
            //        '</div>' +
            //        ''
            //}




        ];
        me.callParent(arguments);
    },
    getHtml: function(color, backgroundColor, fa, number, text) {
        return '' +
                '' +
                '<div style="margin:0 10px 0 0;color:' + color + ';border-color:' + backgroundColor + ';background-color:' + backgroundColor + ';border-radius: 3px;padding:5px;">' +
                '<i class="fa fa-' + fa + ' fa-1x"></i>' +
                '&nbsp' +
                number +
                '&nbsp' +
                text +
                ' </div>' +
                '';
    }

//{
//    xtype: 'component', margin: '0 10 0 0', width: 130,
//    html: '' +
//        '' +
//        '<div class="panel panel-green">' +
//        '    <div class="panel-heading">' +
//        '        <div class="row">' +
//        '            <div class="col-xs-4">' +
//        '                <i class="fa fa-tasks fa-2x"></i>' +
//        '            </div>' +
//        '            <div class="col-xs-8 text-right">' +
//        '                <div class="huge">12</div>' +
//        '            </div>' +
//        '        </div>' +
//        '        <div class="row">' +
//        '            <div class="col-xs-12 text-left">' +
//        '                <div>New Tasks!</div>' +
//        '            </div>' +
//        '        </div>' +
//        '    </div>' +
//        ' </div>' +
//        ''
//},


});