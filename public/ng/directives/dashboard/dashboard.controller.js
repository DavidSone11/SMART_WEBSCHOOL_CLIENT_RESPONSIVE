
var app = angular.module("sbAdminApp");
app.controller("DashboardController", function ($scope) {

    $scope.name = "santosh1"
    $scope.email = "santosh1@gmail.com"


    $scope.updateCustomer  = function(msg){
        console.log(""+msg);
    }
  
});