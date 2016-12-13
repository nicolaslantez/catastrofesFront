function initMap() {
  var bsas = {lat: -35, lng: -57.55};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: bsas,
    disableDefaultUI: true,
    zoomControl:true
  });
  var marker = new google.maps.Marker({
    position: bsas,
  });
  marker.setMap(map)

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.getDetails({
  placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }
  });
}
