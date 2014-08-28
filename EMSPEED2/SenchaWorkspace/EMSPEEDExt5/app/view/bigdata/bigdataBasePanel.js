Ext.define('EMSPEEDExt5.view.bigdata.bigdataBasePanel', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassPanel',
    xtype: 'bigdataBasePanel',
    id: 'bigdataBasePanel',
    requires: [
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date'
    ],

    title: 'Big Data',
    controller: 'bigdataBasePanelController',
    layout:  'fit',
    bodyPadding: 0,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                { text: 'Load', width: '100px', handler: 'onLoadClick', glyph: 'xf1c0@FontAwesome' },
                '-',
                { text: 'Filter', width: '100px', handler: 'onFilterClick', glyph: 'xf0b0@FontAwesome' },
                { text: 'Clear', width: '100px', handler: 'onClearClick', glyph: 'xf12d@FontAwesome' },
                '-',
                { text: 'Export', width: '100px', handler: 'onExportClick', glyph: 'xf019@FontAwesome' }
            ]
        }
    ],

    initComponent: function () {

        //var store = Ext.create('Ext.data.Store', {
        //    //groupField: 'department',
        //    model: 'EMSPEEDExt5.model.Employee'
        //});


        this.items = [
            {
                xtype: 'grid',
                reference: 'gridBigData',
                id: 'gridBigData',

                //title: 'Buffered Grid of 5,000 random records',
                //border: true,
                store: 'EmployeesStore',
                loadMask: true,
                plugins: 'bufferedrenderer',
                //plugins: {
                //    ptype: 'bufferedrenderer',
                //    trailingBufferZone: 10,  // Keep 10 rows rendered in the table behind scroll
                //    leadingBufferZone: 20   // Keep 20 rows rendered in the table ahead of scroll
                //},

                selModel: {
                    pruneRemoved: false
                },
                viewConfig: {
                    trackOver: false
                },
                //features: [{
                //    ftype: 'groupingsummary',
                //    groupHeaderTpl: '{columnName}: {name}',
                //    showSummaryRow: false
                //}],
                // grid columns
                columns: [{
                    xtype: 'rownumberer',
                    width: 40,
                    sortable: false
                }, {
                    text: 'Id',
                    sortable: true,
                    dataIndex: 'employeeNo',
                    groupable: false,
                    width: 80
                }, {
                    text: 'Name',
                    sortable: true,
                    dataIndex: 'name',
                    groupable: false,
                    width: 130
                }, {
                    text: 'Date of birth',
                    dataIndex: 'dob',
                    xtype: 'datecolumn',
                    groupable: false,
                    width: 110
                }, {
                    text: 'Join date',
                    dataIndex: 'joinDate',
                    xtype: 'datecolumn',
                    groupable: false,
                    width: 110
                }, {
                    text: 'Notice period',
                    dataIndex: 'noticePeriod',
                    width: 120
                }, {
                    text: 'Email address',
                    dataIndex: 'email',
                    width: 220,
                    groupable: false,
                    renderer: function (v) {
                        return '<a href="mailto:' + v + '">' + v + '</a>';
                    }
                }, {
                    text: 'Department',
                    dataIndex: 'department',
                    hidden: true
                }, {
                    text: 'Absences',
                    columns: [{
                        text: 'Illness',
                        dataIndex: 'sickDays',
                        width: 60,
                        groupable: false
                    }, {
                        text: 'Holidays',
                        dataIndex: 'holidayDays',
                        width: 70,
                        groupable: false
                    }, {
                        text: 'Holday Allowance',
                        dataIndex: 'holidayAllowance',
                        width: 125,
                        groupable: false
                    }]
                }, {
                    text: 'Rating',
                    width: 80,
                    sortable: true,
                    dataIndex: 'rating',
                    groupable: false
                }, {
                    text: 'Salary',
                    width: 130,
                    sortable: true,
                    dataIndex: 'salary',
                    align: 'right',
                    renderer: Ext.util.Format.usMoney,
                    groupable: false
                }]
            }
        ];
        this.callParent();
        com.endLoading();

        //Ext.getBody().mask('Generating fake data...');
        //makeData(Ext.getCmp('gridBigData').getStore());
        //makeData(this.down('grid').getStore());

        //makeData(store);


    }



});

var data = [],
    perBatch = 1000,
    max = 5000;

    function random(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    function getEmployeeNo() {
        var out = '',
            i = 0;
        for (; i < 6; ++i) {
            out += random(0, 7);
        }
        return out;
    }

    /**
     * Returns an array of fake data
     * @param {Number} count The number of fake rows to create data for
     * @return {Array} The fake record data, suitable for usage with an ArrayReader
     */
    function createFakeData(count, data) {
        var firstNames   = ['Ed', 'Tommy', 'Aaron', 'Abe', 'Jamie', 'Adam', 'Dave', 'David', 'Jay', 'Nicolas', 'Nige'],
            lastNames    = ['Spencer', 'Maintz', 'Conran', 'Elias', 'Avins', 'Mishcon', 'Kaneda', 'Davis', 'Robinson', 'Ferrero', 'White'],
            departments  = ['Engineering', 'Sales', 'Marketing', 'Managment', 'Support', 'Administration'],
            ratings      = [1, 2, 3, 4, 5],
            salaries     = [100, 400, 900, 1500, 1000000],
            noticePeriods= ['2 weeks', '1 month', '3 months'],
            i;

        for (i = 0; i < (count || 25); i++) {
            var firstName   = firstNames[random(0, firstNames.length - 1)],
                lastName    = lastNames[random(0, lastNames.length - 1)],
                name        = Ext.String.format("{0} {1}", firstName, lastName),
                email       = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@sentcha.com',
                rating      = ratings[(name === 'Nige White') ? 0 : random(0, ratings.length - 1)],
                salary      = salaries[(name === 'Nige White') ? 4 : random(0, salaries.length - 1)],
                department  = departments[random(0, departments.length - 1)],
                ageInYears  = random(23, 55),
                dob         = new Date(new Date().getFullYear() - ageInYears, random(0, 11), random(0, 31)),
                joinDate    = new Date(new Date() - random(60, 2000) * 1000 * 60 * 60 * 24),
                sickDays    = random(0, 10),
                holidayDays = random(0, 10),
                holidayAllowance = random(20, 40);

            data.push({
                employeeNo: getEmployeeNo(),
                rating: rating,
                salary: salary,
                forename: firstName,
                surname: lastName,
                email: email,
                department: department,
                dob: dob,
                joinDate: joinDate,
                sickDays: sickDays,
                holidayDays: holidayDays,
                holidayAllowance: holidayAllowance,
                noticePeriod: noticePeriods[random(0, noticePeriods.length - 1)]
            });
        }
    }


    function makeData(store) {
        createFakeData(perBatch, data);
        if (data.length < max) {
            setTimeout(makeData(store), 10);
        } else {
            Ext.getBody().unmask();
            store.loadData(data);
        }
    }
