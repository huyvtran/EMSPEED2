angular.module('app')
.run(["$httpBackend", function ($httpBackend) {

    $httpBackend.whenGET('includes/left-panel.html').passThrough();
    $httpBackend.whenGET('views/dashboard.html').passThrough();
    $httpBackend.whenGET('views/reporting.html').passThrough();
    $httpBackend.whenGET('ajax/notify/mail.html').passThrough();
    $httpBackend.whenGET('ajax/notify/notifications.html').passThrough();
    $httpBackend.whenGET('ajax/notify/tasks.html').passThrough();


    var items = [
        { name: 'a', value: '2' },
        { name: 'a', value: '2' },
        { name: 'a', value: '2' },
        { name: 'a', value: '2' },
        { name: 'a', value: '2' },
        { name: 'a', value: '2' }
    ];
    $httpBackend.whenGET('http://localhost:88/api/items').respond(items);

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

    $httpBackend.whenGET('http://localhost:88/api/marc').respond(function (method, url, data) {
        console.log("Getting marc");
        return marc;
    });


    $httpBackend.whenGET(/^\/templates\//).passThrough();

    //*
    //*     // adds a new phone to the phones array
    //*     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
    //    *       var phone = angular.fromJson(data);
    //    *       phones.push(phone);
    //    *       return [200, phone, {}];
    //    *     });

}]);