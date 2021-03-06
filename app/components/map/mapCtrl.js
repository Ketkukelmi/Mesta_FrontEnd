app.controller('mapCtrl', ['$scope', 'mapService', function ($scope, mapService) {
    $scope.mapInitialized = false;

    $scope.initMap = function () {
        // Prevent map from initializing twice
        if ($scope.mapInitialized == false) {
            $scope.mapInitialized = true;
            mapService.initMapReturn();
        }
    };

    $scope.changeCanAddMarker = function () {
        mapService.changeCanAddMarker();
        //console.log("changeCanAddMarker called");
    };

    $scope.goToLocation = function(lat, long){
        mapService.goToLocation(lat,long);
    };

    $scope.$on("locations", function(event, locations) {
        mapService.setLocations(locations);
    });
}]);
