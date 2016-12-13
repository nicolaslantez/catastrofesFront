var json = [
  {
    "title": "Stockholm",
    "lat": 59.3,
    "lng": 18.1,
    "description": "Stockholm is the capital and the largest city of Sweden and constitutes the most populated urban area in Scandinavia with a population of 2.1 million in the metropolitan area (2010)"
  },
  {
    "title": "Oslo",
    "lat": 59.9,
    "lng": 10.8,
    "description": "Oslo is a municipality, and the capital and most populous city of Norway with a metropolitan population of 1,442,318 (as of 2010)."
  },
  {
    "title": "Copenhagen",
    "lat": 55.7,
    "lng": 12.6,
    "description": "Copenhagen is the capital of Denmark and its most populous city, with a metropolitan population of 1,931,467 (as of 1 January 2012)."
  }
];

function initMap() {
  var bsas = {lat: -35, lng: -57.55};
  var otra = {lat: -32, lng: -54};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: bsas
  });
  var marker = new google.maps.Marker({
    position: bsas,
  });

  var marker2 = new google.maps.Marker({
    position: otra,
  });

  marker.setMap(map)
  marker2.setMap(map)

  for (var i = 0, length = json.length; i < length; i++) {
  var data = json[i],
      latLng = new google.maps.LatLng(data.lat, data.lng); 

  // Creating a marker and putting it on the map
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: data.title
  });
} 
}
