const axios = require('axios');

const baseURL = 'http://apis.is'; // Sækja úr environment breytu
const instance = axios.create({ baseURL })

/**
 * Fetches all available channels from endpoint, returns a promise that when
 * resolved returns an array, e.g.:
 * [{ name: 'Rúv', endpoint: '/tv/ruv' }, ... ]
 *
 * @returns {Promise} - Promise with available channels when resolved
 */
function channels() {
    return instance.get('/tv');
}

/**
 * Fetches schedule for a channel by name, returns an array, e.g.:
 * [{ title: '...', duration: '...', startTime: '...', ...}, ...]
 * If the channel does not exist, the empty array is returned.
 *
 * @param {string} name - Name of the channel
 * @returns {Promise} - Promise with schedule for channel when resolved
 */
function channel(name) {
    
}

module.exports = {
  channels,
  channel
};





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

function concerts() {
    const instance = axios.create({ baseURL: 'https://apis.is' });
    return instance.get('/concerts');
}










function channels() {
    const promise = axios.create({
        baseURL: 'https://apis.is'
    });
    return promise.get('/tv');
}


function channels() {
  console.log("Channels function called");
  let promise = axios.get('apis.is/tv/')
  promise.then(function(response){
    console.log(response);
    return response.results;
  });
}