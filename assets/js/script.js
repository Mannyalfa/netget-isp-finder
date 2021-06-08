// API Key
var APIKey = "AIzaSyDr0xMEDOlQ6Lal0sfxM954Mh1IXI-V_40";
var citySearch = "Orlando";

/*get ISP providers by city*/
var placeSearch =
	"https://maps.googleapis.com/maps/api/place/textsearch/json?query=internet+servic+provider+in+" + citySearch + "&key=" + APIKey;

fetch(placeSearch)
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		console.log(json);
	
	}); 

	/*get company info*/

	var reference ="ChIJr5bVFQJ754gRivHFkJhOGJw"

	var placeDetails =
	"https://maps.googleapis.com/maps/api/place/details/json?place_id=" + reference + "&key=" + APIKey;

fetch(placeDetails)
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		console.log(json);
	
	}); 


	/*q = $("#city-input").val();
	if (q === "") {
		return alert("Please Enter Valid City Name ! ");
	}*/
