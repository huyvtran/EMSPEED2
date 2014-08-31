Ext.define('EMSPEEDExt5.clonepmt.model.clonepmtHistoryModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'cloneName', type: 'string', mapping: 'cloneName' },
        { name: 'cloneURL', type: 'string', mapping: 'cloneURL' },
        {
            name: 'createDate', type: 'int', mapping: 'createDate',
            convert: function (v, rec) {
                return parseInt(v.replace('/Date(', ''));
            }
        },
        {
            name: 'lastChangeDate', type: 'int', mapping: 'lastChangeDate',
            convert: function (v, rec) {
                return parseInt(v.replace('/Date(', ''));
            }
        }
    ]
});
