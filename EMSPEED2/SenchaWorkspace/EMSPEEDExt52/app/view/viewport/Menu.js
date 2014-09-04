Ext.define('EMSPEEDExt5.view.viewport.Menu', {
    extend: 'Ext.Container',
    xtype: 'Menu',
    id: 'Menu',
    id: 'theme-switcher-btn',
    margin: '0 10 0 0',
    layout: 'hbox',

    initComponent: function() {


        function setQueryParam(name, value) {
            var query = Ext.Object.fromQueryString(location.search);
            query[name] = value;
            location.search = Ext.Object.toQueryString(query);
        }

        function makeItem(value, text, paramName) {
            paramName = paramName || "theme";

            //var checked = value === (paramName == "theme" ? theme : locale);
            var checked = false;

            return {
                text: text,
                group: (paramName == 'theme' ? 'themegroup' : 'localegroup'),
                checked: Ext.repoDevMode ? location.href.indexOf(paramName + '=' + value) > 0 : checked,
                handler: function () {
                    if (!checked) {
                        if (paramName == 'theme') {
                            setQueryParam('theme', value);
                        } else {
                            setQueryParam('locale', value);
                        }
                    }
                }
            };
        }



        var menu = new Ext.menu.Menu({
            items: [
                makeItem('neptune', 'Neptune'),
                makeItem('neptune-touch', 'Neptune Touch'),
                makeItem('crisp', 'Crisp'),
                makeItem('classic', 'Classic'),
                makeItem('gray', 'Gray'),
                makeItem('access', 'Accessibility'),
                '-',
                {
                    text: "Locales",
                    menu: [
                        makeItem('en', 'English', 'locale'),
                        makeItem('he', 'Hebrew', 'locale')
                    ]
                },
                '-',
                {
                    text: 'Show announcements',
                    checked: true,
                    showAnnouncements: true
                }
            ]
        });

        this.items = [
            {
                xtype: 'component',
                id: 'theme-switcher',
                cls: 'ks-theme-switcher',

                margin: '0 5 0 0',
                listeners: {
                    scope: this,
                    click: function (e) {
                        menu.showBy(this);
                    },
                    element: 'el'
                }
            }
        ];
        this.callParent();
    }
});
