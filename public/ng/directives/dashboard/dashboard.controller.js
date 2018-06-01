
var app = angular.module("sbAdminApp");
app.controller("DashboardController", function ($scope, $interpolate, $parse, $compile) {

    $scope.name = "santosh1"
    $scope.email = "santosh1@gmail.com"

    $scope.a = 2;
    $scope.b = 3;

   
    console.log( $interpolate("Result is : {{a*b}}")($scope));

    console.log($parse("a*b")($scope));

    console.log($interpolate("Result is : {{a*b | currency : 'USD$'}}")($scope));

    $scope.updateCustomer = function (msg) {
        console.log("" + msg);
    }

});