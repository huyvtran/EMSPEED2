Ext.define('Ext.overrides.dashboard.Part', {
    override: 'Ext.dashboard.Part',

    config: {
        id: null,

        /**
         * The `Dashboard` instance that owns this `part`.
         * @property {Ext.dashboard.Panel} dashboard
         * @readonly
         */
        dashboard: null,

        /**
         * @cfg {Object/Ext.util.ObjectTemplate} viewTemplate
         * The configuration object used for creating instances of this `Part`. This is
         * used by the `createView` method to create views.
         */
        viewTemplate: {
            collapsed: '{collapsed}',
            columnIndex: '{columnIndex}',
            id: '{id}',
            widgetDataDef: '{widgetDataDef}',
            title: '{title}',
            height: '{height}'
        }
    }

});
