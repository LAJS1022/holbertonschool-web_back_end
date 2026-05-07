// 5-photo-reject.js

/**
 * Returns a Promise that always rejects with an Error message.
 *
 * @param {String} fileName - The name of the file
 * @returns {Promise} A rejected Promise with an Error
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
