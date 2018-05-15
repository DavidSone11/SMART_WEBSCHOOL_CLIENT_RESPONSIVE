
var app = angular.module("sbAdminApp");
app.directive("sidebar", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/sidebar/sidebar.tmpl.html',
     
        controller: function ($scope) {



        }

    }
}]);