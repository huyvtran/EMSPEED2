angular.module('starter')
.run(["$httpBackend", function ($httpBackend) {

    $httpBackend.whenGET('templates/acercade-contacto.html').passThrough();
    $httpBackend.whenGET('templates/avisos.html').passThrough();
    $httpBackend.whenGET('templates/home.html').passThrough();
    $httpBackend.whenGET('templates/linea.html').passThrough();
    $httpBackend.whenGET('templates/lineas.html').passThrough();
    $httpBackend.whenGET('templates/paradas-cercanas.html').passThrough();
    $httpBackend.whenGET('templates/paradas-guardadas.html').passThrough();
    $httpBackend.whenGET('templates/publicidad.html').passThrough();
    $httpBackend.whenGET('templates/tarifas.html').passThrough();
    $httpBackend.whenGET('templates/x.html').passThrough();
    $httpBackend.whenGET('templates/taxis.html').passThrough();

    var a = {"avisos":3,"version":0.8,"promocion":[{"id":1,"tipo":"footer","img":"http:\/\/gasparsabater.com\/EMT\/img\/fira.jpg","anunciante":"Bonda Estudio","dir_anunciante":"Francesc Fiol i Juan, 2","texto":"<b>Lorem ipsum<\/b> dolor sit amet, consectetur adipiscing elit. Fusce eu dui accumsan, lacinia odio vitae, vehicula diam. Sed tincidunt placerat nunc, sed imperdiet ipsum faucibus in. Mauris porttitor nisi vel ullamcorper mattis. Maecenas convallis ac nibh ut mattis. Donec ornare aliquet sodales. Donec fermentum arcu a posuere sollicitudin. In vitae nisl ac ligula ullamcorper convallis.<br><br>Nunc gravida nisl augue, in feugiat nunc venenatis id. Mauris malesuada magna non pharetra fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi pellentesque, tortor non lacinia ullamcorper, nunc leo ornare augue, quis placerat magna ligula non lacus. Praesent id posuere orci. Praesent mattis odio purus, sit amet fermentum felis pretium rutrum. Morbi sollicitudin risus eget libero facilisis, quis semper purus ullamcorper. Maecenas quis nunc ut justo tempor mollis non et turpis. Maecenas gravida dolor odio, a tempus felis fermentum a. Cras rhoncus fermentum arcu, et semper diam gravida eget. Suspendisse in pharetra dui, ut euismod diam. Proin ac luctus nibh. Etiam interdum dolor eget molestie tincidunt.","url":"http:\/\/bonda.es\/pocket-lines","telefono":600117300},{"id":2,"tipo":"parada","idParada":9518,"img":"http:\/\/gasparsabater.com\/EMT\/img\/fira.jpg","anunciante":"Bonda Estudio","dir_anunciante":"Francesc Fiol i Juan, 2","texto":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dui accumsan, lacinia odio vitae, vehicula diam. Sed tincidunt placerat nunc, sed imperdiet ipsum faucibus in. Mauris porttitor nisi vel ullamcorper mattis. Maecenas convallis ac nibh ut mattis. Donec ornare aliquet sodales. Donec fermentum arcu a posuere sollicitudin. In vitae nisl ac ligula ullamcorper convallis.\r\n\t\t\t\t\tNunc gravida nisl augue, in feugiat nunc venenatis id. Mauris malesuada magna non pharetra fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi pellentesque, tortor non lacinia ullamcorper, nunc leo ornare augue, quis placerat magna ligula non lacus. Praesent id posuere orci. Praesent mattis odio purus, sit amet fermentum felis pretium rutrum. Morbi sollicitudin risus eget libero facilisis, quis semper purus ullamcorper. Maecenas quis nunc ut justo tempor mollis non et turpis. Maecenas gravida dolor odio, a tempus felis fermentum a. Cras rhoncus fermentum arcu, et semper diam gravida eget. Suspendisse in pharetra dui, ut euismod diam. Proin ac luctus nibh. Etiam interdum dolor eget molestie tincidunt.","url":"http:\/\/bonda.es","telefono":600117300},{"id":3,"tipo":"parada","idParada":"9518,9520","img":"https:\/\/humblebundle-a.akamaihd.net\/misc\/files\/hashed\/4683cc617b1590c39a6c27422ca38feee23741e3.jpg","anunciante":"Bonda Estudio","dir_anunciante":"Francesc Fiol i Juan, 2","texto":"Banner por parada","url":"http:\/\/bonda.es","telefono":600117300}],"incidencias":[{"id":1,"inicio":"22\/09\/14 07:00","fin":"01\/10\/14 00:00","texto":"A partir del lunes d\u00eda 22 se a\u00f1ade un bus a la l\u00ednea 19 intensificando la frecuencia media de paso entre las 7:45 y las 10 h. S'adjunta el nou horari. , L\u00ednea 19","lineas":19,"motivo":"Aumento servicio"},{"id":2,"inicio":"18\/09\/14 00:00","fin":"01\/10\/14 00:00","texto":"A partir del dia 18 de setiembre las l\u00edneas 5 \"Rafal Nou-Son Dureta\", 7 \"Son Rapinya-Son Gotleu\" y 8 \"Son Roca\" tendr\u00e1n nuevo horario los d\u00edas laborables por peque\u00f1os ajustes en el servicio. Se adjuntan los horarios. , L\u00edneas 5 , 7 y 8","lineas":"5,7,8","motivo":"Ajuste horarios por Necesidades del servicio"},{"id":3,"inicio":"01\/09\/14 00:00","fin":"01\/10\/14 00:00","texto":"A partir del 1 de septiembre hay cambios horarios en algunas l\u00edneas con motivo de la finalizaci\u00f3n de las vacaciones estivales. Se adjuntan los nuevos horarios. , L\u00edneas 1 , 2 , 3 , 15 y 25","lineas":"1,2,3,15,25","motivo":"SEPTIEMBRE"}],"es_festivo":0};
    $httpBackend.whenGET('http://gasparsabater.com/api/EMT').respond(a);




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


    $httpBackend.whenGET(/^\/templates\//).passThrough();

    //*
    //*     // adds a new phone to the phones array
    //*     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
    //    *       var phone = angular.fromJson(data);
    //    *       phones.push(phone);
    //    *       return [200, phone, {}];
    //    *     });

}]);