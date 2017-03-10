/**
 * Created by Roman on 2/18/2017.
 */

app.controller('mapCtrl', function ($scope, mapService) {
    
    $scope.initMap = function(){
        mapService.initMapReturn();
    }

});
