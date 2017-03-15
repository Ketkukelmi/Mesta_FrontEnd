/**
 * Created by Roman on 2/18/2017.
 */

app.controller('mapCtrl', function ($scope, mapService, $rootScope) {
    
    
    $scope.initMap = function(){
        mapService.initMapReturn();
    }
    
    $rootScope.returnLan = function(){
        return mapService.returnLan();
    }
    $rootScope.returnLng = function(){
        return mapService.returnLng();
    }
    

});
