const express = require('express');
const pg = require('pg');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"
    `;
  db.query(sql)
    .then(result => {
      const rows = result.rows;
      res.status(200).json(rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

const expressJSON = express.json();
app.use(expressJSON);

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  if (newGrade.name === undefined || newGrade.course === undefined || newGrade.score <= 0 || newGrade.score > 100 || newGrade.score === undefined) {
    res.status(400).json({
      error: 'missing or invalid parameter'
    });
    return;
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *`;

  const params = [newGrade.name, newGrade.course, newGrade.score];

  db.query(sql, params)
    .then(result => {
      const grades = result.rows[0];
      res.status(201).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const updateId = Number(req.params.gradeId);
  const replaceGrade = req.body;
  if (!Number.isInteger(updateId) || updateId <= 0 || replaceGrade.name === undefined || replaceGrade.course === undefined || replaceGrade.score <= 0 || replaceGrade.score > 100 || replaceGrade.score === undefined) {
    res.status(400).json({
      error: 'missing or invalid parameter'
    });
    return;
  }
  const sql = `
  update "grades"
     set "name" = $2,
         "course" = $3,
         "score" = $4
   where "gradeId" = $1
   returning *
   `;
  const params = [updateId, replaceGrade.name, replaceGrade.course, replaceGrade.score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `cannot find grade with "gradeId" ${updateId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const deleteId = Number(req.params.gradeId);
  if (!Number.isInteger(deleteId) || deleteId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *`;
  const params = [deleteId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `cannot find grade with "gradeId" ${deleteId}`
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});
