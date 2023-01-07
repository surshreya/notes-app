/**
 * Importing external modules
 */
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// Creating command to add a note
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Add  Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Add  Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// Creating command to remove a note
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title we want to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// Creating command to list all the notes
yargs.command({
  command: "list",
  describe: "List out all the notes",
  handler: () => {
    notes.listNotes();
  },
});

// Creating command to read a note
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note Title we want to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.parse();
