$(window).on("load", function () {

	/*CORS-code
	jQuery.ajaxPrefilter(function (options) {
		if (options.crossDomain && jQuery.support.cors) {
			options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
		}
	});*/

	// alternate CORS-code

	$.ajax({
		headers: { "Accept": "application/json" },
		type: 'GET',
		url: 'https://cl.ly/2wr4',
		crossDomain: true,
		beforeSend: function (xhr) {
			xhr.withCredentials = true;
		},
		success: function (data, textStatus, request) {
			console.log(data);
		}
	});
	// API Key
	var APIKey = "AIzaSyDr0xMEDOlQ6Lal0sfxM954Mh1IXI-V_40";
	var citySearch = $("#search-input").val();

	//Setting the click function at ID search button
	$("#search-button").on("click", function (event) {
		// Invalid City Name Entered
		event.preventDefault();
		citySearch = $("#search-input").val();
		getBusiness(citySearch);
		if (citySearch === "") {
			//Modal
			$.get(this.href, function (html) {
				$(html).appendTo('body').modal();
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
			method: "GET"
		})
			.then(function (response) {
				console.log(("response"));
				console.log((response));
				var placesArray = response.results;
				var i;
				for (i = 0; i < 4; i++) {


					var placeDetails =
						"https://maps.googleapis.com/maps/api/place/details/json?place_id=" + placesArray[i].place_id + "&key=" + APIKey;
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
						var cardDiv = $("<div>").addClass("right col s7 center-align card blue-grey darken-1 flow-text offset-3 overflow-hidde");

						var wifiIcon =$("<i>").addClass("left material-icons white-text").text("wifi");
						cardDiv.append(wifiIcon)

						/*	var image = $(MATERIALIZE IMAGE SCRIPT WITH INTERNET ICON GOES HERE!!);*/
						if (response.result.name != undefined) {
							var ispName = $("<p>").text("ISP: " + response.result.name);
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


					//need a conditional statement for null("")fields where response info is missing
					displayOptions.append(cardDiv)
					/*.append(image)
					.append(ispName)
					.append(phoneNumber)
					.append(webAddress)
					.append(custRating);
				$("#isp").append(displayOptions);*/
					// };

				})
	};
});

	}
});