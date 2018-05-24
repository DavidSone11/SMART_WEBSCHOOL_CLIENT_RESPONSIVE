
var app = angular.module("sbAdminApp");
app.directive("uploadFile", function ($compile) {

    return {
        restrict: 'E',
        replace: true,
        scope: {
            name: '@',
            email: '@',
            updateCust:'&'
        },  // isolated scope
        templateUrl: 'ng/custom-directives/fileupload.tmpl.html',
        link:function(scope,elem,attrs){

        },
        controller:function($scope){

        }



    }

});