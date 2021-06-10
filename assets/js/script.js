$(window).on("load", function () {


	// API Key
	var APIKey = "AIzaSyDr0xMEDOlQ6Lal0sfxM954Mh1IXI-V_40";
	var citySearch = "";
	
	//Setting the click function at ID search button
	$("#search-button").on("click", function (event) {
		// Invalid City Name Entered
		event.preventDefault();
		CI = $("#city-input").val();
		if (citySearch === "") {
		//Modal
			$(document).ready(function(){
				$('.modal').modal();
		});
		}
	});
	//get ISP providers by city
	function getBusiness(citySearch) {
		var placeFind =
		"https://maps.googleapis.com/maps/api/place/textsearch/json?query=internet+service+provider+in+" + citySearch + "&key=" + APIKey;
		$.ajax({
			// gets the ISP provider info
			url: placeFind,
			method: "GET"})
			.then(function(data) {
				console.log(data)
			});
			//return goes here//
	
		//-------NESTED BUSINESS DETAILS API GOES HERE-------
	
		function getDetails() {
			var placeDetails =
		"https://maps.googleapis.com/maps/api/place/details/json?place_id=" + reference + "&key=" + APIKey;
		$.ajax({
			url: placeDetails,
			method: "GET"
	
		//return details and format response in HTML
		 }).then(function (response) {
			console.log(response);
			//to avoid repeating city information on button click
			$("card-action").empty();
			$("").empty();
	
			var image = $('<img class="imgsize">').attr( "src",  "http:");
			var ispName = $("<p>").text("ISP:" +response.name + "<p>");
			var phoneNumber = $("<p>").text("Phone: " + response.formatted_phone_number + "<p>");
			var webAddress = $("<p>").text("Website: " + response.website + "<p>");
			var custRating = $("<p>").text("Customer rating (1-5): " + response.main.rating + "<p>");
		})
	}