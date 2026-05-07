// 8-try.js

/**
 * Divides numerator by denominator.
 * Throws an error if denominator is 0.
 *
 * @param {Number} numerator - The numerator
 * @param {Number} denominator - The denominator
 * @returns {Number} The result of the division
 * @throws {Error} If denominator is 0
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
