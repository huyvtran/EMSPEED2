Ext.define('EMSPEEDExt5.view.dashboard.dashboardKpiWidgetPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboardkpiwidgetpanel',
    bodyPadding: '10 0 10 9',
    height: 88,
    layout: 'hbox',

    items: [
        {
            xtype: 'component', margin: '0 10 0 0', width: 130,
            html: '' +
                '' +
                '<div class="panel panel-primary">' +
                '    <div class="panel-heading">' +
                '        <div class="row">' +
                '            <div class="col-xs-4">' +
                '                <i class="fa fa-comments fa-2x"></i>' +
                '            </div>' +
                '            <div class="col-xs-8 text-right">' +
                '                <div class="huge">26</div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="row">' +
                '            <div class="col-xs-12 text-left">' +
                '                <div>New Comments!</div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                ' </div>' +
                ''
        },

        {
            xtype: 'component', margin: '0 10 0 0', width: 130,
            html: '' +
                '' +
                '<div class="panel panel-green">' +
                '    <div class="panel-heading">' +
                '        <div class="row">' +
                '            <div class="col-xs-4">' +
                '                <i class="fa fa-tasks fa-2x"></i>' +
                '            </div>' +
                '            <div class="col-xs-8 text-right">' +
                '                <div class="huge">12</div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="row">' +
                '            <div class="col-xs-12 text-left">' +
                '                <div>New Tasks!</div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                ' </div>' +
                ''
        },
        {
            xtype: 'component', margin: '0 10 0 0', width: 130,
            html: '' +
                '' +
                '<div class="panel panel-yellow">' +
                '    <div class="panel-heading">' +
                '        <div class="row">' +
                '            <div class="col-xs-4">' +
                '                <i class="fa fa-shopping-cart fa-2x"></i>' +
                '            </div>' +
                '            <div class="col-xs-8 text-right">' +
                '                <div class="huge">124</div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="row">' +
                '            <div class="col-xs-12 text-left">' +
                '                <div>New Orders!</div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                ' </div>' +
                ''
        },
        {
            xtype: 'component', margin: '0 10 0 0', width: 130,
            html: '' +
                '' +
                '<div class="panel panel-red">' +
                '    <div class="panel-heading">' +
                '        <div class="row">' +
                '            <div class="col-xs-4">' +
                '                <i class="fa fa-support fa-2x"></i>' +
                '            </div>' +
                '            <div class="col-xs-8 text-right">' +
                '                <div class="huge">13</div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="row">' +
                '            <div class="col-xs-12 text-left">' +
                '                <div>Support Tickets!</div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                ' </div>' +
                ''
        },
        {
            xtype: 'component', margin: '0 10 0 0', width: 130,
            html: '' +
                '' +
                '<div class="panel panel-default">' +
                '    <div class="panel-body panel-heading">' +
                '        <div class="row">' +
                '            <div class="col-xs-4">' +
                '                <i class="fa fa-truck fa-2x"></i>' +
                '            </div>' +
                '            <div class="col-xs-8 text-right">' +
                '                <div class="huge">13</div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="row">' +
                '            <div class="col-xs-12 text-right">' +
                '                <div>New Orders</div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                ' </div>' +
                ''
        }


        //{
        //    xtype: 'component', margin: '0 10 0 0', xwidth: 130,
        //    html: '' +
        //        '' +
        //           '<div class="panel panel-default ">' +
        //           '    <div class="panel-body alert-info">' +
        //           '        <div class="col-xs-6">' +
        //           '            <i class="fa fa-truck fa-2x"></i>' +
        //           '        </div>' +
        //           '        <div class="col-xs-6 text-right">' +
        //           '            <p class="alerts-heading">343</p>' +
        //           '            <p class="alerts-text text-right">New Orders</p>' +
        //           '        </div>' +
        //           '    </div>' +
        //           '</div>' +
        //        ''
        //},



    ],

    style: {
        borderBottomWidth: '1px',
        borderColor: '#e8e8e8'
    }
});