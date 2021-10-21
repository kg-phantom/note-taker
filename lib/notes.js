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
};

function deleteNote(id, notesArray) {
    for(var i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if(note.id === id) {
            notesArray.splice(i, 1);
            i--;
        }
    }
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
};

module.exports = {
    createNote,
    deleteNote
};