const data = require('./data.json');
const fs = require('fs');

var JSONData = null;

const keyword = process.argv[2];
const input = process.argv[3];
const newNote = process.argv[4];

if (keyword === 'read') {
  for (const key in data.notes) {
    console.log(key + ': ' + data.notes[key]);
  }
} else if (keyword === 'create') {
  data.notes[String(data.nextId)] = input;
  data.nextId++;
  JSONData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', JSONData, 'utf-8', err => {
    if (err) { throw err; }
  });
} else if (keyword === 'delete') {
  delete data.notes[input];
  JSONData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', JSONData, 'utf-8', err => {
    if (err) { throw err; }
  });
} else if (keyword === 'update') {
  data.notes[String(input)] = newNote;
  JSONData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', JSONData, 'utf-8', err => {
    if (err) { throw err; }
  });
}
