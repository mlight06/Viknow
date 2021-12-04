const express = require('express');
const axios = require('axios');
const path = require('path');
const pool = require('../database/index.js');

const port = 3002;
const app = express();
// const router = require('./routes.js');
app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.json());
app.get('/wines', (req, res) => {
  const { dish } = req.query;
  console.log(dish);
  pool.query('select type from wines where dish_id=(select id from dishes where dish= $1)', [dish], (err, data) => {
    if (err) {
      console.log('query err', err);
      res.sendStatus(400);
    } else {
      console.log('query data', data.rows[0]);
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log('listening on port', port);
});
