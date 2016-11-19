const express = require('express');
const router = express.Router();
const schedule = require('./schedule.js');

router.get('/', (req, res) => {
    schedule.channels()
    .then((result) => {
        console.log(result.data.results[0].channels);
        res.render('index', {
            title: 'Sjónvarpsstöðvar',
            channels: result.data.results[0].channels,
        })
    })
    .catch((error) => {
        console.log(error);
        res.render('error', { title: 'Oh no!', error });  
    });
});

router.get('/tv/:namez', function(req, res, next) {
    //console.log('REQ.PARAMS\n' + req.params.namez);
    const channelName = req.params.namez;
    schedule.channel(channelName)
    .then((result) => {
        console.log(result.data.results);
        res.render('channel', {
            channelName: channelName,
            schedules: result.data.results
        })
    })
    .catch((error) => {
        console.log(error.response.status);
        res.render('error', {
            title: 'Oh no!',
            message: 'An unexpected error occured when making your request, perhaps you can try again later.' });
    });
});

module.exports = router;




///* GET home page. */
//router.get('/', function(req, res, next) {
//    concerts()
//    .then((result) => {
//      console.log(result);
//        res.render('index', { title: 'Tónleikar', concerts: result.data.results });
//    })
//    .catch((error) => {
//      console.log(error);
//      res.render('error', { title: 'Oh no!', error });      
//    });
//});









//schedule.channels().then((result) => {
//res.render('index', {title: 'Channels', channels: result.data.results});
//});