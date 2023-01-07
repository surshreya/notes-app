/**
 * Importing external modules
 */
const chalk = require("chalk");
const yargs = require("yargs");

// Creating command to add a note
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note");
  },
});

// Creating command to remove a note
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note");
  },
});

// Creating command to list all the notes
yargs.command({
  command: "list",
  describe: "List out all the notes",
  handler: function () {
    console.log("Listing all the existing notes");
  },
});

// Creating command to read a note
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();
