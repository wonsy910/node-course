const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const myInfo = {
  name: "Daniel",
  age: "25",
};

const bookJSON = JSON.stringify(myInfo);
fs.writeFileSync("1-json.json", bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);

//Solution
//Load the data in
// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const user = JSON.parse(dataJSON);

// user.name = "Gunther";
// user.age = 54;

// const userJSON = JSON.stringify(user);
// fs.writeFileSync("1-json.json", userJSON);
