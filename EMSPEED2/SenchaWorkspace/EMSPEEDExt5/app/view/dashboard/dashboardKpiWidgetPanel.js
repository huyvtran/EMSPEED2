Ext.define('EMSPEEDExt5.view.dashboard.dashboardKpiWidgetPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboardkpiwidgetpanel',
    bodyPadding: '10 0 10 9',
    height: 110,
//    border: false,
    layout: 'hbox',

    items: [
        //{ xtype: 'button', height: 60, width: 100 },

        { xtype: 'component', margin: '0 10 0 0', width: 200,
            html: ''+
                ''+
                '<div class="panel panel-primary">' +
                '    <div class="panel-heading">' +
                '        <div class="row">' +
                '            <div class="col-xs-3">' +
                '                <i class="fa fa-comments fa-3x"></i>' +
                '            </div>' +
                '            <div class="col-xs-9 text-right">' +
                '                <div class="huge">26</div>' +
                '                <div>New Comments!</div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '    <a href="#">' +
                '        <div class="panel-footer">' +
                '            <span class="pull-left">View Details</span>' +
                '            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>' +
                '            <div class="clearfix"></div>' +
                '        </div>' +
                '     </a>' +
                ' </div>' +
                ''
        },


        {
            xtype: 'component', margin: '0 10 0 0', width: 200,
            html: '' +
               '<div class="panel panel-green">' +
               '    <div class="panel-heading">' +
               '        <div class="row">' +
               '            <div class="col-xs-3">' +
               '                <i class="fa fa-tasks fa-3x"></i>' +
               '            </div>' +
               '            <div class="col-xs-9 text-right">' +
               '                <div class="huge">12</div>' +
               '                <div>New Tasks!</div>' +
               '            </div>' +
               '        </div>' +
               '    </div>' +
               '    <a href="#">' +
               '        <div class="panel-footer">' +
               '            <span class="pull-left">View Details</span>' +
               '            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>' +
               '            <div class="clearfix"></div>' +
               '        </div>' +
               '    </a>' +
               '</div>' +
               ''
        },



        {
            xtype: 'component', margin: '0 10 0 0', width: 200,
            html: '' +

       '<div class="panel panel-yellow">' +
       '    <div class="panel-heading">' +
       '        <div class="row">' +
       '            <div class="col-xs-3">' +
       '                <i class="fa fa-shopping-cart fa-3x"></i>' +
       '            </div>' +
       '            <div class="col-xs-9 text-right">' +
       '                <div class="huge">124</div>' +
       '                <div>New Orders!</div>' +
       '            </div>' +
       '        </div>' +
       '    </div>' +
       '    <a href="#">' +
       '        <div class="panel-footer">' +
       '            <span class="pull-left">View Details</span>' +
       '            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>' +
       '            <div class="clearfix"></div>' +
       '        </div>' +
       '    </a>' +
       '</div>' +

                ''
        },

        {
            xtype: 'component', margin: '0 10 0 0', width: 200,
            html: '' +

       '<div class="panel panel-red">' +
       '    <div class="panel-heading">' +
       '        <div class="row">' +
       '            <div class="col-xs-3">' +
       '                <i class="fa fa-support fa-3x"></i>' +
       '            </div>' +
       '            <div class="col-xs-9 text-right">' +
       '                <div class="huge">13</div>' +
       '                <div>Support Tickets!</div>' +
       '            </div>' +
       '        </div>' +
       '    </div>' +
       '    <a href="#">' +
       '        <div class="panel-footer">' +
       '            <span class="pull-left">View Details</span>' +
       '            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>' +
       '            <div class="clearfix"></div>' +
       '        </div>' +
       '    </a>' +
       '</div>' +
 
                    ''
                },



    ],

    style: {
        borderBottomWidth: '1px',
        borderColor: '#e8e8e8'
    }
});
