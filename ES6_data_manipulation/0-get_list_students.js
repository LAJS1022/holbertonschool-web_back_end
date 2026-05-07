// 0-get_list_students.js

/**
 * Returns a list of student objects
 * Each student has: id (Number), firstName (String), location (String)
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
