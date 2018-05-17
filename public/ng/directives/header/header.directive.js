
"use strict";
var app = angular.module("sbAdminApp");
app.directive("mainHeader", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/header/header.tmpl.html',

        controller: function ($scope, $state, $window) {
            $scope.isToggle = false;
            $scope.toggleSideBar = function () {
                $(function () {
                    if ($scope.isToggle) {
                        $('#left-sidebar').animate({ width: "70px" });
                        $('#main-content-wrapper').animate({ margin: "72px 0px 0 30px" });
                        $('.main-header').animate({ margin: "0 71px" });
                        $('.sidebar-footer').hide();

                        
                        

                    } else {
                        $('#left-sidebar').animate({ width: "230px" });
                        $('.main-header').animate({ margin: "0 230px" });
                        $('#main-content-wrapper').animate({ margin: "72px 0px 0 231px" });
                        $('.sidebar-footer').show();
                    }
                });
                $scope.isToggle = !$scope.isToggle;
            }



            $scope.logout = function () {





            }



        }

    }
}]);