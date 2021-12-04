const express = require('express');
const axios = require('axios');
const path = require('path');
const pool = require('../database/index.js');

const port = 3002;
const app = express();
// const router = require('./routes.js');
app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.json());
app.get('/dishes', (req, res) => {
  pool.query('select dish from dishes', (err, data) => {
    if (err) {
      console.log('query err', err);
      res.sendStatus(400);
    } else {
      console.log('query data', data.rows);
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log('listening on port', port);
});
