const express = require('express');
const router = express.Router();

router
    .get('/', (req, res) => {
        res.send('!!!!Indexページ!!!!');
    })
    .get('/about', (req, res) => {
        res.send('aboutページ');
    });

module.exports = router;