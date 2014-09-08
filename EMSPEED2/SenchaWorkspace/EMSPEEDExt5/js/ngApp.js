angular.module('app', ['ngAnimate', 'ngMockE2E'])
.controller('widgetController', ['$scope', function ($scope) { }])
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

    //$httpBackend.whenGET('http://localhost:88/api/items').respond(200, [{ name: 'a', value: '2' }]);
    $httpBackend.whenGET('http://localhost:88/api/items').respond(items);
    $httpBackend.whenGET('http://localhost:88/api/alerts').respond(marc);
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


//<script>
    //angular.module('app')
    //    //.controller('TestController', function ($scope) { })
    //    .factory('TestService', function ($http, $q) {
    //        var get = function () {
    //            var deferred = $q.defer();
    //            $http.get('http://localhost:88/api/alerts').success(deferred.resolve).error(deferred.reject)
    //            return deferred.promise;
    //        };
    //        return {
    //            get: get
    //        };
    //    })
    //    .directive('wtTest', function () {
    //        return {
    //            restrict: 'AEC',
    //            scope: {},  // use a new isolated scope
    //            replace: true,
    //            template: '' +
    //            '<div ng-repeat="alert in alerts">z{{alert.text}}</div>' +
    //            '',
    //            controller: ['$scope', 'TestService', function ($scope, service) {
    //                $scope.name = 'marc';
    //                $scope.getAlerts = function () {
    //                    service.get().then(function (result) {
    //                        $scope.alerts = result;
    //                        $scope.$apply();
    //                    }, function (reason) {
    //                        console.log('ERROR', reason);
    //                    });
    //                };
    //                $scope.getAlerts();
    //            }],
    //            link: function (scope) {
    //            }
    //        };
    //    });

//</script>