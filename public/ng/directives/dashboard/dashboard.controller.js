
var app = angular.module("sbAdminApp");
app.controller("DashboardController", function ($scope) {

    $scope.name = "santosh"
    $scope.updateCustomer  = function(msg){
        console.log(""+msg);
    }
  
});