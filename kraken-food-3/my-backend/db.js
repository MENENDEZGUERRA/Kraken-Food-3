const { Pool } = require('pg');

const pool = new Pool({
  user: 'restaurantDB_owner',
  host: 'ep-ancient-flower-a4vo86ie.us-east-1.aws.neon.tech',
  database: 'restaurantDB',
  password: 'ecUqCX2xBMG7',
  port: 5432,
});