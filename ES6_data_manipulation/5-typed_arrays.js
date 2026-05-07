// 5-typed_arrays.js

/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 *
 * @param {Number} length - Length of the ArrayBuffer
 * @param {Number} position - Position to set the value
 * @param {Number} value - Int8 value to store
 * @returns {DataView} DataView representing the buffer
 * @throws {Error} If position is outside the range
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
