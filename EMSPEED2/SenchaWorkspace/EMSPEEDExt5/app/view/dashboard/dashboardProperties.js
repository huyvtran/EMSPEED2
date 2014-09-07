Ext.define('EMSPEEDExt5.view.dashboard.dashboardProperties', {
    extend: 'Ext.grid.property.Grid',
    xtype: 'dashboardproperties',
    reference: 'dashboardproperties',
    controller: 'dashboardproperties',
    title: 'Properties',
    bodyPadding: 0,
    padding: 0,
    width: 330,
    height: 700,
    enableColumnResize: false,
    nameColumnWidth: 170,
    valueColumnWidth: 170,
    hidden: true,
    border: true,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            scope: this,
            items: [
                { text: 'Save', width: '100px', handler: 'onSave', glyph: 'xf0c7@FontAwesome' },
                { text: 'Apply', width: '100px', handler: 'onApply', glyph: 'xf0c7@FontAwesome' },
                { text: 'Cancel', width: '100px', handler: 'onCancel', glyph: 'xf12d@FontAwesome' }
            ]
        }
    ]


//    function() {
//    this.prototype.alternateSource = [{
//        firstName: 'Mike',
//        lastName: 'Bray',
//        dob: new Date(1986, 3, 15),
//        color: 'Red',
//        score: null
//    }, {
//        firstName: {
//            displayName: 'First Name'
//        },
//        lastName: {
//            displayName: 'Last Name'
//        },
//        dob: {
//            displayName: 'D.O.B'
//        },
//        color: {
//            displayName: 'Color',
//            editor: {
//                xtype: 'combobox',
//                store: ['Red', 'Green', 'Blue'],
//                forceSelection: true
//            },
//            renderer: function(v){
//                var lower = v.toLowerCase();
//                return Ext.String.format('<span style="color: {0};">{1}</span>', lower, v);
//            }
//        }, 
//        score: {
//            displayName: 'Score',
//            type: 'number'
//        }
//    }];
//}

    //source: {
    //    "(name)": "My Object",
    //    "Created": Ext.Date.parse('10/15/2006', 'm/d/Y'),
    //    "Available": false,
    //    "Version": 0.01,
    //    "Description": "A test object"
    //},

    //buttons: [
    //    {
    //        text: 'Apply',
    //        scope: this,
    //        handler: function () {
    //            this.grabConfig();
    //        }
    //    },
    //    {
    //        text: 'OK',
    //        scope: this,
    //        handler: function () {
    //            dashboard.dashboardPropertiesVisible = false;
    //            this.panelHeader.ownerCt.el.dom.style.borderWidth = '1px'
    //            this.panelHeader.ownerCt.el.dom.style.borderColor = '#6084a8'
    //            this.grabConfig();
    //            this.hide();
    //        }
    //    },
    //    {
    //        text: 'Cancel',
    //        scope: this,
    //        handler: function () {
    //            dashboard.dashboardPropertiesVisible = false;
    //            this.panelHeader.ownerCt.el.dom.style.borderWidth = '1px'
    //            this.panelHeader.ownerCt.el.dom.style.borderColor = '#6084a8'
    //            this.hide();
    //        }
    //    }
    //],
});
