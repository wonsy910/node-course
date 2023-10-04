const path = require("path");
const express = require("express");

console.log(__dirname);
console.log();

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

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
