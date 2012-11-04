/// <reference path="../plugins/ng-grid-reorderable.js" />
/// <reference path="../ng-grid-1.0.0.debug.js" />

function userController($scope) {
    var self = this;
    $scope.mySelections = [];
    $scope.mySelection = undefined;
    $scope.myData = [{name: "MoroniMoroniMoroniMoroniMoroniMoroniMoroni", age: 50, born: '350 A.D.'},
                   {name: "Tiancum", age: 47, born: '350 A.D.'},
                   {name: "Jacob", age: 27, born: '350 A.D.'},
                   {name: "Nephi", age: 29, born: '350 A.D.'},
                   {name: "Enos", age: 34, born: '350 A.D.'},
                   {name: "Ether", age: 42, born: '350 A.D.'},
                   {name: "Alma", age: 43, born: '350 A.D.'},
                   {name: "Jared", age: 21, born: '350 A.D.'},
                   {name: "Gideon", age: 35, born: '350 B.C.'},
                   {name: "Jarom", age: 22, born: '350 B.C.'},
                   {name: "Omni", age: 31, born: '350 B.C.'},
                   {name: "Mosiah", age: 68, born: '350 B.C.'},
                   {name: "Helaman", age: 56, born: '350 A.D.'},
                   {name: "Sam", age: 17, born: '400 B.C.'},
                   {name: "Laman", age: 26, born: '380 B.C.'},
                   {name: "Lemuel", age: 26, born: '380 B.C.'}];
    $scope.gridOptions = {
        data: $scope.myData,
        selectedItems: $scope.mySelections,
        selectedItem: $scope.mySelection,
        multiSelect: true,
        plugins: [new ngGridReorderable()],
        columnDefs: [{ field: 'name', displayName: 'Very Long Name Title', width: "auto"},
                     { field: 'age', width: 100 },
                     { field: 'born', width: 100 }]
    };
    
    $scope.changeData = function(){
        $scope.myData.splice(7,0, {name: "MoroniMoroniMoroniMoroniMoroniMoroniMoroni", age: 50, born: '350 A.D.'},
                                {name: "Tiancum", age: 47, born: '350 A.D.'},
                                {name: "Jacob", age: 27, born: '350 A.D.'},
                                {name: "Nephi", age: 29, born: '350 A.D.'},
                                {name: "Enos", age: 34, born: '350 A.D.'},
                                {name: "Ether", age: 42, born: '350 A.D.'},
                                {name: "Alma", age: 43, born: '350 A.D.'},
                                {name: "Jared", age: 21, born: '350 A.D.'},
                                {name: "Gideon", age: 35, born: '350 B.C.'},
                                {name: "Jarom", age: 22, born: '350 B.C.'},
                                {name: "Omni", age: 31, born: '350 B.C.'},
                                {name: "Mosiah", age: 68, born: '350 B.C.'},
                                {name: "Helaman", age: 56, born: '350 A.D.'},
                                {name: "Sam", age: 17, born: '400 B.C.'},
                                {name: "Laman", age: 26, born: '380 B.C.'});
      };
};