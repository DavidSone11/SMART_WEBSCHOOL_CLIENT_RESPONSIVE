
var app = angular.module("sbAdminApp");
app.controller("DashboardController", function ($scope, $interpolate, $parse, $compile) {

    $scope.name = "santosh1"
    $scope.email = "santosh1@gmail.com"

    $scope.a = 2;
    $scope.b = 3;

    var f = $interpolate("Result is : {{a*b}}");
    var result = f($scope);
    console.log(result);
    var f1 = $parse("a*b");
    var result1 = f1($scope);
    console.log(result1);

    console.log($interpolate("Result is : {{a*b | currency : 'USD$'}}")($scope));

    $scope.updateCustomer = function (msg) {
        console.log("" + msg);
    }

});