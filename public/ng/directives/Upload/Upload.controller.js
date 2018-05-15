
var app = angular.module("sbAdminApp");
app.controller("UploadController", ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {

    $scope.files = [];
    $scope.user ={
        data:''
    }
    
    $scope.getUserUploads = function (query, timeout) {
        return $http.get('http://localhost:4000/api/v1/userUpload/findByfilename?name=' + query);

    }


    $scope.SelectedImage = function (selected) {
        if (selected) {

            $scope.user.data = selected.originalObject.img.data["data"];
            $scope.contentType = selected.originalObject.img.contentType;
            $scope.base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(selected.originalObject.img.data["data"])));
        }
    };


}]);