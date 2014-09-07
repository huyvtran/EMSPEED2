Ext.define('EMSPEEDExt5.view.dashboard.dashboardAddWidgetInfoPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.infopanel',
    id: 'img-detail-panel',
    border: 1,
    bodyPadding: 10,
    width: 300,
    minWidth: 300,

    tpl: new Ext.XTemplate(
        '<div class="details">',
            '<tpl for=".">',
                '<img src="widgets/{type}.png" style="width:250px;height:100px;object-fit: contain;" />',
                '<div class="details-info">',
                    '<b>Title:</b><span>{title}</span>',
                    '<b>Description:</b><span>{description}</span>',
                    '<b>Type:</b><span>{type}</span>',
                    '<b>Height:</b><span>{height}px</span>',
                    //'<b>Extension:</b><span>{extension}</span>',
                    '<b>Default Properties:</b><span>{[this.getProperties(values.widgetDataDef)]}</span>',

                '</div>',
            '</tpl>',
        '</div>',
        {
            disableFormats: true,
            getProperties: function (widgetDataDef) {
                //return widgetDataDef.name;
                var s = '';
                for (var propt in widgetDataDef) {
                    s = s + propt + ': ' + widgetDataDef[propt] + '<br>';
                }
                return s;
            }
        }
    ),

    afterRender: function () {
        this.callParent();
        if (!Ext.isWebKit) {
            this.el.on('click', function () {
                alert('The Sencha Touch examples are intended to work on WebKit browsers. They may not display correctly in other browsers.');
            }, this, { delegate: 'a' });
        }
    },

    /**
     * Loads a given image record into the panel. Animates the newly-updated panel in from the left over 250ms.
     */
    loadRecord: function (image) {
        this.body.hide();
        this.tpl.overwrite(this.body, image.data);
        this.body.slideIn('l', {
            duration: 250
        });
    },

    clear: function () {
        this.body.update('');
    }
});