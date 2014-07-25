/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('jiraTime.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',

    onClickButton: function () {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);

        var user = $("mgusmano").val();
        var pass = $("Gusheandy1").val();

        function make_base_auth(user, pass) {
            var tok = user + ':' + pass;
            var hash = Base64.encode(tok);
            return "Authentication: Basic " + hash;
        };

        var auth = make_base_auth(user, pass);


        var theUrlPrefix = 'http://requirements.emspeed.dev.slb.com';


        var theUrl = 'http://requirements.emspeed.dev.slb.com/rest/api/2/project/TRAIN';
        //var theUrl = 'http://requirements.emspeed.dev.slb.com/rest/api/2/issue/TRAIN-20';
        var theUrl = theUrlPrefix + '/rest/api/2/search?jql=project="TRAIN"';


            //var theUrl = 'https://jira.atlassian.com/rest/api/2/project/TST-54768';

        $.ajax(com.ajaxOptions({
            url: theUrl,
            type: 'GET',
            auth: auth
        }))
        .done(function (data) {
//            console.table(data.issueTypes);
            console.table(data.issues);
        });



    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
