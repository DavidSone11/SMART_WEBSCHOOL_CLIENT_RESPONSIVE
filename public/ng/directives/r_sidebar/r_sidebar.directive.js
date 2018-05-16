
var app = angular.module("sbAdminApp");
app.directive("rsidebar", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/r_sidebar/r_sidebar.tmpl.html',

        controller: function ($scope) {

            $scope.isToggle = true;

            $scope.rightToggler = function () {

                if ($scope.isToggle) {
                    $(function () {
                        $('#rightSidebar').animate({ width: "0px" }, "slow");
                        $('#rightoggleBtn').animate({ left: "1300px" }, "slow");
                        // $("#main-page-wrapper").css("background-color", 'black');
                        // $("#main-page-wrapper").css("opacity", 0.4);
                        $('body').css("background-color", 'black');
                        $("body").css("opacity", 0.2);

                    });

                } else {

                    $(function () {
                        $('#rightSidebar').animate({ width: "83%" }, "slow");
                        $('#rightoggleBtn').animate({ left: "178px" }, "slow");
                        // $('body').css("background-color", 'black');
                        $("body").css("opacity",1);
                    });

                }

                $scope.isToggle = !$scope.isToggle;


            }



        }

    }
}]);