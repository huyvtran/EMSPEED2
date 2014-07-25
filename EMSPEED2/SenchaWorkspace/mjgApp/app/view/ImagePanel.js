Ext.define('mjgApp.view.ImagePanel', {
    extend: 'Ext.Container',
    xtype: 'imagepanel',
    requires: [
        'Ext.Img'
    ],
    initialize: function () {
        this.down('#theHeader').setHtml('<div class="f24">' + this.getHeader() + '</div>');

        var theImage = this.getImage();
        this.down('image').setSrc('resources/images/' + theImage);

        var theStart = '.';
        var e = theImage.indexOf('.');
        var theId = theImage.substring(0, e);
        this.down('image').theId ='c' + theId;
    },

    config: {
        style: { backgroundColor: '#FFFFFF' },
        image: null,
        header: null,
        padding: '0 5 0 5', layout: 'vbox',
        items: [
            { xtype: 'container', itemId: 'theHeader', margin: '5 5 5 5', style: { textAlign: 'center' } },
            {
                xtype: 'image', flex: 1, cls: 'my-carousel-item-img', theId: null,
                listeners: {
                    tap: function () {
                        var overlay = Ext.Viewport.add({ xtype: 'imagecallout', title: 'Project Details', src: this.getSrc(), id: this.theId });
                        overlay.show();
                        overlay.remove();
                    }
                }
            },
           { xtype: 'container', margin: '5 5 5 5', style: { textAlign: 'center' }, html: '<div class="f24">Tap/click on the image to see details on this project</div>' },
           { xtype: 'container', height: 20 }
        ]
    }
});