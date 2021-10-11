const express = require('express');
const data = require('./data.json');
const fs = require('fs');
const app = express();

const errorMessage = { error: 'An unexpected error occurred.' };

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const notesId in data.notes) {
    notesArray.push(data.notes[notesId]);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const getId = Number(req.params.id);
  if (getId < 0) {
    const badRequest = { error: 'id must be a positive integer' };
    res.status(400).json(badRequest);
  } else if (data.notes[getId] === undefined) {
    const notFound = { error: `cannot find note with id ${getId}` };
    res.status(404).json(notFound);
  } else {
    res.json(data.notes[getId]);
  }
});

const expressJSON = express.json();
app.use(expressJSON);

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  if (newNote.content === undefined) {
    const badRequest = { error: 'content is a required field' };
    res.status(400).json(badRequest);
  } else if (newNote.content !== undefined) {
    newNote.id = data.nextId;
    data.notes[Number(data.nextId)] = newNote;
    data.nextId++;
    const JSONData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', JSONData, 'utf-8', function (err) {
      if (err) {
        res.status(500).json(errorMessage);
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = req.params.id;
  if (deleteId < 0) {
    const badRequest = { error: 'id must be a positive integer' };
    res.status(400).json(badRequest);
  } else if (data.notes[deleteId] === undefined) {
    const notFound = { error: `cannot find note with id ${deleteId}` };
    res.status(404).json(notFound);
  } else if (data.notes[deleteId] !== undefined) {
    delete data.notes[deleteId];
    const JSONData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', JSONData, 'utf-8', function (err) {
      if (err) {
        res.status(500).json(errorMessage);
      } else {
        res.status(204).json();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const replaceId = req.params.id;
  const replaceNote = req.body;
  if (replaceId < 0) {
    const integerError = { error: 'id must be a positive integer' };
    res.status(400).json(integerError);
  } else if (replaceNote.content === undefined) {
    const contentRequired = { error: 'content is a required field' };
    res.status(400).json(contentRequired);
  } else if (data.notes[replaceId] === undefined) {
    const notFound = { error: `cannot find note with id ${replaceId}` };
    res.status(404).json(notFound);
  } else if (replaceNote.content !== undefined && data.notes[replaceId] !== undefined) {
    data.notes[replaceId].content = replaceNote.content;
    const JSONData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', JSONData, 'utf-8', err => {
      if (err) {
        res.status(500).json(errorMessage);
      } else {
        res.status(200).json(data.notes[replaceId]);
      }
    });
  }
});
