Ext.define('EMSPEEDExt5.view.dashboard.dashboardBasePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboardBasePanel',

    //onNg: function () {
    //    var $theDiv = $('#Test');
    //    var controllerScope = angular.element($theDiv).scope();
    //    var $injector = angular.injector(['ng', 'app']);
    //    $injector.invoke(function ($compile) {
    //        controllerScope.$apply(function () {
    //            $compile($theDiv)(controllerScope);
    //        })
    //    });
    //},

    //onFavorite: function () {
    //    alert('dashboardBasePanelController - onGlyph2');
    //    this.getView().toggleCollapse();
    //},

    onAfterLayout: function (sender, layout, eOpts) {
        var me = this;
        //console.log('onAfterLayout');
        window.clearInterval(me.myVar)
    },

    myVar: null,
    myTimer: function () {
        var me = this;
        //var now = new Date();
        //alert('end ' + now);
        //alert('end ' + now);
        window.clearInterval(me.myVar)

        var fa = 'save';
        var s = '';
        s = s + '<div style="color:#003366;font-size:22px;margin-left: 0px;">';
        s = s + '<i class="fa fa-' + fa + ' fa-fw"></i>';
        s = s + 'dashboard layout saved';
        s = s + '</div>';
        Ext.toast({
            html: s,
            slideInAnimation: 'easeIn',
            slideBackAnimation: 'bounceOut',
            slideInDuration: 100,
            slideBackDuration: 1000,
            hideDuration: 500,
            autoCloseDelay: 3000,
            stickOnClick: true,
            stickWhileHover: true,
            closeOnMouseDown: true,
            width: 500,
            closable: false,
            align: 't'
        });
    },
    onResize: function (sender, eOpts) {
        var me = this;
        //console.log(sender);
        window.clearInterval(me.myVar)
        this.myVar = setInterval(function () { me.myTimer() }, 50);
    },

    onToggleToolbar: function (sender) {
        var toolbar = sender.up('toolbar');
        //var fa = '';
        if (sender.glyph === 'xf044@FontAwesome') {
            sender.setGlyph('xf040@FontAwesome');
            toolbar.items.items[7].show();
            toolbar.items.items[6].show();
            toolbar.items.items[5].show();
            toolbar.items.items[4].show();
            toolbar.items.items[3].show();
        }
        else {
            sender.setGlyph('xf044@FontAwesome');
            toolbar.items.items[7].hide();
            toolbar.items.items[6].hide();
            toolbar.items.items[5].hide();
            toolbar.items.items[4].hide();
            toolbar.items.items[3].hide();
        }
    },

    onFavorite: function (sender) {
        var addOrRemove = '';
        var fa = '';
        var theType = '';
        var theTitle = '';

        var parent = sender.up('panel');
        switch (parent.xtype) {
            case 'dashboardBasePanel':
                theType = 'Page';
                theTitle = parent.text;
                break;
            case 'dashboard-panel':
                theType = 'Widget';
                theTitle = parent.title;
                break;
            default:
        }

        var addOrRemove = '';
        var fa = '';
        if (sender.glyph === 'xf005@FontAwesome') {
            sender.setGlyph('xf006@FontAwesome');
            addOrRemove = 'removed';
            fa = 'star-o';
        }
        else {
            sender.setGlyph('xf005@FontAwesome');
            addOrRemove = 'added';
            fa = 'star';
        }
        var s = '';
        s = s + '<div style="color:#003366;font-size:22px;margin-left: 0px;">';
        s = s + '<i class="fa fa-' + fa + ' fa-fw"></i>';
        s = s + theType + ' \'' + theTitle + '\' '  + addOrRemove + ' as a favorite';
        s = s + '</div>';
        Ext.toast({
            html: s,
            slideInAnimation: 'easeIn',
            slideBackAnimation: 'bounceOut',
            slideInDuration: 100,
            slideBackDuration: 1000,
            hideDuration: 500,
            autoCloseDelay: 3000,
            stickOnClick: true,
            stickWhileHover: true,
            closeOnMouseDown: true,
            width: 500,
            closable : false,
            align: 't'
        });

    },

    onAddLayout: function () {
        alert('to be implemented...');
    },

    onDeleteLayout: function () {
        alert('to be implemented...');
    },
    onAddWidget: function () {
        var margin = 200;
        Ext.create("EMSPEEDExt5.view.dashboard.dashboardAddWidgetDialog", { rootView: this.lookupReference('dashboard'), width: window.innerWidth - margin, height: window.innerHeight - margin }).show();
    },

    onRestore: function () {
        alert('To Be Implemented...');
    },

    //onAddFeedUrl: function (sender) {
    //    var dashboard = this.lookupReference('dashboard');
    //    dashboard.addView({
    //        type: 'googlerss',
    //        feedUrl: sender.feedUrl,
    //        columnIndex: 0,
    //        height: 200
    //    });
    //},

    onGetState: function () {
        var dashboard = this.lookupReference('dashboard');
        var state = dashboard.getState();
        console.log('state');
        console.log(state);
    },

    onClearLSClick: function () {
        localStorage.clear();

    },

    onDeserialClick: function () {
        alert('You clicked the "onDeserial" button.');
        //Ext.getCmp('d2').deserializeItems([
        //    { type: 'stockTicker', columnIndex: 0, height: 100 },
        //    { type: 'stocks', columnIndex: 1, height: 100 }
        //]);
    }

});