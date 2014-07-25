
Ext.define("yelpextplorerclass.view.BusinessFilter",{
    "extend": "Ext.tree.Panel",
    "xtype": "businessfilter",
    requires: ['Ext.form.field.ComboBox'],
    rootVisible: true,
    root: {
        text: 'All'
    },

    listeners: {
        select: 'onCategorySelect'
        //scope: 'controller'
    },

    useArrows: true,
    lines: false,

    //"html": "Hello, World!!",
    //tbar: [{
    //  xtype : 'combobox',
    //  reference : 'schoolCombo',
    //  publishes : 'value',
    //  fieldLabel : 'University',
    //  labelWidth : 60,
    //  width : 180,
    //  forceSelection: true,
    //  emptyText : 'Select',

    //  //store: [[0, "USC"], [1, "MIT"], [2, "Harvard"]],
    //  bind: {
    //      store: '{schools}'
    //  },

    //  queryMode: 'local',
    //  displayField : 'name',
    //  valueField : 'id'    
    //}]
});
