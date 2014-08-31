Ext.define('EMSPEEDExt5.clonepmt.view.clonepmtHistory', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.clonepmtHistory',
    id: 'clonepmtHistory',
    //layout: 'fit',
    title: 'Study History',
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
    width: '100%',
    //minHeight: 0,
    //maxHeight: 375,
    items:
        [
        {
            xtype: 'grid',
            id: 'grdClonePmtHistory',
            //autoScroll: true,
            width: '100%',
            height: 500,
            disableSelection: false,
            enableCtxMenu: false,  // turn off header context menu
            enableColLock: false,  // turn off column lock context items
            enableColumnMove: false,  // turn off column reorder drag drop
            enableColumnResize: false,  // turn off column resize for whole grid
            enableRowHeightSync: true,
            viewConfig: {
                emptyText: 'No PMT clones found for project.'
            },
            margin: '10 0 10 0',
            listeners: {
                itemclick: function (view, record, item, index, e) {
                    var cloneName = record.get('cloneName');
                    Ext.getCmp('txtPmtCloneName').setRawValue(cloneName);
                }
            },
            columns: [
                {
                    header: 'Study Name',
                    dataIndex: 'cloneName',
                    flex: 3,
                    sortable: true,
                    menuDisabled: true
                },
                {
                    header: 'Date / Timestamp',
                    dataIndex: 'createDate',
                    flex: 2,
                    sortable: true,
                    menuDisabled: true,
                    renderer: function (v, j) {
                        d = new Date(v);
                        var month = d.getMonth() + 1
                        var day = d.getDate();
                        var year = d.getFullYear();
                        var hour = d.getHours() + 1;
                        var minute = d.getMinutes() + 1;
                        var second = d.getSeconds() + 1;
                        var shortD = com.pad(month) + "/" + com.pad(day) + "/" + year + " " + com.pad(hour) + ":" + com.pad(minute) + ":" + com.pad(second);
                        return shortD;
                    }
                },
                {
                    header: 'URL',
                    dataIndex: 'cloneURL',
                    flex: 1,
                    sortable: true,
                    menuDisabled: true,
                    clickable: true,
                    renderer: function (value, meta, record) {
                        var result = "";
                        if (record.data.cloneURL != "") {
                            var type = 'PMT Cloned Study';
                            var urlString = Ext.String.format('LoadingPage.aspx?type={1}&url={0}', slb.emspeed.Common.URIComponent.encode(record.data.cloneURL), type);
                            result = Ext.String.format('<b><span class="cloneLink" style="text-decoration: underline;font-family: Univers 57 condensed; color: Blue; cursor:pointer;" data-url="{0}">' + type + '</span></b>', urlString);
                        }
                        return result
                    }
                }
            ]
        }
        ]
});

$(function () {
    $(document.body).on("click", '.cloneLink', function () {
        if (typeof ALLOW_CHROME === "undefined") {
            if (!Ext.isIE) {
                launchDetailPanel = false;
                var newMsg = '<span>PMT Cloned Studies are only available using Internet Explorer as your browser.  If you wish to use the PMT Clone Study feature, then please close your current browser and return using Internet Explorer.</span>';
                Ext.Msg.show({
                    title: 'Incompatible Browser',
                    msg: newMsg,
                    buttons: Ext.MessageBox.OK,
                    fn: Ext.emptyFn,
                    closable: false,
                    icon: Ext.Msg.INFO
                });
                return false;
            }
        }
        var url = $(this).attr("data-url");
        com.popUpWindow(url);
    });
});
