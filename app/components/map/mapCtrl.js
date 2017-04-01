app.controller('mapCtrl', function ($scope, mapService, $rootScope) {
    $scope.mapInitialized = false;

    $scope.initMap = function () {
        // Prevent map from initializing twice
        if ($scope.mapInitialized == false) {
            $scope.mapInitialized = true;
            mapService.initMapReturn();
        }
    }
    $scope.changeCanAddMarker = function () {
        mapService.changeCanAddMarker();
        //console.log("changeCanAddMarker called");
    }
});
