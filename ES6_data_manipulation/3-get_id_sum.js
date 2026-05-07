// 3-get_ids_sum.js

/**
 * Returns the sum of all student IDs.
 *
 * @param {Array} students - Array of student objects
 * @returns {Number} Sum of all student IDs
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
