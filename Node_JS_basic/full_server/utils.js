import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const fields = {};

      for (const student of students) {
        const columns = student.split(',');
        const firstName = columns[0];
        const field = columns[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }

      resolve(fields);
    });
  });
}
