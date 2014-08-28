//var a = function (message, url, linenumber) {
var globalError = '';
var globalErrorUrl = '';
window.onerror = function (message, url, linenumber) {
    var timestamp = com.getFormattedUTCLongDate(new Date());

    if (globalError !== '') { message = globalError; };
    if (globalErrorUrl !== '') { url = globalErrorUrl; };

    if (Ext.getCmp('Center') != undefined) {
        Ext.getCmp('North').hide();
        //Ext.getCmp('West').hide();
        Ext.getCmp('Center').hide();
        Ext.getCmp('East').hide();
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
