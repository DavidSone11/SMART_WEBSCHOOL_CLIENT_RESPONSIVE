
var app = angular.module("sbAdminApp");
app.directive("rsidebar", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/r_sidebar/r_sidebar.tmpl.html',

        controller: function ($scope) {

            $scope.isToggle = false;

            $scope.rightToggler = function () {
                $(function () {
                    if ($scope.isToggle) {

                        $('#rightSidebar').animate({ width: "0px" }, "slow");
                        $('#rightSidebar').animate({ width: "0px" }, "slow");
                        $('#rightoggleBtn').animate({ left: "-60px" }, "slow");
                        // $("#main-page-wrapper").addClass("demo-nifty-settings in");
                        
                        // $("#left-sidebar").addClass("demo-nifty-settings in");

                        // $('body').css("background-color", 'black');
                        // $("body").css("opacity", 0.4);
                        // $("#main-page-wrapper").css("opacity", 1);



                    } else {


                        $('#rightSidebar').animate({ width: "83%" }, "slow");
                        // $("#main-page-wrapper").removeClass("demo-nifty-settings in");
                        // $("#left-sidebar").removeClass("demo-nifty-settings in");

                        // $('body').css("background-color", 'black');
                        // $("body").css("opacity", 1);

                        // $('#main-page-wrapper').css("background-color", 'black');

                        // $("#main-page-wrapper").css("opacity", 0.2);



                    }
                });

                $scope.isToggle = !$scope.isToggle;


            }



        }

    }
}]);