/**
 * Created by holbech on 02/08/16.
 */
var map, infoWindow, global, pos;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 20
    });

    infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
            getURL("https://kea-alt-del.dk/twitter/api/?geo="+pos.lat+","+pos.lng+",10km", function(d){
                console.log("data received");
                console.log(d);
                var i=0;
                for(; i<d.statuses.length; i++){
                    console.log(d.statuses[i].geo)
                }
                global=d;
            })
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

function getURL(url, callback) {
    console.log("geturl called");
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200){
                callback(JSON.parse(xmlhttp.responseText));
            }
            else {
                console.log('We had an error, status code: ', xmlhttp.status);
            }
        }
    }

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}