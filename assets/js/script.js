// API Key
var APIKey = "AIzaSyDr0xMEDOlQ6Lal0sfxM954Mh1IXI-V_40";
var q = "Orlando";

/*function getBusiness() {*/
var placeSearch =
	"https://maps.googleapis.com/maps/api/place/textsearch/json?query=internet+servic+provider+in+" + q + "&key=" + APIKey;

fetch(placeSearch)
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		console.log(json);
	
	}); 
