app.controller('addCtrl', ['$scope', '$rootScope', 'mapService', 'postService', function ($scope, $rootScope, mapService, postService) {
    $scope.latitude = "";
    $scope.longitude = "";
    $scope.name = "";
    $scope.description = "";
    $scope.tags = "";
    $scope.categories = "";

    $scope.submitFiles = function($files) {
        angular.forEach($files, function (value, key) {
            $scope.image = value;
        });
    };

    $scope.addLocation = function () {
        if($scope.latitude != 0 && $scope.longitude != 0 && $scope.name != "" && $scope.categories != ""){
            postService.addLocation($scope.latitude, $scope.longitude, $scope.name, $scope.description, $scope.tags,$scope.categories, $scope.image).then(function(result) {
                postService.getAllLocations().then(function(result) {
                    $rootScope.$broadcast("locations", result);
                });
            });
            toggleAddView();
        }else{
            alert("Please fill in all the required fields! (Name and catergory)");
        }
    };

    $('map-view').on('click', function () {
        $scope.latitude = mapService.returnLan();
        $scope.longitude = mapService.returnLng();
    });

}]);

app.directive("ngFiles", ["$parse", function ($parse) {
    return function(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on("change", function (event) {
            onChange(scope, { $files: event.target.files });
        });
    };
} ]);
