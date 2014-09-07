angular.module('appM', ['app', 'ngMockE2E'])
.run(["$httpBackend", function ($httpBackend) {

    var items = [
        { name: 'a', value: '2' },
        { name: 'a', value: '2' },
        { name: 'a', value: '2' },
        { name: 'a', value: '2' },
        { name: 'a', value: '2' },
        { name: 'a', value: '2' }
    ];

    var marc = [
        { fa: 'comment', text: 'New marc Comment', time: '4 minutes ago' },
        { fa: 'twitter', text: '3 New Followers', time: '12 minutes ago' },
        { fa: 'envelope', text: 'Message Sent', time: '12 minutes ago' },
        { fa: 'tasks', text: '3 New Followers', time: '27 minutes ago' },
        { fa: 'upload', text: 'New Task', time: '43 minutes ago' },
        { fa: 'bolt', text: 'Server Rebooted', time: '11:32 AM' },
        { fa: 'warning', text: 'Server Not Responding', time: '10:57 AM' },
        { fa: 'shopping-cart', text: 'New Order Placed', time: '9:49 AM' },
        { fa: 'money', text: 'Payment Received', time: 'Yesterday' }
    ];

    //$httpBackend.whenGET('http://localhost:88/api/items').respond(200, [{ name: 'a', value: '2' }]);
    $httpBackend.whenGET('http://localhost:88/api/items').respond(items);
    //$httpBackend.whenGET('http://localhost:88/api/marc').respond(marc);

    $httpBackend.whenGET('http://localhost:88/api/marc').respond(function (method, url, data) {
        console.log("Getting marc");
        return marc;
    });


    $httpBackend.whenGET('dashboard.html').passThrough();
    $httpBackend.whenGET('alerts.html').passThrough();
    $httpBackend.whenGET(/^\/templates\//).passThrough();

    //*
    //*     // adds a new phone to the phones array
    //*     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
    //    *       var phone = angular.fromJson(data);
    //    *       phones.push(phone);
    //    *       return [200, phone, {}];
    //    *     });

}]);