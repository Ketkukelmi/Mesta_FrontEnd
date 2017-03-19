app.controller('mapCtrl', function ($scope, mapService, $rootScope) {
    $scope.initMap = function(){
        mapService.initMapReturn();
        console.log("init runs")
    }

    $('map-view').on('click', function(){
        console.log("click runs")
        $scope.latitude = $rootScope.returnLan();
        $scope.longitude = $rootScope.returnLng();

    })


    $rootScope.returnLan = function(){

        console.log("laN runs")
        $scope.newLat = mapService.returnLan();
        $rootScope.$broadcast('Lat', $scope.newLat);

    }
    $rootScope.returnLng = function(){
        $scope.newLong =  mapService.returnLng();
        $rootScope.$broadcast('Lng', $scope.newLong);
    }


});
