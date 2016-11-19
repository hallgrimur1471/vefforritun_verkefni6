const express = require('express');
const router = express.Router();
const schedule = require('./schedule.js');

router.get('/', (req, res) => {
    schedule.channels().then((result) => {
        res.render('index', {title: 'Channels', channels: result.data.results});
    });
});

module.exports = router;