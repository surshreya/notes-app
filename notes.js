const fs = require("fs");
const chalk = require("chalk");

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

/**
 * Loads the note file
 * @returns Object
 */
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

/**
 * Writes the list of notes to the note file
 * @param {Array} notes
 */
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  addNote,
};
