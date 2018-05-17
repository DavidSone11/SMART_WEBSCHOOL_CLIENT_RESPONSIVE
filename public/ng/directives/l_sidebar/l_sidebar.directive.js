
var app = angular.module("sbAdminApp");
app.directive("lsidebar", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/l_sidebar/l_sidebar.tmpl.html',

        controller: function ($scope) {

            $(function () {
                $('.has-sub-menu').click(function (e) {
                    $(this).toggleClass('tap');
                    $(this).css({'transition': 'width 2s' });
                });


            });


        }

    }
}]);