






app.controller('mapCtrl', function ($scope, mapService, $rootScope) {


    $scope.initMap2 = function () {
        mapService.initMap2Return();
    }
    $scope.onMapClick = function () {
        mapService.onMapClickReturn();
    }

    $('map-view').on('click', function(){
        console.log("click runs")
        $scope.latitude = $rootScope.returnLat();
        $scope.longitude = $rootScope.returnLng();

    })

    $rootScope.returnLat = function () {
        console.log("lat runs");
        $scope.newLan = mapService.returnLat();
        $rootScope.$broadcast('Lat',$scope.newLan);
    }
    $rootScope.returnLng = function () {
        $scope.newLng = mapService.returnLng();
        $rootScope.$broadcast('Lng',$scope.newLng);
    }

});
/*$scope.initMap = function(){
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
*/
