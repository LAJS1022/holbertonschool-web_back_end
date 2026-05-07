// 4-update_grade_by_city.js

/**
 * Returns an array of students for a specific city with their updated grade.
 *
 * @param {Array} students - Array of student objects
 * @param {String} city - City name to filter by
 * @param {Array} newGrades - Array of grade objects { studentId, grade }
 * @returns {Array} Array of student objects with updated grade
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((g) => g.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
