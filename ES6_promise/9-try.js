// 9-try.js

/**
 * Executes a math function and guards the result.
 * Always appends "Guardrail was processed" to the queue.
 *
 * @param {Function} mathFunction - A function that may return a value or throw an error
 * @returns {Array} The queue containing the result/error and the guardrail message
 */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
