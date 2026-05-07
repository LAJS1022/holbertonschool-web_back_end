// 2-get_students_by_loc.js

/**
 * Returns an array of students located in a specific city.
 *
 * @param {Array} students - Array of student objects
 * @param {String} city - City name to filter by
 * @returns {Array} Array of student objects in the given city
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
