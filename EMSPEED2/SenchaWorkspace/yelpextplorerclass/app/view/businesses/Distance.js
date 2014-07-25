
Ext.define("yelpextplorerclass.view.businesses.Distance",{
    "extend": "Ext.chart.CartesianChart",
    "xtype": "businessesdistance",
    requires: ['Ext.chart.interactions.ItemHighlight'],
    minimum:1, 
    maximum:5, 
    majorTickSteps: 4,
    renderConfig: {
        business: null
    },
    publishes: ['business'],

    interactions: ['itemhighlight'],

    updateHighlightItem: function (item) {        this.callParent(arguments);
        if (item) {
            this.setBusiness(item.record);
        }
    },


    requires: ['Ext.chart.axis.Numeric', 'Ext.chart.axis.Category', 'Ext.chart.series.Scatter'],
    axes: [
        {
            type: 'numeric',
            position: 'bottom',
            title: 'Distance (meters)'
        }, 

        {
            type: 'numeric',
            position: 'left',
            title: 'Rating (stars)'
        }
    ],

    series: [{
        type: 'scatter',
        xField: 'distance',
        yField: 'stars',
        marker: {
            type: 'circle',
            fillStyle: 'red',
            radius: 8
        }
    }]

}); 