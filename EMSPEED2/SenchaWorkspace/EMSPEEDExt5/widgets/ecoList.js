Ext.define('widget.ecolist', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    statics: {
        addStyles: function (styles) { this.callParent(arguments); },
        angularCode: function (xclass) {
            var controller = xclass + 'Controller';
            var service = xclass + 'Service';
            var directive = xclass;

            //*********************************************************** do not modify above this line


            this.addStyles([
                '.gridStyle {' +
                //'    border: 1px solid rgb(212,212,212);' +
                //'    font-size: 12px;' +
                '    width: 100%; ' +
                //'    height: 350px;' +
                //'    height: 100%;' +
                '}' +
                ''
            ]);


            angular.module('app')
            .factory(service, ['$http', '$q', function ($http, $q) { }])
            .directive(directive, ['$rootScope', '$log', function ($rootScope, $log) {
                return {
                    restrict: 'A',
                    scope: { widgetdata: '=' },
                    replace: false,
                    template: '' +
                    '<div class="panel-body">' +
                    '{{text}}' +
                    '&nbsp;' +
                    '{{number}}' +
                    '<p>&nbsp;</p>' +
                    //'<div class="container-fluid">' +
                    '   <div class="container-fluid" class="gridStyle" ui-grid="gridOptions" external-scopes="myViewModel" ui-grid-selection>' +
                    '   </div>' +
                    //'</div>' +
                    '',
                    controller: ['$scope', service, function ($scope, service) {

                        $scope.bell = false;
                        $scope.myViewModel = {
                            foo: function (row) {
                                $scope.bell = true;
                                $log.debug('foo');
                                if (row.entity.fa === 'bell') {
                                    row.entity.fa = 'bell-o'
                                }
                                else {
                                    row.entity.fa = 'bell'
                                }
                            }
                        };

                        function rowTemplate() {
                            return '<div ng-click="alert(a)" class="fa fa-bell fa-fw"></div><div style="xbackground-color: aquamarine" ng-click="alert(1)" ng-repeat="col in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ui-grid-cell></div>';
                        }

                        $scope.gridOptions = {
                            // rowTemplate: rowTemplate(),
                            enableColumnMenu: false,
                            multiSelect: false,
                            enableRowSelection: true,

                            data: 'myData',
                            enableSorting: true,
                            scrollVertical: false,
                            scrollHorizontal: false,
                            //showGroupPanel: true,

                            columnDefs: [
                                { displayName: '', width: 20, field: 'fa', cellTemplate: '<div><i ng-click="getExternalScopes().foo(row)" class="fa fa-{{COL_FIELD}} fa-fw"></i></div>' },
                              //{ displayName: '', width: 80, field: 'fa', cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="getExternalScopes().foo(row)" >Edit</button> ' },
                                {
                                    field: 'state',
                                    displayName: 'state',
                                    width: 50,
                                    cellTemplate: '<div  ng-click="foo()" >b</div>'
                                },
                                { displayName: 'GeMS ID', width: '20%', field: 'name', xsort: { direction: 'desc', priority: 1 } },
                              //{ displayName: 'Policy', field: 'policy', sort: { direction: 'asc', priority: 0 } },
                                { displayName: 'Description', width: '80%', field: 'description', enableSorting: false },
                              //{ displayName: 'State', field: 'state', enableSorting: false },
                              //{ displayName: 'Originated', field: 'originated', enableSorting: false },
                              //{ displayName: 'Approval', field: 'approval', enableSorting: false }
                            ]
                        };

                        $scope.gridOptions.onRegisterApi = function (gridApi) {
                            $scope.gridApi = gridApi;
                            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                                if ($scope.bell === true) {
                                    $scope.bell = false;
                                    $scope.gridApi.selection.toggleRowSelection(row);
                                }
                                //var msg = 'row selected ' + row.isSelected;
                                //$log.debug(msg);
                                if (row.isSelected === true) {
                                    $log.debug('selected: ' + row.entity.name);
                                }
                                else {
                                    $log.debug('not selected: ' + row.entity.name);
                                }

                            });
                        };
                        $scope.$on('partListChanged', function (event, args) {
                            $scope.text = args.text;
                            $scope.number = args.number;
                            switch ($scope.number) {
                                case '1':
                                    $scope.myData = [
                                        { fa: 'bell', name: '10593717', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', }
                                    ];
                                    break;
                                case '5':
                                    $scope.myData = [
                                        { fa: 'bell', name: '10593708', policy: 'Released ECO', description: 'ECO to release obsolete parts', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell', name: '10593709', policy: 'Released ECO', description: 'ECO to promote part for STS', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell', name: '10593715', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell', name: '10593716', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell', name: '10593717', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', }
                                    ];
                                    break;
                                case '3':
                                    $scope.myData = [
                                        { fa: 'bell', name: '10593715', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell', name: '10593716', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell', name: '10593717', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', }
                                    ];
                                    break;
                                case '8':
                                    $scope.myData = [
                                        { fa: 'bell', name: '10593705', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell-o', name: '10593706', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell', name: '10593707', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell', name: '10593708', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell', name: '10593709', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell', name: '10593715', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell', name: '10593716', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', },
                                        { fa: 'bell', name: '10593717', policy: 'Released ECO', description: 'the desc', state: 'Created', project: '', originated: '12/12/2014', approval: 'MG AP RS', }
                                    ];
                                    break;
                                default:
                                    $scope.myData = [
                                    ];
                            }

                        });

                    }],
                    link: function (scope, elem, attrs) {
                    }
                };
            }]);



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


