const chalk = require("chalk");
const { loadNotes, saveNotes } = require("./helpers");

/**
 * Function to add a new note to the note file
 * @param {String} title
 * @param {String} body
 */
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.green("New note Added :)"));
  } else {
    console.log(chalk.red("Note already Exists :("));
  }
};

/**
 * Remove an existing note
 * @param {String} title
 */
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length < notes.length) {
    console.log(chalk.green("Note removed :)"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.yellow("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    console.log(chalk.yellow("You do not have any note!"));
    return;
  }

  console.log(chalk.bgGreen("Your Notes..."));
  notes.forEach((note) => {
    console.log(
      chalk.yellow("Title: "),
      note.title,
      chalk.yellow(" Body: "),
      note.body
    );
  });
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
};
