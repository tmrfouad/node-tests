const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'page not found',
    name: 'todo app v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Tamer',
      age: 35
    },
    {
      name: 'Ahmed',
      age: 30
    },
    {
      name: 'Samir',
      age: 29
    }
  ]);
});

app.listen(3000);

module.exports.app = app;
