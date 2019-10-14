const express = require('express');

const server = express();

server.use(express.json());

const users = ['Marcelo', 'Didi', 'Joey'];

server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
})

server.post('/users', (req, res) => {
  const { user } = req.body;
  users.push(user);
  return res.json(users);
});

server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { user } = req.body;
  users[index] = user;
  return res.json(users);
})

server.delete('/users/:index', (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.json(users);
})

server.listen(3000);