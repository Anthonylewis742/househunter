//declare map variable
var map;

//declare place array variable
var places = [];

//infowindow
var infowindow = new google.maps.InfoWindow();

//Request places from Google
function placesRequest(title, latlng, radius, types, icon) {
  //Parameters for our places request
  var request = {
    location: latlng,
    radius: radius,
    types: types
  };

  //Make the service call to google
  var callPlaces = new google.maps.places.PlacesService(map);
  callPlaces.nearbySearch(request, function(results, status) {
    //check to see if Google returns an "OK" status
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      //add checkbox to the table of contents
      //$('#cb-container').append('<input id="" type="checkbox" checked="checked" onClick="toggleArrayLayer(places[\'' + title + '\'])">' + title + '<br>');
      //loop through each of the places returned and map it
      $.each(results, function(i, place) {
        var placeLoc = place.geometry.location;
        var thisplace = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon: icon,
          title: place.name
        });

        //Check to see if the array for this place type exists
        if (typeof places[title] == "undefined") places[title] = [];

        //Add this place to the array
        places[title].push(thisplace);

        //add an infowindow
        google.maps.event.addListener(thisplace, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
		
		thisplace.setVisible(false);

		
      });
    };
  });
}

//toggle array layers on/off
toggleArrayLayer = function(arraylayer) 
{
    if (arraylayer) {
        for (i in arraylayer) {                 
            if (arraylayer[i].getVisible() == true)
            {
                arraylayer[i].setMap(null);
                arraylayer[i].visible = false;
            }
            else
            {
                arraylayer[i].setMap(map);
                arraylayer[i].visible = true;
            }
        }
    }
}

//Function that initializes and draws the google map
function initialize() {
    
	//sets a variable for the map centre
	var latlng = new google.maps.LatLng(43.5225,-80.2095);
    
	//Set a variable for the map options
	var myOptions = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	
	//This draws the map and assigns the centre and options
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	//Map Schools
	placesRequest('Banks', latlng, 3000, ['bank'], 'images/mapicons/bank.png');
	placesRequest('Schools',latlng,3000,['school'],'images/mapicons/school.png');
	placesRequest('Parks',latlng,3000,['park'],'images/mapicons/grass.png');
	placesRequest('Restaurants',latlng,3000,['restaurant'],'images/mapicons/restaurant.png');
	placesRequest('Hospitals',latlng,3000,['hospital'],'images/mapicons/hospital-building.png');
	placesRequest('Churchs',latlng,3000,['church'],'images/mapicons/church-2.png');
	placesRequest('Clubs',latlng,3000,['night_club'],'images/mapicons/bar_coktail.png');
	placesRequest('Libraries',latlng,3000,['library'],'images/mapicons/library.png');
	
}