const path = require("path");
const express = require("express");
const hbs = require("hbs");

console.log(__dirname);
console.log();

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs"); //handlerbar set up
app.set("views", viewsPath); //"views" is part of Express
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
	res.render("index", {
		title: "Weather App",
		name: "Andrew Mead",
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		title: "About Me",
		name: "Andrew Mead",
	});
});

app.get("/help", (req, res) => {
	res.render("help", {
		title: "Help Page",
		name: "Andrew Won",
		basicText: "Guess who I am boys!",
	});
});

//We have multiple routes
//app.com
//app.com/help
//app.com/about

//req = request
//res = response

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
