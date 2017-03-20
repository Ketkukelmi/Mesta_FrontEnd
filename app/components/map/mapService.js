app.factory('mapService', function () {
    var mymap;
    var marker;
    var newmarker;
    var newmarkers = new L.FeatureGroup();
    var newLat;
    var newLng;


    function initMap2() {
        mymap = L.map('mapid').setView([65.011, 25.469],15);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1Ijoia2V0a3VrZWxtaSIsImEiOiJjajBpZWk5NTYwMDA3MnFtZm9tbGdnaW5oIn0.Xg0J2fG9OwyYG0MRFsbLUw'
        }).addTo(mymap);

        marker = L.marker([65.011, 25.469]).addTo(mymap);


        function onMapClick(e) {

            DeleteMarkers();
            newmarker = new L.marker(e.latlng).addTo(mymap);
            newmarkers.push(newmarker);

            newLat = (e.latlng.lat);
            newLng = (e.latlng.lng);
            //console.log(newLat , newLng);
        }

        function DeleteMarkers() {
            //Loop through all the markers and remove
            for (var i = 0; i < newmarkers.length; i++) {
                mymap.removeLayer(newmarker);
                //mymap.removeLayer(this.newmarkers[i]);
            }
            newmarkers = [];
        }
        mymap.on('click', onMapClick);
    }

    return {
        initMap2Return: function () {
            initMap2();
        },
        returnLat: function(){
        return newLat;
        },
        returnLng: function(){
        return newLng;
        }
    }

    return{

        onMapClickReturn: function () {
            onMapClick();
        }
    }
});

/*app.factory('mapService', function() {
    var markers = [];
    var map;
    var infoWindow;
    var newLat = 0;
    var newLong = 0;

    function initMap(){
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 65.008802, lng: 25.472814},
            zoom: 15
        });
        infoWindow = new google.maps.InfoWindow({map: map});

        google.maps.event.addListener(map, 'click', function(event) {
            DeleteMarkers();
            placeMarker(event.latLng);

        });
        function placeMarker(location) {

            var marker = new google.maps.Marker({
                position: location,
                map: map

            });
            markers.push(marker);

            newLat = marker.position.lat();
            newLong = marker.position.lng();
        }

        function DeleteMarkers() {
            //Loop through all the markers and remove
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            markers = [];
        };

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

        /*
        $.getJSON("http://api.the-mesta.com/location/all", function(result) {
            for (i = 0; i < result.length; i++) {
                var location = new google.maps.LatLng(result[i]["latitude"], result[i]["longitude"]);
                var marker = new google.maps.Marker({
                    map: map,
                    title: result[i]["name"],
                    position: location
                });

				var infowindow = new google.maps.InfoWindow();

                google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow) {
                    return function() {
						hideInfoWindows();
                        infowindow.setContent(content);
                        infowindow.open(map, marker);
                    };
                })(marker, result[i]["description"], infowindow));

				markers.push(infowindow);
            }
        })
    };
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    };


    return {
        initMapReturn: function(){
            initMap();
        },
        returnLan: function(){
            return newLat;
        },
        returnLng: function(){
            return newLong;
        }
    }

});
*/
