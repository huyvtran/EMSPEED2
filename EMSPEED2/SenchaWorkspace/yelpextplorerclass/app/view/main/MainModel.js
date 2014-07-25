/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('yelpextplorerclass.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        business: null,
        category: null
    },

    formulas: {
        school: {
            bind: '{schoolCombo.value}',
            get: function (data) {
                //return { data: { id: data, latitude: 33.6751155, longitude: -95.5316914 } };
                var store = data && this.getStore('schools');
                return store && store.getById(data);
            }
        },
        location: function (get) {
            var school = get('school');
            if (school) {
                return {
                    latitude: school.data.latitude,
                    longitude: school.data.longitude
                }
            }
        }

    },

    stores: {
        schools: {
            model: 'yelpextplorerclass.model.School',
            autoLoad: true,
            listeners: {
                load: {
                    fn: 'onSchoolsLoadFirstTime',
                    single: true
                }
            }
        },
        businesses: {
            model: 'yelpextplorerclass.model.Business',
            autoLoad: true,
            pageSize: 400,
            remoteFilter: true,
            filters: [{
                property: 'schoolid',
                value: '{school.id}'
            }],
            listeners: {
                load: {
                    fn: 'onBusinessesLoad'
                }
            }
        },
        businessesForCategory: {
            source: '{businesses}',
            filters: [{
                category: '{category}',
                id: 'cat',
                filterFn: function(business) {
                    if (!this.category) {
                        return true; // treat no selection as "All"
                    }
                    var c = this.category.get('text');
                    return (c === 'All') || Ext.Array.contains(business.get('categories'), c);
                }
            }]
        },

        sortableBusinesses: {
            source: '{businesses}'
        },
        categories: {
            type: 'tree',
            model: 'yelpextplorerclass.model.Category',
            autoLoad: true,
            rootVisible: true,
            root: {
                text: 'All',
                expanded: true
            }
        }

    }

});