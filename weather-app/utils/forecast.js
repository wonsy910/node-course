const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
	const url =
		'http://api.weatherstack.com/current?access_key=b41e917630b5f389f81b80d804f6fbb0&query=' +
		latitude +
		',' +
		longitude +
		'&units=f';

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather services!', undefined);
		} else if (body.error) {
			callback('Unable to find location.', undefined);
		} else {
			callback(
				undefined,
				body.current.weather_descriptions[0] +
					'. It is currently ' +
					body.current.temperature +
					' degrees out.' +
					' There is a ' +
					body.current.precip +
					' % chance of rain. '
			);
		}
	});
};

module.exports = forecast;

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
