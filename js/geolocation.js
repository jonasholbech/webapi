/**
 * Created by holbech on 28/06/16.
 */
var positionFound=false;
var debugElem = document.createElement('p');
document.body.appendChild(debugElem);

Math.toRadians = function(degrees) {
    return degrees * Math.PI / 180;
};
function logIt(){
    debugElem.innerHTML=arguments.join(" ");
}
function getDistance(lat1, lon1, lat2, lon2){
    var R = 6371000; // metres
    var φ1 = Math.toRadians(lat1);
    var φ2 = Math.toRadians(lat2);
    var Δφ = Math.toRadians(lat2-lat1);
    var Δλ = Math.toRadians(lon2-lon1);

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c/1000;//Kilometers
}
/*
var watchID = navigator.geolocation.watchPosition(function(position) {
    positionFound=true;
    console.log(position.coords.latitude, position.coords.longitude);

    debugElem.innerHTML=updates+": "+position.coords.latitude +" "+ position.coords.longitude;
    //console.log(
     //getDistance(
     //position.coords.latitude,
     //position.coords.longitude,
     //55.706353,
     //12.538980
     //)
     //);
});*/

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);