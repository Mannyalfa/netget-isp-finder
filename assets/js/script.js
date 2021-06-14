$(window).on("load", function () {

	// API Key
	var APIKey = "AIzaSyDr0xMEDOlQ6Lal0sfxM954Mh1IXI-V_40";
	var citySearch = $("#search-input").val();

	//Setting the click function at ID search button
	$("#search-button").on("click", function (event) {
		event.preventDefault();
		citySearch = $("#search-input").val();
		getBusiness(citySearch);
	});
	//get ISP providers by city
	function getBusiness(citySearch) {
		var placeFind = "https://api.allorigins.win/raw?url=" + encodeURIComponent
			("https://maps.googleapis.com/maps/api/place/textsearch/json?query=internet+service+provider+in+" + citySearch + "&key=" + APIKey)
		$.ajax({
			// gets the ISP provider info
			url: placeFind,
			method: "GET"
		})
			.then(function (response) {
				console.log(("response"));
				console.log((response));
				var placesArray = response.results;
				var i;
				for (i = 0; i < 4; i++) {


					var placeDetails = "https://api.allorigins.win/raw?url=" + encodeURIComponent
						("https://maps.googleapis.com/maps/api/place/details/json?place_id=" + placesArray[i].place_id + "&key=" + APIKey)
					console.log("arrayList[i}");
					$.ajax({
						url: placeDetails,
						method: "GET"

						//return details and format response in HTML
					}).then(function (response) {

						console.log("========================================================");

						//console.log("name");
						console.log(response.result.name);

						//console.log("formatted_phone_number");
						console.log(response.result.formatted_phone_number);

						//console.log("website");
						console.log(response.result.website);

						//console.log("rating");
						console.log(response.result.rating);

						var displayOptions = $(".isp");
						//displayOptions.addClass("right col s7 center-align card blue-grey darken-1 flow-text offset-3");
						var cardDiv = $("<div>").addClass("right col s7 left-align card blue-grey darken-1 white-text csshook flow-text offset-3 overflow-hide");

						var wifiIcon = $("<i>").addClass("left material-icons white-text").text("wifi");
						cardDiv.append(wifiIcon)

						/*	var image = $(MATERIALIZE IMAGE SCRIPT WITH INTERNET ICON GOES HERE!!);*/
						if (response.result.name != undefined) {
							var ispName = $("<h6>").text(response.result.name);
							cardDiv.append(ispName)
						}

						if (response.result.formatted_phone_number != undefined) {
							var phoneNumber = $("<p>").text("Phone: " + response.result.formatted_phone_number);
							cardDiv.append(phoneNumber)
						}

						if (response.result.rating != undefined) {
							var custRating = $("<p>").text("Customer rating (1-5): " + response.result.rating);
							cardDiv.append(custRating)
						}

						if (response.result.website != undefined) {
							var webAddress = $("<p>").text("Website: " + response.result.website);
							cardDiv.append(webAddress)
						}
						displayOptions.append(cardDiv)
					})
				};
			});

	}
});