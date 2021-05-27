let map;
let marker;
let watchID;
let geoLoc;



function initMap() {

    const myLatLng = {lat: -25.363, lng: 131.044};

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatLng,
    
  });

  marker = new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Tu ubicación"
  });
  
  GetPosition();
}
function GetPosition(){
    if (navigator.geolocation){
        var options = {timeout:30000};
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler, options);
    } else{
        alert("Lo sentimos, el explorador no soporta geolocalizacion.");
    }
}

function showLocationOnMap(position){
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;

    console.log('Tu latitud es: '+ latitud);
    console.log('Tu longitud es: '+longitud);
    
    const myLatLng = { lat: latitud, lng: longitud};
    marker.setPosition(myLatLng);
    map.setCenter(myLatLng);
}

function errorHandler(err){
    if (err.code == 1) {
      alert ("Error : acceso denegado!");
    } else if (err.code == 2) {
      alert ("Error: position no existe o no se encuentra");
    }
  }
  