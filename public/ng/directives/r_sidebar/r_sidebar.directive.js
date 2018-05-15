
var app = angular.module("sbAdminApp");
app.directive("rsidebar", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/r_sidebar/r_sidebar.tmpl.html',
     
        controller: function ($scope) {



        }

    }
}]);