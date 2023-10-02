const express = require("express");

const app = express();

//We have multiple routes
//app.com
//app.com/help
//app.com/about

//req = request
//res = response
app.get("/", (req, res) => {
	res.send("<h1>Weather</h1>"); //send something back to the requester
});

app.get("/help", (req, res) => {
	res.send([
		{
			name: "Andrew",
		},
		{
			name: "Sarah",
		},
	]);
});

app.get("/about", (req, res) => {
	res.send("<h1>About page</h1>");
});

app.get("/weather", (req, res) => {
	res.send({
		forcast: "It is snowing",
		location: "Philadelphia",
	});
});

//start the sever up & host the server on the common port 3000
app.listen(3000, () => {
	console.log("Server is up on port 3000.");
});
