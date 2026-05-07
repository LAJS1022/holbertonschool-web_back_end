// 4-user-promise.js

/**
 * Returns a resolved Promise with an object containing firstName and lastName.
 *
 * @param {String} firstName - The first name
 * @param {String} lastName - The last name
 * @returns {Promise} A resolved Promise with the user object
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
