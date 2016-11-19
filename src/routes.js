const express = require('express');
const router = express.Router();
const schedule = require('./schedule.js');

router.get('/', (req, res) => {
    schedule.channels()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
});

module.exports = router;




/* GET home page. */
router.get('/', function(req, res, next) {
    concerts()
    .then((result) => {
      console.log(result);
        res.render('index', { title: 'Tónleikar', concerts: result.data.results });
    })
    .catch((error) => {
      console.log(error);
      res.render('error', { title: 'Oh no!', error });      
    });
});









    schedule.channels().then((result) => {
        res.render('index', {title: 'Channels', channels: result.data.results});
    });