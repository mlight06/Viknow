const express = require('express');
const axios = require('axios');
const path = require('path');
const pool = require('../database/index.js');
const environ = require('dotenv').config();

const port = process.env.PORT || 3002;
const app = express();
app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.json());
app.get('/wines', (req, res) => {
  const { dish } = req.query;
  pool.query('select type, characteristics from wines where dish_id=(select id from dishes where dish= $1)', [dish], (err, data) => {
    if (err) {
      console.log('query err', err);
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log('listening on port', port);
});
