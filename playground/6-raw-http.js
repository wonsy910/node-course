const http = require("http");

const url = "http://api.weatherstack.com/current?access_key=b41e917630b5f389f81b80d804f6fbb0&query=45,-75&units=f";

const request = http.request(url, (response) => {
	let data = "";

	response.on("data", (chunk) => {
		data = data + chunk.toString();
	});

	response.on("end", () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on("error", (error) => {
	console.log("An Error", error);
});

request.end();
