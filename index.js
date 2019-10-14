const express = require('express');

const server = express();

server.get('/users/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Hello ${id}` });
})

server.listen(3000);