Ext.define('EMSPEEDExt5.clonepmt.view.clonepmtCreateClone', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.clonepmtCreateClone',
    id: 'clonepmtCreateClone',
    //layout: 'fit',
    title: 'Clone Study',
    width: '100%',
    collapsible: false,
    collapsed: false,
    border: true,
    style: {
        fontFamily: 'Univers 57 condensed',
        color: '#000000',
        fontSize: '14px',
        borderColor: '#cccccc',
        borderStyle: 'solid'
    },
    //margin: '10 10 10 0',
    items: [{
        xtype: 'container',
        layout: 'hbox',
        margin: '10 0 10 0',
        items: [
        {
            xtype: 'textfield',
            name: 'pmtCloneName',
            id: 'txtPmtCloneName',
            allowBlank: false,
            readOnly: true,
            emptyText: "Select a study below...",
            fieldLabel: 'Study Name',
            margin: '0 5 0 10',
            flex: 4,
            labelAlign: 'left'
        },
        {
            xtype: 'textfield',
            name: 'newPmtCloneName',
            id: 'txtNewPmtCloneName',
            allowBlank: false,
            emptyText: "New Study Name...",
            fieldLabel: 'New Study Name',
            labelWidth: 125,
            margin: '0 5 0 10',
            flex: 3,
            labelAlign: 'left',
            regex: /^[a-zA-Z0-9 ]+/,
            maskRe: /^[a-zA-Z0-9 ]+/,
            regexText: 'Please do not use special characters.'
        },
        { xtype: 'button', margin: '0 5 0 10', width: 100, id: 'btnCreateClone', text: 'Create' }
        ]
    }
    ]
});

