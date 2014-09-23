Ext.define('mjgApp.view.Dashboard', {
    extend: 'Ext.Container',
    xtype: 'dashboard',
    requires: [
        "Ext.data.Store"
    ],

    initialize: function () {
        var theItems = [];
        var theChild = {};

        var orientation = Ext.Viewport.getOrientation();
        var theMax = 0;
        if (orientation === 'portrait') {
            theMax = window.innerHeight;
        }
        else {
            theMax = window.innerWidth;
        }
        var theFont;
        var theFontBody;
        switch (true) {
            case (theMax < 600):
                theFont = 'f10';
                theFontBody = 'f12';
                break;
            case ((theMax >= 601) && (theMax <= 1200)):
                theFont = 'f14';
                theFontBody = 'f16';
                break;
            case ((theMax >= 1201)):
                theFont = 'f20';
                theFontBody = 'f26';
                break;
            default:
                theFont = 'f12';
                theFontBody = 'f10';
                break;
        }

        theChild = {};
        theChild.xtype = 'cover';
        theChild.flex = 1;
        theChild.itemCls = 'my-cover-item';
        theChild.id = 'coverHistory';
        theChild.selectedIndex = 2;
        theChild.itemTpl = [
            '<div style="width:100%px;height:100%;border-style:solid;border-width:1px;background-color:white;padding:3px 3px 3px 3px;">',
                '<div class="' + theFont + ' myName" xstyle="font-size:14px;font-weight:bold;color:#146BA8;font-style:italic;">{company}</div>',
                '<div class="' + theFont + ' "  xstyle="font-size:10px;font-weight:bold;color:#146BA8;">{title}</div>',
                '<div class="' + theFont + ' " xstyle="font-size:10px;font-weight:bold;color:#000000;">{tenure}</div>',
                '<div class="' + theFontBody + ' " style="margin:5px 0px 0px 0px;">{summary} </div>',
                //'<button co="{co}" name="{company}" class="more" style="font-size:10px;margin:5px 0px 0px 140px;">more</button>',
            '</div>'
        ];
        theChild.store = Ext.create("Ext.data.Store", { 
            fields: ['co', 'company', 'title', 'tenure', 'summary'],
            data: [
                { co: 'hitachi', company: 'Hitachi Consulting', title: 'Senior Manager/Architect', tenure: 'Oct 2009 - Present', summary: 'Senior Manager with Hitachi Consulting based in the Houston office. Involved in assisting and mentoring clients in the development and implementation of solutions that utilize Microsoft SharePoint related technologies including ASP.NET and HTML5.' },
                { co: 'img', company: 'The Information Management Group', title: 'Partner', tenure: 'Sept 1997- Oct 2009', summary: 'Director of Emerging Technologies, responsible for fostering an understanding of how new and emerging technologies could be utilized for IMG and its clients.  Lead Technical Trainer focusing on Microsoft Development technologies.' },
                { co: 'bismarck', company: 'The Bismarck Group', title: 'Founder', tenure: 'Mar 1995 - Sept 1997', summary: 'Chief Technology Officer, responsible for providing Client Server software integration services to high growth, information-centric organizations and for building solutions that could be sold as \'Customizable Software Products\'.' },
                { co: 'lante', company: 'Lante Corporation', title: 'Director of Consulting', tenure: 'Nov 1992 - Mar 1995', summary: 'Director of Consulting, responsible for the entire consulting organization, including all aspects of project execution, profit and loss (utilization) responsibility,  performance reviews,  recruiting,  and staffing.' },
                { co: 'andersen', company: 'Andersen Consulting', title: 'Manager', tenure: 'May 1984 - Nov 1992', summary: 'Staff Consultant and Manager in the Chicago office, spending first 4 years on a variety of medium and large systems development projects. Promoted to a Project Manager after four years and moved to role with Emerging Technologies Group.' }
            ]
        });
        theItems.push(theChild);
        this.add(theItems);
        this.callParent(arguments);
    },

    config: {
        title: null,
        layout: 'vbox'
        //theFont: null,
        //listeners: {
        //    activate: function (newActiveItem, me, oldActiveItem, eOpts) {
        //        var me = newActiveItem;
        //        //com.setTitle(me, 'Welcome Marc');
        //        try {
        //        }
        //        catch (exception) {
        //        }
        //    }
        //}
    }

});

//$(function () {
//    $('body').on('click', '.more', function () {

//        var co = $(this).attr('co');
//        //var name = $(this).attr('name');
//        var overlay = Ext.Viewport.add({ xtype: 'imagecallout', title: 'Details', src: 'resources/images/' + co + '.jpg', id: 'd'+co });
//        overlay.show();
//        overlay.remove();
//    });
//});