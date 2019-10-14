const express = require('express');

const server = express();

const users = ['Marcelo', 'Didi', 'Joey'];

server.get('/', (req, res) => {
  res.json({ message: 'hello' })
})

server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  res.json(users[index]);
})

server.listen(3000);