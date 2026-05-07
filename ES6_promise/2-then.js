// 2-then.js

/**
 * Handles a Promise response with success, error, and final logging.
 *
 * @param {Promise} promise - The promise to handle
 * @returns {Promise} A promise with handlers attached
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
