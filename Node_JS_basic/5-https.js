const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const lines = ['This is the list of our students'];
    const originalLog = console.log;
    console.log = (msg) => lines.push(msg);

    countStudents(database)
      .then(() => {
        console.log = originalLog;
        res.end(lines.join('\n'));
      })
      .catch((err) => {
        console.log = originalLog;
        lines.push(err.message);
        res.end(lines.join('\n'));
      });
  }
});

app.listen(1245);

module.exports = app;
