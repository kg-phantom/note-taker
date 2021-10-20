const router = require('express').Router();
const { notes } = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    res.json(notes);
});

router.post('/api/notes', (req, res) => {
    
})

module.exports = router;