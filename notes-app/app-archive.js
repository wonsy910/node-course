// const fs = require("fs");
// const add = require("./utils.js");
const getNotes = require("./notes.js");

// fs.writeFileSync("notes.txt", "My name is Daniel.");
// fs.appendFileSync("notes.txt", " Using appendFileSync to learn how it works.");

//const sum = add(4, -2);
//console.log(sum);

const msg = getNotes();
console.log(msg);
