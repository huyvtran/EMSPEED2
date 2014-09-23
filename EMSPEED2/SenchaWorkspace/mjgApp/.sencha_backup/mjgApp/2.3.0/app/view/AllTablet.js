
function v2pocbuild() {
    window.open('http://emspeed2.azurewebsites.net/SenchaWorkspace/Build/Production/EMSPEEDTouch/', 'demo1', 'height=568,width=320,left=50,top=50,titlebar=no,toolbar=no,menubar=no,location=no,directories=no,status=no')
}

function mjguitester() {
    var h = screen.height - 200;
    var w = screen.width - 100;
    window.open('http://emspeed1x.azurewebsites.net/sites/97366/Portal.aspx', 'demo2', 'height=' + h + ',width=' + w + ',left=50,top=50,titlebar=no,toolbar=no,menubar=no,location=no,directories=no,status=no')
}

function mjguitester2() {
    var h = screen.height - 200;
    var w = screen.width - 100;
    window.open('http://emspeed2.azurewebsites.net/SenchaWorkspace/Build/Production/EMSPEEDExt5/', 'demo3', 'height=' + h + ',width=' + w + ',left=50,top=50,titlebar=no,toolbar=no,menubar=no,location=no,directories=no,status=no')
}

Ext.define('mjgApp.view.AllTablet', {
    extend: 'Ext.Container',
    xtype: 'alltablet',
    id:'allTablet',

    initialize: function () {
        if (this.getIsLoaded() === false) {
            this.setIsLoaded(true);
            var $container = $('#flip'),
                $pages = $container.children().hide();
            //Modernizr.load({
            //    test: Modernizr.csstransforms3d && Modernizr.csstransitions,
            //    yep: ['js/jquery.tmpl.min.js', 'js/jquery.history.js', 'js/core.string.js', 'js/jquery.touchSwipe-1.2.5.js', 'js/jquery.flips.js'],
            //    nope: 'css/fallback.css',
            //    callback: function (url, result, key) {
            //        if (url === 'css/fallback.css') {
            //            $pages.show();
            //        }
            //        else if (url === 'js/jquery.flips.js') {
            //            $('#flip').flips();
            //        }
            //    }
            //});
        }

        $('#flip').flips();

        this.callParent(arguments);
        this.setContentEl('fliparea');
    },

    config: {
        bodyStyle: { backgroundColor: '#FFFFFF' },
        //contentEl: 'fliparea',
        isLoaded: false,
        isPainted: false,

        listeners: {

            painted: function (me, eOpts) {
                if (this.getIsPainted() === false) {
                    this.setIsPainted(true);

                    var options = {
                        render: 'div',
                        fill: '#333333',
                        background: '#ffffff',
                        text: location.href,
                        size: 125
                    }
                    $("#qrcode").empty().qrcode(options);

                    var options = {
                        render: 'image',
                        fill: '#333333',
                        background: '#ffffff',
                        text: 'http://emspeed2.azurewebsites.net/SenchaWorkspace/Build/Production/EMSPEEDTouch/',
                        size: 150
                    }
                    $("#qrcodeMobile").empty().qrcode(options);

                    var options = {
                        render: 'image',
                        fill: '#333333',
                        background: '#ffffff',
                        text: 'http://emspeed1x.azurewebsites.net/sites/97366/Portal.aspx',
                        size: 150
                    }
                    $("#qrcodeEMSPEED12").empty().qrcode(options);

                    $('#info').html(info);

                    if (Ext.browser.is.IE) {
                        $('#theBrowser').html('this page does not work in Internet Explorer</br>use a WebKit browser (Chrome, FireFox or Safari)');
                    }
                    if (Ext.browser.is.WebKit) {
                        if (Ext.os.deviceType != 'Phone') {
                            if (Ext.os.deviceType != 'Tablet') {

                                var d1 = "window.open('http://emspeed2.azurewebsites.net/SenchaWorkspace/Build/Production/EMSPEEDTouch/', 'demo1', 'height=568,width=320,left=50,top=50,titlebar=no,toolbar=no,menubar=no,location=no,directories=no,status=no')";




                                $('#theBrowser').html('best viewed on iPad (but works great here too!)');
                                //$("#buttonMobile").append('<button class="launch f16" onclick="window.open(http://emspeed2.azurewebsites.net/SenchaWorkspace/Build/Production/EMSPEEDTouch/, demo1, height=568,width=320,left=50,top=50,titlebar=no,toolbar=no,menubar=no,location=no,directories=no,status=no)">See2 live demo</button>')
                                $("#buttonMobile").append('<button class="launch f16" onclick="v2pocbuild()">See live demo</button>')
                                $("#buttonEMSPEED12").append('<button class="launch f16" onclick="mjguitester()">See live demo</button>')
                                $("#buttonEMSPEED12").append('&nbsp;&nbsp;&nbsp;<button class="launch f16" onclick="mjguitester2()">See ExtJS5 migration live demo</button>')
                            }
                            else {

                               
                                $("#buttonMobile").append('<br/><a target="_blank" class="lnk f26" href="http://emspeed2.azurewebsites.net/SenchaWorkspace/Build/Production/EMSPEEDTouch/">See live demo (best on a mobile phone)</a>')
                                $("#buttonEMSPEED12").append('<br/><a target="_blank" class="lnk f26" href="http://emspeed1x.azurewebsites.net/sites/97366/Portal.aspx">See live demo (best on the desktop)</a>')
                                $("#buttonEMSPEED12").append('<br/><a target="_blank" class="lnk f26" href="http://emspeed2.azurewebsites.net/SenchaWorkspace/Build/Production/EMSPEEDExt5/#Dashboard">See ExtJS5 live demo (best on the desktop)</a>')

                                //$("#buttonMobile").append('<span style="color:red;" class="f16" >Live demo at http://emspeed2.azurewebsites.net/SenchaWorkspace/Build/Production/EMSPEEDTouch/ </span>')
                                //$("#buttonEMSPEED12").append('<span style="color:red;" class="f16" >Live demo at http://emspeed1x.azurewebsites.net/sites/97366/Portal.aspx </span>')
                            }
                        }
                    }
                }
            }
        }
    }
});

//$(function () {
//    $('body').on('click', '.img-cont', function () {
//        var theBack = $(this).attr('back');
//        if (theBack != undefined) {
//            var overlay = Ext.Viewport.add({ xtype: 'details', title: 'Project Details', src: 'resources/images/' + 'f' + theBack + '.png', id: 'gmobile' });
//            overlay.show();
//            overlay.remove();
//        }
//    });
//});
