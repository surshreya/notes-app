const chalk = require("chalk");
const { loadNotes, saveNotes } = require("./helpers");

/**
 * Function to add a new note to the note file
 * @param {String} title
 * @param {String} body
 */
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

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

const removeNote = (title) => {
  const notes = loadNotes();
  console.log(notes);
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if (notesToKeep.length < notes.length) {
    console.log(chalk.green("Note removed :)"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.yellow("No note found!"));
  }
};

module.exports = {
  addNote,
  removeNote,
};
