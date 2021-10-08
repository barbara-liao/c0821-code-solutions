const express = require('express');

const app = express();

app.use(function (req, res) {
  res.send('hurlloooo');
});

app.listen(3000, () => {

});
