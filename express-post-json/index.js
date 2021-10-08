const express = require('express');

const grades = {};

const app = express();

let nextID = 1;

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const gradesId in grades) {
    gradesArray.push(grades[gradesId]);
  }
  res.json(gradesArray);
});

const expressJSON = express.json();
app.use(expressJSON);

app.post('/api/grades', (req, res) => {
  const postGrade = {
    course: req.body.course,
    id: nextID,
    name: req.body.name,
    score: req.body.score
  };
  postGrade.id = nextID;
  grades[nextID] = postGrade;
  nextID++;
  res.status(201);
  res.json(postGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
