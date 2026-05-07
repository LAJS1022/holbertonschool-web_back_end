// 7-has_array_values.js

/**
 * Checks if all elements in an array exist within a set.
 *
 * @param {Set} set - The set to check against
 * @param {Array} array - The array of values to verify
 * @returns {Boolean} True if all array values are in the set, otherwise false
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
