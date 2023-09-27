const request = require('postman-request');

const geocode = (address, callback) => {
	const url =
		'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
		encodeURIComponent(address) +
		'.json?access_token=pk.eyJ1Ijoic2hpbmluZ3NlcnZhbnQ3NzciLCJhIjoiY2xtam5ra3loMDU1YTJqbXJoamtnYm45aSJ9.tyL_KZfmMc3-i0Jqf0NX5A';

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location services!', undefined);
		} else if (body.features.length === 0) {
			callback('Unable to find location. Try another search.', undefined);
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name,
			});
		}
	});
};

module.exports = geocode;

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
