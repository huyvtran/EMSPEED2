angular.module('ionicApp')
.run(["$httpBackend", function ($httpBackend) {

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

        { id: 'iconicresume', name: 'Iconic Resume' },
        { id: 'angulardash', name: 'Angular.js Dashboard' },
        { id: 'ipadresume', name: 'iPad Resume' },
        { id: 'html5aps', name: 'HTML5 Single Page Application' },
        { id: 'poc', name: 'HTML5 Graphical Proof of Concept' },
        { id: 'emspeed10', name: 'HTML Silverlight Application' },
        { id: 'refinedknowledge', name: 'ASP.NET Silverlight Web Application' },
        { id: 'lockheed', name: 'Silverlight SharePoint Web Application' },
        { id: 'atlas', name: 'SharePoint Custom Search Web Application' },
        { id: 'emsix', name: 'ASP.NET/AJAX Web Application' }
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

    var ecosummary = [
        { fa: 'comment', text: 'Assigned To Me', number: '5' },
        { fa: 'comment', text: 'Items I Own', number: '3' },
        { fa: 'comment', text: 'Pending Approval', number: '3' },
        { fa: 'comment', text: 'In Progress', number: '1' },
        { fa: 'comment', text: 'Not Started', number: '3' },
        { fa: 'comment', text: 'Complete', number: '8' },
        { fa: 'comment', text: 'Created', number: '5' },
        { fa: 'comment', text: 'Reviewed', number: '3' },
        { fa: 'comment', text: 'Released', number: '3' }
    ];
    $httpBackend.whenGET('http://localhost:88/api/ecosummary').respond(ecosummary);



    //$httpBackend.whenGET('http://localhost:88/api/items').respond(200, [{ name: 'a', value: '2' }]);
    //$httpBackend.whenGET('http://localhost:88/api/marc').respond(marc);


    $httpBackend.whenGET(/^\/templates\//).passThrough();

    //*
    //*     // adds a new phone to the phones array
    //*     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
    //    *       var phone = angular.fromJson(data);
    //    *       phones.push(phone);
    //    *       return [200, phone, {}];
    //    *     });

}]);