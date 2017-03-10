/**
 * Created by Roman on 2/18/2017.
 */

app.factory('mapService', function() {
    
    var map;
    var infoWindow;
    function initMap(){
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 65.008802, lng: 25.472814},
            zoom: 15
        });
        infoWindow = new google.maps.InfoWindow({map: map});
        initLocation();
        
    };
    function initLocation(){
        
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('User location');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
    };
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      };
    
    
    return {
        initMapReturn: initMap()
    }
    
});
