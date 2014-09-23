Ext.define('widget.d3radial', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    statics: {
        addStyles: function (styles) { this.callParent(arguments); },
        angularCode: function (xclass) {
            var controller = xclass + 'Controller';
            var service = xclass + 'Service';
            var directive = xclass;

            //*********************************************************** do not modify above this line




            this.addStyles([
                '.node circle {' +
                '    fill: #fff;' +
                '    stroke: steelblue;' +
                '    stroke-width: 1.5px;' +
                '}' +
                '' +
                '.node {' +
                '    font: 10px sans-serif;' +
                '}' +
                '' +
                '.link {' +
                '    fill: none;' +
                '    stroke: #ccc;' +
                '    stroke-width: 1.5px;' +
               '}' +
               ''
            ]);



            angular.module('app')
            .factory(service, ['$http', '$q', function ($http, $q) { }])
            .directive(directive, function () {
                return {
                    restrict: 'A',
                    scope: { widgetdata: '=' },
                    replace: true,
                    template: '<div id="theRadial" xstyle="width:600px;height:900px;"></div>',
                    controller: ['$scope', service, function ($scope, service) {
                        //$scope.$watch('widgetdata.text', function () {
                            //alert($scope.widgetdata.text);
                        //});
                    }],
                    link: function (scope, elem, attrs) {



                        var diameter = 960;

                        var tree = d3.layout.tree()
                            .size([360, diameter / 2 - 120])
                            .separation(function (a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

                        var diagonal = d3.svg.diagonal.radial()
                            .projection(function (d) { return [d.y, d.x / 180 * Math.PI]; });

                       // var theRadial = $('#' + 'theRadial');
                        //var theRadial = document.getElementById("theRadial");
                        var svg = d3.select(elem[0]).append("svg")
                            .attr("width", diameter)
                            .attr("height", diameter - 150)
                          .append("g")
                            .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

                        d3.json("flare.json", function (error, root) {
                            var nodes = tree.nodes(root),
                                links = tree.links(nodes);

                            var link = svg.selectAll(".link")
                                .data(links)
                              .enter().append("path")
                                .attr("class", "link")
                                .attr("d", diagonal);

                            var node = svg.selectAll(".node")
                                .data(nodes)
                              .enter().append("g")
                                .attr("class", "node")
                                .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

                            node.append("circle")
                                .attr("r", 4.5);

                            node.append("text")
                                .attr("dy", ".31em")
                                .attr("text-anchor", function (d) { return d.x < 180 ? "start" : "end"; })
                                .attr("transform", function (d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
                                .text(function (d) { return d.name; });
                        });

                        d3.select(elem[0]).style("height", diameter - 150 + "px");




                    }
                };
            });



            //*********************************************************** do not modify below this line
        }
    },
},
function (o) {
    var className = o.$className;
    var start = className.indexOf('.');
    var xclass = className.substring(start + 1);
    o.angularCode(xclass);
});


