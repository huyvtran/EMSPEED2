Ext.define('EMSPEEDExt5.Application', {
    extend: 'Ext.app.Application',
    
    name: 'EMSPEEDExt5',
    //autoCreateViewport: 'EMSPEEDExt5.view.viewport.Viewport',
    autoCreateViewport: false,

    requires: [
        //'Ext.app.*',
        'Ext.state.CookieProvider',
        'MyPackage.package.mjg',
        'EMSPEED.common.com',
        'EMSPEED.common.Marc',
        'Ext.state.LocalStorageProvider',
        'Ext.window.MessageBox',
        'Ext.tip.QuickTipManager',
        'EMSPEEDExt5.*'
    ],

    views: [
    ],

    controllers: [
        'Root@EMSPEEDExt5.controller'
    ],

    stores: [
        'People'
    ],
    
    //defaultToken: 'home',

    init: function () {

        mjg.test('hi');
        marc.test('hi');

        //Ext.setGlyphFontFamily('Pictos');
        Ext.setGlyphFontFamily('FontAwesome');
        console.log('init in Application');
        var me = this,
            map = Ext.Object.fromQueryString(location.search),
            charts = ('charts' in map) && !/0|false|no/i.test(map.charts);
        //me.setDefaultToken( charts ? 'basic-column' : 'Dashboard' );
        me.setDefaultToken('Dashboard/97366');

        Ext.tip.QuickTipManager.init();
        //Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
        //Ext.state.Manager.setProvider(new Ext.state.CookieProvider({ expires: new Date(new Date().getTime()+(10006060247)), //7 days from now }));
        Ext.state.Manager.setProvider(Ext.create('Ext.state.LocalStorageProvider'));
    },

    onBeforeLaunch: function () {
        console.log('onBeforeLaunch in Application');
        this.callParent();
    },

    launch: function () {
        console.log('launch in Application');
    }
});
