https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters

APi keyAIzaSyDr0xMEDOlQ6Lal0sfxM954Mh1IXI-V_40

const settings = {
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