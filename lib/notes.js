const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

function createNote(body, notesArray) {
    const note = body;
    note.id = uniqid();
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}

module.exports = createNote;