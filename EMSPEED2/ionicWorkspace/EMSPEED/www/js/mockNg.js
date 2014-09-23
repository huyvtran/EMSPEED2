angular.module('ionicApp')
.run(["$httpBackend", function ($httpBackend) {

    //$httpBackend.whenGET(/^\/templates\/[\w]+$/).passThrough();


    

    $httpBackend.whenGET('templates/carousel.html').passThrough();
    $httpBackend.whenGET('templates/companies.html').passThrough();
    $httpBackend.whenGET('templates/technical.html').passThrough();
    $httpBackend.whenGET('templates/contact.html').passThrough();
    $httpBackend.whenGET('templates/accomplishments.html').passThrough();
    $httpBackend.whenGET('templates/projects.html').passThrough();
    $httpBackend.whenGET('templates/project.html').passThrough();
    $httpBackend.whenGET('templates/summary.html').passThrough();
    $httpBackend.whenGET('templates/deviceOrientation-source.html').passThrough();
    $httpBackend.whenGET('templates/orientation.html').passThrough();
    $httpBackend.whenGET('templates/tasks.html').passThrough();
    $httpBackend.whenGET('templates/new.html').passThrough();
    $httpBackend.whenGET('templates/alerts.html').passThrough();
    $httpBackend.whenGET('templates/home.html').passThrough();
    $httpBackend.whenGET('templates/menu.html').passThrough();
    $httpBackend.whenGET('templates/tabs.html').passThrough();
    $httpBackend.whenGET('weather.html').passThrough();




    //Major Midwest US Energy Company - Exelon Corporation
    //March 2009 - October 2009
    //Architected and led the development of a Site Ownership web part to gather site information from site administrators across SharePoint sites into a Central site directory.  This solution was implemented as a web part written utilizing Visual Studio 2008 and C#, and utilized the SharePoint Object Model to create a dynamic Site Ownership form from a view defined in the SharePoint site directory list - this allowed for dynamic creation of a form that displays any fields an administrator chooses to expose.  The web part also utilizes the SharePoint object model to allow for editing of the Site Directory from external SharePoint sites with no additional security needing to be applied.
    //Designed and constructed an Advanced Query solution that used the SharePoint Search object model to query against an Oracle database that utilized Business Data Services for its indexing.  The solution was implemented as a web part built with Microsoft .NET, AJAX and JavaScript to provide for an enhanced user experience, and displayed the returned results in a SharePoint Ã¢â‚¬ËœSPGridView, that provided for real time sorting and paging.  the Web Part was written utilizing Visual Studio 2008 and C#.



//Midwest US Tool Manufacturer
//October 2008 - March 2009
//SharePoint 2007, Visual Studio 2008, Microsoft .NET Framework 3.5, C#


//Argonne National Lab
//March 2008 - October 2008
//Architected and implemented the SharePoint components of Argonne National Labs next-generation Emergency Management software and tools, called Ã¢â‚¬ËœEMToolsÃ¢â‚¬â„¢ (http://www.dis.anl.gov/pubs/62348.pdf). This application included a Ã¢â‚¬Ëœ1-clickÃ¢â‚¬â„¢ installation, which automatically installed all parts of a SharePoint Solution; from creating the IIS Web Site, building the SharePoint Web Application, creating the Site Collection and Root Site based on a custom template, and adding user permissions. Also architected and implemented the back-end SharePoint / .NET custom extensibility components.
//SharePoint 2007, Visual Studio 2008, Microsoft .NET Framework 3.5, C#


//Midwest US Microsoft Solution Partner
//October 2007 - March 2008
//Designed and implemented a Microsoft Office SharePoint Server (MOSS)-based custom internet-facing site. The site contains customized master pages, utilizes MOSS Web Content Management pages with custom-built page layouts, contains custom-built C# Web Parts, and utilizes MOSS Excel Services and the Business Data Catalog.  A custom authentication provider that accesses the clients Microsoft Dynamics CRM 4.0 Contact entity was also developed for the site..
//SharePoint 2007, Visual Studio 2005, Microsoft .NET Framework 3.0, C#

//Midwest US Logistics Firm
//May 2007 - October 2007
//Architected and implemented custom authentication in a SharePoint/MOSS solution for a Chicago-based logistics firm. The implementation provided for the creation of a custom ASP.NET Forms Authentication Provider that retrieved credentials from a database hosted on an AS 400 platform.
//SharePoint 2007, Visual Studio 2005, Microsoft .NET Framework 3.0, C#







    var projects = [
        { 
            id: 'mobile', 
            name: 'Project Management Mobile Web Application', 
            image: 'mobile.png', 
            thumb: 'madEMSPEED.jpg' ,
            dates: 'April 2013 to present',
            role: 'Senior HTML5/Mobile Architect',
            client: 'Large Oil and Gas Provider - Houston, TX',
            description: 'Architected and implemented a project management mobile web application. Included initial effort to implement for responsive design (from mobile to desktop).',
            clienttools: [
                'Jira (requirements, tasks, ticketing)', 
                'Git (version control)',
                'Continuous Integration (internal tool)',
                'Sencha Touch 2.3',
                'JQuery 1.9.1',
                'Siesta (testing)',
                'Cordova/PhoneGap'
            ],
            servertools: [
                'Microsoft .NET Framework 4.5 in C#', 
                'Microsoft Windows Communication Foundation (WCF)',
                'SQL Server 2008',
                'ASP.NET MVC/WebAPI'
            ]
        },

        { id: 'iconicresume', name: 'Iconic Resume' ,
        },
        { id: 'angulardash', name: 'Angular.js Dashboard', 
        },
        { id: 'ipadresume', name: 'Online Mobile Resume', 
            image: 'me.png', 
            thumb: '' ,
            dates: 'November 2013',
            role: 'Senior HTML5 Architect',
            client: '',
            description: 'Resume implemented as a mobile web application.  Includes several innovative ways to page through data. Showcases many different developer frameworks and libraries.',
            clienttools: [
                'HTML5, Sencha Touch 2.3, JQuery 1.10.2, AngularJS 1.2.1 (Data Binding, Controller), Modernizr (CSS 3D Transforms and Transitions), JavaScript, CSS/SASS, Windows Azure Hosting JQuery plugins: MockJax (AJAX Mocking), jquery.flips, TouchSwipe, jQuery.qrcode'
            ],
            servertools: [
            ]
        },
        { id: 'emspeed12', name: 'HTML5 Single Page Application', 
            image: 'EMSPEED12.png', 
            thumb: '' ,
            dates: 'June 2012 to present',
            role: 'Senior HTML5 Architect',
            client: 'Large Oil and Gas Provider - Houston, TX',
            description: 'Architected and implemented a Web-based project management.  Built as a 100% browser-based \'Single Page Application\' with HTML5, JavaScript, AJAX and CSS3.',
            clienttools: [
            'Tools: <a target="_blank" class="lnk" href="https://www.atlassian.com/software/jira">Jira (requirements, task management, ticketing)</a>, <a target="_blank" class="lnk" href="http://mercurial.selenic.com/">Mercurial (version control)</a>',
            'Browser: <a target="_blank" class="lnk" href="http://www.sencha.com/products/extjs/">Sencha ExtJS 4.2</a>, <a target="_blank" class="lnk" href="http://jquery.com/">JQuery 1.9.1</a>, <a target="_blank" class="lnk" href="http://www.bryntum.com/products/siesta/">Siesta (testing)</a>',
            'Server: <a target="_blank" class="lnk" href="http://msdn.microsoft.com/en-us/library/ms171868(v=vs.110).aspx">Microsoft .NET Framework 4.5 in C#</a>, <a target="_blank" class="lnk" href="http://msdn.microsoft.com/en-us/library/ms731082(v=vs.110).aspx">Microsoft WCF/Entity Framework/LINQ</a>, <a target="_blank" class="lnk" href="https://www.microsoft.com/en-us/sqlserver/default.aspx">SQL Server</a>'
            ],
            servertools: [
            ]
        },
            { id: 'emspeedpoc', name: 'HTML5 Graphical Proof of Concept', 
                image: 'EMSPEEDPOC.jpg', 
                thumb: '' ,
                dates: 'Feb 2012 - May 2012',
                role: 'Senior HTML5 Architect',
                client: 'Large Oil and Gas Provider - Houston, TX',
                description: 'HTML5 Proof of Concept.  Web application that provided for visualization of complex workflow and workstreams for project lifecycle management.  Utilized complex graphics drawing library for data visualizations.',
                clienttools: [
                    'Sencha Ext JS, HTML5, JQuery, JavaScript, JavaScript InfoVis Toolkit (http://philogb.github.io/jit/), Microsoft .NET, C#, Microsoft WCF'
                ],
                servertools: [
                ]
        },
        { id: 'emspeed10', name: 'HTML Silverlight Application', 
            image: 'EMSPEED10.jpg', 
            thumb: '' ,
            dates: 'Nov 2011 - Jan 2012',
            role: 'Senior Web Architect',
            client: 'Large Oil and Gas Provider - Houston, TX',
            description: 'Architected and implemented a Web-based portal to a project management system.  The User Interface is based on a mix of ASP.NET and Microsoft Silverlight.  All interaction with the server is via AJAX calls to Microsoft Windows Communication Framework (WCF) services and SQL Server.',
            clienttools: [
                'ASP.NET, Silverlight, JQuery, JavaScript, Microsoft .NET, C#, Microsoft WCF'
            ],
            servertools: [
            ]
        },
            { id: 'nalco', name: 'ASP.NET Silverlight Web Application',
                image: 'NalcoEquip.jpg', 
                thumb: '' ,
                dates: 'Sept 2010 - Oct 2011',
                role: 'Senior Web Architect',
                client: 'Energy Technologies Company - Houston, TX',
                description: 'Designed and developed a client-facing SharePoint 2010 Refined Knowledge application, which allows for the monitoring of key refinery equipment at a client site and provides for real-time reporting and monitoring through custom-built SharePoint sites.  The application heavily utilizes Silverlight 4 for the user experience, and a back-end Pi database infrastructure from OSISoft.',
                clienttools: [
                    'ASP.NET, Silverlight, JQuery, JavaScript, SharePoint 2010, Microsoft .NET, C#, Microsoft WCF'    
                ],
                servertools: [
                ]
        },
        { id: 'lockheed', name: 'Silverlight SharePoint Web Application', 

            image: 'Scheduler.jpg', 
            thumb: '' ,
            dates: 'May 2010 - Aug 2010',
            role: 'Senior Web Architect',
            client: 'Defense Contractor - Norfolk, VA',
            description: 'Architected, designed and developed a SharePoint 2010 event management system which utilized a Silverlight 4 calendaring interface that was built with the Telerik Silverlight controls and the SharePoint Client Object model.  The application also takes advantage of the new SharePoint Relational list technology, and utilizes a Visual Studio - based Workflow to manage the life cycle of events.  ASP.NET, Silverlight, JQuery, JavaScript, SharePoint 2010, Microsoft .NET, C#, Microsoft WCF',
            clienttools: [
            ],
            servertools: [
            ]
        },
        { id: 'atlas', name: 'SharePoint Custom Search Web Application', 
            image: 'Atlas.jpg', 
            thumb: '' ,
            dates: 'Jan 2010 - April 2010',
            role: 'Senior Web Architect',
            client: 'Major Pharmaceutical Company - San Francisco, CA',
            description: 'Lead Architect for a custom SharePoint Search Web application against an OpenText/LiveLink document repository.  Defined and implemented the SharePoint search interface to OpenText/LiveLink, and designed and developed the custom search experience utilizing the Infragistics Silverlight grid control which provided for advanced sorting, grouping and column manipulation.',
            clienttools: [
                'ASP.NET, Silverlight, JQuery, JavaScript, SharePoint 2007, Visual Studio 2008, Infragistics controls, Microsoft .NET, C#, Microsoft WCF'
            ],
            servertools: [
            ]
        },
        { id: 'emsix', name: 'ASP.NET/AJAX Web Application', 
            image: 'EMSIX.png', 
            thumb: '' ,
            dates: 'Oct 2009 - Dec 2009',
            role: 'Senior SharePoint Architect',
            client: 'Large Oil and Gas Provider - Houston, TX',
            description: 'Architected and implemented a Document Management System utilizing SharePoint Enterprise Search. The application utilized the SharePoint Profile System to provide for personalized search results. The display of search results utilized a custom faceted search experience, with result data displayed  in tabular format to allow for sorting.  An AJAX-enabled interface added to the custom search experience. The custom Search experience was created with custom Visual Studio controls.',
            clienttools: [
                'Microsoft.Net (C#) 3.5, SQL Server2008 SharePoint 2007, Visual Studio 2008, ASP.NET AJAX'
            ],
            servertools: [
            ]
        }
    ];
    $httpBackend.whenGET('http://gusmano.azurewebsites.net/api/projects').respond(projects);
    $httpBackend.whenGET(/^\/api\/project\/[\w]+$/).respond(function (method, url, data) {
        var theId = url.substring(url.lastIndexOf('/')+1);
        theObject = _.find(projects, function (rw) { return rw.id == theId });
        return [200, theObject];
    });

    var companies = [
        { id: 'hitachi', name: 'Hitachi Consulting', role: 'Senior Manager/Architect', dates: 'Oct 2009 - Present', description: 'Senior Manager with Hitachi Consulting based in the Houston office. Involved in assisting and mentoring clients in the development and implementation of solutions that utilize Microsoft SharePoint related technologies including ASP.NET and HTML5.'},
        { id: 'img', name: 'The Information Management Group', role: 'Partner', dates: 'Sept 1997 - Oct 2009', description: 'Partner and the Director of Emerging Technologies for The Information Management Group, a Microsoft Gold Certified Partner and the Worldwide 2001 Microsoft Certified Technical Education Center (CTEC) of the year. In this role, Mr. Gusmano was responsible for fostering an understanding of new and emerging technologies can be utilized for IMG and its clients.  In this position, Marc was  involved in Architecting applications for IMGâ€™s Consulting Services clients, as well as mentoring and training in client engagements.' },
        { id: 'bismarck', name: 'Bismarck Consulting', role: 'Founder', dates: 'March 1995 - Sept 1997', description: 'The Bismarck Group was a Client Server software product integration Firm headquartered in Chicago, Illinois.  The Firm\'s tag, \'Business Integration Services using Client Server Technologies\', highlighted the firm\'s focus: Providing Client Server software integration services to high growth, information-centric organizations and building solutions that can be sold as \'Customizable Software Products\'' },
        { id: 'lante', name: 'Lante Corporation', role: 'Director of Consulting', dates: 'Nov 1992 - March 1995', description: 'Mr. Gusmano started at Lante as Senior Consulting Manager and immediately began to get involved in many of the key clients for Lante, including Dell Computer, Abbott Labs, Baxter Healthcare, Sears, and Ameritech.  In  April of 1993 Marc was promoted to the position of Director of Consulting, responsible for the entire consulting organization at Lante, including all aspects of project execution, profit and loss (utilization) responsibility,  performance reviews,  recruiting,  and staffing.' },
        { id: 'andersen', name: 'Andersen Consulting', role: 'Manager', dates: 'May 1984 - Nov 1992', description: 'Mr. Gusmano began his consulting career as a staff consultant in the Chicago office of Arthur Andersen and Co./Andersen Consulting in May of 1984.  He spent his first 4 years on a variety of medium and large systems development projects for organizations such as IBM, Northern Trust Bank, Mellon Bank in Pittsburgh, and Lutheran General Hospital.  Mr. Gusmano was promoted to a Project Manager after just four years with Andersen Consulting, and moved to the Technology Services area where he became a project Manager for the New Age Systems group, a very specialized group within Andersen Consulting, focusing on assisting local Andersen offices with the planning, management, and deployment of client-server business applications.' }
    ];
    $httpBackend.whenGET('http://gusmano.azurewebsites.net/api/companies').respond(companies);
    $httpBackend.whenGET(/^\/api\/company\/[\w]+$/).respond(function (method, url, data) {
        var theId = url.substring(url.lastIndexOf('/')+1);
        theObject = _.find(projects, function (rw) { return rw.id == theId });
        return [200, theObject];
    });

    var technologies = [
        { id: '1', name: 'Ionic Framework' },
        { id: '1', name: 'Angular.js' },
        { id: '1', name: 'Cordova' },
        { id: '1', name: 'Angular.js Nested Routing (ui-router)' },
        { id: '1', name: '$httpbackend' },
        { id: '1', name: 'ng-cordova' },
        { id: '1', name: 'node.js' },
        { id: '1', name: 'gulp.js' },
        { id: '1', name: 'ASP.NET MVC WebApi' },
        { id: '1', name: 'Visual Studio 2013' },
        { id: '1', name: 'GITHub' },
        { id: '1', name: 'Bower' }
    ];
    $httpBackend.whenGET('http://gusmano.azurewebsites.net/api/technologies').respond(technologies);
    $httpBackend.whenGET(/^\/api\/technology\/[\w]+$/).respond(function (method, url, data) {
        var theId = url.substring(url.lastIndexOf('/') + 1);
        theObject = _.find(projects, function (rw) { return rw.id == theId });
        return [200, theObject];
    });


    var alerts = [
        { fa: 'comment', text: 'New Comment (c)', time: '4 minutes ago' },
        { fa: 'twitter', text: '3 New Followers', time: '12 minutes ago' },
        { fa: 'envelope', text: 'Message Sent', time: '12 minutes ago' },
        { fa: 'tasks', text: '3 New Followers', time: '27 minutes ago' },
        { fa: 'upload', text: 'New Task', time: '43 minutes ago' },
        { fa: 'bolt', text: 'Server Rebooted', time: '11:32 AM' },
        { fa: 'warning', text: 'Server Not Responding', time: '10:57 AM' },
        { fa: 'shopping-cart', text: 'New Order Placed', time: '9:49 AM' },
        { fa: 'money', text: 'Payment Received', time: 'Yesterday' }
    ];
    $httpBackend.whenGET('http://localhost:88/api/alerts').respond(alerts);


    //$httpBackend.whenGET('http://localhost:88/api/items').respond(200, [{ name: 'a', value: '2' }]);
    //$httpBackend.whenGET('http://localhost:88/api/marc').respond(marc);



    //*
    //*     // adds a new phone to the phones array
    //*     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
    //    *       var phone = angular.fromJson(data);
    //    *       phones.push(phone);
    //    *       return [200, phone, {}];
    //    *     });

}]);