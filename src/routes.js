const express = require('express');
const schedule = require('./schedule.js');

const router = express.Router();

router.get('/', (req, res) => {
  schedule.channels()
  .then((result) => {
    res.render('index', {
      title: 'Sjónvarpsstöðvar',
      channels: result.data.results[0].channels,
    });
  })
  .catch((error) => {
    res.render('error', {
      title: 'Oh no!',
      message: 'An unexpected error occured when making your request, '
             + 'perhaps you can try again later.' });
  });
});

router.get('/tv/:namez', (req, res, next) => {
  const channelName = req.params.namez;
  schedule.channel(channelName)
  .then((result) => {
    console.log(result.data.results[0]);
    res.render('channel', {
      channelName,
      schedules: result.data.results,
    });
  })
  .catch((error) => {
    res.render('error', {
      title: 'Oh no!',
      message: 'An unexpected error occured when making your request, '
             + 'perhaps you can try again later.' });
  });
});

module.exports = router;
