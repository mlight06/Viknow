const { Pool } = require('pg');

const pool = new Pool({
  user: 'michael',
  host: 'localhost',
  database: 'viknow',
  port: 5432,
});

module.exports = pool;
