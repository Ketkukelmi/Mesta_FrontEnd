app.controller('mapCtrl', function ($scope, mapService, $rootScope) {
    $scope.mapInitialized = false;

    $scope.initMap = function () {
        if ($scope.mapInitialized == false) {
            $scope.mapInitialized = true;
            mapService.initMapReturn();
        }
    }
    $scope.changeCanAddMarker = function () {
        //mapService.changeCanAddMarker();
        console.log("changeCanAddMarker called");
    }
});
