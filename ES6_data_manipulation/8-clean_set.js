// 8-clean_set.js

/**
 * Returns a string of all set values that start with a specific string.
 * When a value starts with startString, only append the rest of the string.
 * Values are joined with a dash (-).
 *
 * @param {Set} set - The set of strings
 * @param {String} startString - The prefix to filter by
 * @returns {String} Concatenated string of matching values
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const result = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  });

  return result.join('-');
}
