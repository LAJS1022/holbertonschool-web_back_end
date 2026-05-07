// 6-final-user.js
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

/**
 * Calls signUpUser and uploadPhoto, then returns an array of results
 * with their status and value/error once all promises are settled.
 *
 * @param {String} firstName - The first name
 * @param {String} lastName - The last name
 * @param {String} fileName - The file name
 * @returns {Promise} A promise resolving to an array of results
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) =>
    results.map((result) => ({
      status: result.status,
      value: result.value || result.reason,
    }))
  );
}
