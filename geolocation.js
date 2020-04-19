have_coordinates = function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  has_location = true;
//console.log(lat,lon);
}

//produces error messages if there is a problem
onError = function(error) {
  alert('code: ' + error.code + '\n' +
  'message: ' + error.message + '\n');
}

//sets some options for geolocation like accuracy and frequency
var options = {enableHighAccuracy: true,timeout: 5000,maximumAge: 0,desiredAccuracy: 0, frequency: 1 };

//the watchPosition method of the javascript geolocation object listens for changes in position (latitude and longitude)
navigator.geolocation.watchPosition(have_coordinates, onError, options);
