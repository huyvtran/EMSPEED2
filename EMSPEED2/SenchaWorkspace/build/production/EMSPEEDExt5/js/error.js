//var a = function (message, url, linenumber) {
var globalError = '';
var globalErrorUrl = '';
window.onerror = function (message, url, linenumber) {
    alert(message);
    var timestamp = com.getFormattedUTCLongDate(new Date());

    if (globalError !== '') { message = globalError; };
    if (globalErrorUrl !== '') { url = globalErrorUrl; };

    if (Ext.getCmp('Center') != undefined) {
        Ext.getCmp('North').hide();
        //Ext.getCmp('West').hide();
        Ext.getCmp('Center').hide();
        Ext.getCmp('Navigation').hide();
        Ext.getCmp('South').hide();
    }

    if (com.loading > 0) {
        com.loading = 1;
        com.endLoading();
    }

    // hide loading page section 
    document.getElementById('divloading').style.display = 'none'; //loading-app
    
    // show error section 
    document.getElementById('emspeed-error-page').style.display = 'block';
    

    //document.getElementById('divloading').style.display = 'block';
    //document.getElementById('txtloading').style.display = 'none';
    //document.getElementById('theErrorMessageHeading').style.display = 'block';
    //document.getElementById('theErrorMessageDiv').style.display = 'block';

    var theVersion = "not defined";
    try {
        theVersion = EMSPEED_VERSION;
    }
    catch (err) {
    }
    
    var theMessage = '<table>' + 
                     '<tr><th style="{width:120px;}">Message:</th><td>' + message + '</td></tr>' +
                     '<tr><th style="{width:120px;}" >File:</th><td>' + url + '</td></tr>' +
                     '<tr><th style="{width:120px;}">Line:</th><td>' + linenumber + '</td></tr>' +
                     '<tr><th style="{width:120px;}">Version:</th><td>' + theVersion + '</td></tr>' +
                     '<tr><th style="{width:120px;}">Timestamp (UTC):</th><td>' + timestamp + '</td></tr>' +
                     '</table>';


    document.getElementById('error-table').innerHTML = document.getElementById('error-table').innerHTML + theMessage + '<br/><br/>';



    return true;
}

//(function () {

//    var identifyClasses = function (ns) {
//        // A class name must start with a capital letter by convention
//        var className = /^[A-Z].*$/;

//        for (var n in ns) {
//            if (ns.hasOwnProperty && ns.hasOwnProperty(n) && typeof n === 'string' && ns[n]) {
//                if (typeof ns[n] === 'object') {
//                    // Recurse through any objects since they may be namespace objects
//                    identifyClasses(ns[n]);
//                }
//                else if (className.test(n) && typeof ns[n] === 'function' && !ns[n].prototype.hasOwnProperty('toString')) {
//                    // For every class that does not define a toString function, add one that returns the class name
//                    ns[n].prototype.toString = (function (s) {
//                        return s;
//                    }).createCallback(n + ' :');
//                }
//            }
//        }
//    };

//    identifyClasses(Ext); // Add toString functions to the Ext library.

//})();

var allEvents = function () {

    //Ext.Function.createInterceptor(fireEvent, function (a) {
    //    console.log(this.name);
    //    console.log(arguments);
    //    return true;
    //});

    Ext.util.Observable.prototype.fireEvent = Ext.Function.createInterceptor(Ext.util.Observable.prototype.fireEvent, function () { console.log(this.name); console.log(arguments); return true; });


    //// to capture ALL events use:
    //Ext.util.Observable.prototype.fireEvent =
    //    Ext.util.Observable.prototype.fireEvent.createInterceptor(function () {
    //        console.log(this.name);
    //        console.log(arguments);
    //        return true;
    //    });
};

var eventsFor = function (s) {
    // to capture events for a particular component:
    Ext.util.Observable.capture(
        Ext.getCmp(s),
        function (e) {
            console.info(e);
        }
    );
}