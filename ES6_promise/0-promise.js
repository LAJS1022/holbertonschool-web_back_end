// 0-promise.js

/**
 * Returns a Promise object.
 *
 * @returns {Promise} A resolved Promise
 */
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve('Success');
  });
}
