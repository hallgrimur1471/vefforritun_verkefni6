const axios = require('axios');

const envURL = process.env.API_URL;
const defaultURL = 'http://apis.is';
const url = envURL || defaultURL;
const instance = axios.create({ baseURL: url });

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
  return instance.get(`/tv/${name}`);
}

module.exports = {
  channels,
  channel,
};
