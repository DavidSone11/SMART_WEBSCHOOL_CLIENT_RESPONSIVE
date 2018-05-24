
var app = angular.module("sbAdminApp");
app.directive("uploadFile", function ($compile) {

    return {
        restrict: 'E',
        replace: true,
        scope:false,
        template: '<div>FirstName :{{name}}</div>'

    }

});