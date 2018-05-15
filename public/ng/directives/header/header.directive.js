
"use strict";
var app = angular.module("sbAdminApp");
app.directive("mainHeader", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/header/header.tmpl.html',

        controller: function ($scope, $state, $window) {


            $scope.logout = function () {


              


            }



        }

    }
}]);