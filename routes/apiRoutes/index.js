const router = require('express').Router();
const notes = require('../../db/db');
const { createNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const note = createNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(notes);
})

module.exports = router;