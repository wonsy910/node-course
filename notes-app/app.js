// const fs = require("fs");
// const add = require("./utils.js");
// const validator = require("validator");

const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// fs.writeFileSync("notes.txt", "My name is Daniel.");
// fs.appendFileSync("notes.txt", " Using appendFileSync to learn how it works.");

//const sum = add(4, -2);
//console.log(sum);

// const msg = getNotes();
// console.log(msg);

// console.log(validator.isURL("https//mead.io"));

// const chalkmsg = chalk.inverse.red.bold("Success!");

// console.log(chalkmsg);

//Customize yargs version
yargs.version("1.1.0");

//Create "add" command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {describe: "Note title", demandOption: true, type: "string"},
    body: {describe: "Note body", demandOption: true, type: "string"},
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  },
});

//Create "remove" command
yargs.command({
  command: "remove",
  describe: "Remove the note",
  handler: function () {
    console.log("Removing the note!");
  },
});

//Create "list" command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all notes!");
  },
});

//Create "read" command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note!");
  },
});

//add, remove, read, list

yargs.parse();
