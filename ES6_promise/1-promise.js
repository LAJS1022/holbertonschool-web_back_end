// 1-promise.js

/**
 * Returns a Promise that resolves or rejects based on the success parameter.
 *
 * @param {boolean} success - Determines whether the promise resolves or rejects
 * @returns {Promise} A Promise that resolves with an object or rejects with an error
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
