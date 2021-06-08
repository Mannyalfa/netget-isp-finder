https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters

var apiKey= AIzaSyDr0xMEDOlQ6Lal0sfxM954Mh1IXI-V_40
var q = "";

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-search3.p.rapidapi.com/api/v1/serp/",
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-key": "40d6a5cde1msh4f5e5261857954fp140936jsn0a0053241973",
		"x-rapidapi-host": "google-search3.p.rapidapi.com"
	},
	"processData": false,
	"data": "{\r\n    \"query\": \"q=google+search+api&num=100\",\r\n    \"website\": \"https://rapidapi.com\"\r\n}"
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

//Setting the click function at ID search button
$("#search-button").on("click", function (event) {
	// Invalid City Name Entered
	event.preventDefault();

	q = $("#city-input").val();
	if (q === "") {
		return alert("Please Enter Valid City Name ! ");
	}
	getBiz(q);

	saveToLocalStorage(q);
});
// Button for searched city

//get location data
function getBiz(q) {
	var queryURL =
		"https://google-search3.p.rapidapi.com/api/v1/serp/" + q + /*data TBD*/
		APIKey;
	$.ajax({
		// gets the current weather info
		url: queryURL,
		method: "GET",
		error: (err) => {
			//If API through error then alert
			alert("City Not Found");
			return;




//get business data

// get ISP details TBD

//



