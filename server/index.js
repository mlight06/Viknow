const express = require('express');
const axios = require('axios');
const path = require('path');

const port = 3002;
const app = express();
// const router = require('./routes.js');
app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.json());
// app.use(cors());
// app.use('/', router);

app.listen(port, () => {
  console.log('listening on port', port);
});
