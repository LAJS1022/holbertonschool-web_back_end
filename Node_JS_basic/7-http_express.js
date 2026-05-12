const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const lines = ['This is the list of our students'];
  const originalLog = console.log;
  console.log = (msg) => lines.push(msg);

  countStudents(database)
    .then(() => {
      console.log = originalLog;
      res.send(lines.join('\n'));
    })
    .catch((err) => {
      console.log = originalLog;
      lines.push(err.message);
      res.send(lines.join('\n'));
    });
});

app.listen(1245);

module.exports = app;
