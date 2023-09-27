const request = require("postman-request");
const geocode = require("./utils/geocode");
// const url = "http://api.weatherstack.com/current?access_key=b41e917630b5f389f81b80d804f6fbb0&query=37.8267,-112";

// request({ url: url, json: true }, (error, response) => {
// 	if (error) {
// 		console.log("Unable to connect to weather service.");
// 	} else if (response.body.error) {
// 		console.log("Unable to find the location.");
// 	} else {
// 		console.log(
// 			response.body.current.weather_descriptions[0] +
// 				". It is currently " +
// 				response.body.current.temperature +
// 				" degrees out." +
// 				" It feels like  " +
// 				response.body.current.feelslike +
// 				" degrees out."
// 		);
// 	}
// });

// const geocodeURL =
// 	"https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hpbmluZ3NlcnZhbnQ3NzciLCJhIjoiY2xtam5ra3loMDU1YTJqbXJoamtnYm45aSJ9.tyL_KZfmMc3-i0Jqf0NX5A";

// request({ url: geocodeURL, json: true }, (error, response) => {
// 	if (error) {
// 		console.log("Unable to connect to the map service.");
// 	} else if (response.body.features.length === 0) {
// 		console.log("Unable to detect the location. Try another search, please.");
// 	} else {
// 		const latitude = response.body.features[0].center[1];
// 		const longitude = response.body.features[0].center[0];
// 		console.log(latitude, longitude);
// 	}
// });

geocode("Boston", (error, data) => {
	console.log("Error", error);
	console.log("Data", data);
});
