angular.module('models', ['ui.visibility']);
angular.module('ui.visibility', [])
  .factory('Visibility', function ($window) {
      return $window.Visibility;
  });
'use strict';
angular.module('models')
.factory('RandomBaseDataModel', function (WidgetDataModel, Visibility) {
    function RandomBaseDataModel() {
    }

    RandomBaseDataModel.prototype = Object.create(WidgetDataModel.prototype);
    RandomBaseDataModel.prototype.constructor = WidgetDataModel;

    angular.extend(RandomBaseDataModel.prototype, {
        init: function () {
            this.stopUpdates = false;
            this.visibilityListener = Visibility.change(function (e, state) {
                if (state === 'hidden') {
                    this.stopUpdates = true;
                } else {
                    this.stopUpdates = false;
                }
            }.bind(this));
        },

        updateScope: function (data) {
            if (!this.stopUpdates) {
                WidgetDataModel.prototype.updateScope.call(this, data);
            }
        },

        destroy: function () {
            WidgetDataModel.prototype.destroy.call(this);
            Visibility.unbind(this.visibilityListener);
        }
    });

    return RandomBaseDataModel;
})
.factory('RandomTopNDataModel', function (RandomBaseDataModel, $interval) {
    function RandomTopNDataModel() {
    }

    RandomTopNDataModel.prototype = Object.create(RandomBaseDataModel.prototype);

    RandomTopNDataModel.prototype.init = function () {
        this.intervalPromise = $interval(function () {
            var topTen = _.map(_.range(0, 10), function (index) {
                return {
                    name: 'item' + index,
                    value: Math.floor(Math.random() * 100)
                };
            });
            this.updateScope(topTen);
        }.bind(this), 500);
    };

    RandomTopNDataModel.prototype.destroy = function () {
        RandomBaseDataModel.prototype.destroy.call(this);
        $interval.cancel(this.intervalPromise);
    };

    return RandomTopNDataModel;
})
.factory('RandomDataModel', function ($interval, WidgetDataModel) {
    function RandomDataModel() {
    }

    RandomDataModel.prototype = Object.create(WidgetDataModel.prototype);
    RandomDataModel.prototype.constructor = WidgetDataModel;

    angular.extend(RandomDataModel.prototype, {
        init: function () {
            this.updateScope('-');
            this.intervalPromise = $interval(function () {
                var value = Math.floor(Math.random() * 100);
                this.updateScope(value);
            }.bind(this), 500);
        },

        destroy: function () {
            WidgetDataModel.prototype.destroy.call(this);
            $interval.cancel(this.intervalPromise);
        }
    });

    return RandomDataModel;
})
.factory('RandomTimeSeriesDataModel', function (RandomBaseTimeSeriesDataModel) {
    function RandomTimeSeriesDataModel(options) {
        RandomBaseTimeSeriesDataModel.call(this, options);
    }

    RandomTimeSeriesDataModel.prototype = Object.create(RandomBaseTimeSeriesDataModel.prototype);

    angular.extend(RandomTimeSeriesDataModel.prototype, {
        updateScope: function (data) {
            var chart = {
                data: data,
                max: 30,
                chartOptions: {
                    vAxis: {}
                }
            };

            RandomBaseTimeSeriesDataModel.prototype.updateScope.call(this, chart);
        }
    });

    return RandomTimeSeriesDataModel;
})
.factory('RandomMinutesDataModel', function (RandomBaseDataModel, $interval) {
    function RandomTimeSeriesDataModel(options) {
        this.limit = (options && options.limit) ? options.limit : 500;
    }

    RandomTimeSeriesDataModel.prototype = Object.create(RandomBaseDataModel.prototype);

    RandomTimeSeriesDataModel.prototype.init = function () {
        this.generateChart();
        this.intervalPromise = $interval(this.generateChart.bind(this), 2000);
    };

    RandomTimeSeriesDataModel.prototype.generateChart = function () {
        var minuteCount = 30;
        var data = [];
        var limit = this.limit;
        var chartValue = limit / 2;

        function nextValue() {
            chartValue += Math.random() * (limit * 0.4) - (limit * 0.2);
            chartValue = chartValue < 0 ? 0 : chartValue > limit ? limit : chartValue;
            return chartValue;
        }

        var now = Date.now();

        for (var i = minuteCount - 1; i >= 0; i--) {
            data.push({
                timestamp: now - i * 1000 * 60,
                value: nextValue()
            });
        }

        var widgetData = [
        {
            key: 'Data',
            values: data
        }
        ];

        this.updateScope(widgetData);
    };

    RandomTimeSeriesDataModel.prototype.destroy = function () {
        RandomBaseDataModel.prototype.destroy.call(this);
        $interval.cancel(this.intervalPromise);
    };

    return RandomTimeSeriesDataModel;
});