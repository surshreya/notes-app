const fs = require("fs");

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
  loadNotes,
  saveNotes,
};
