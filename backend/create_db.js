const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  password: 'news12345', // <-- replace with your actual password
  port: 5432,
  database: 'postgres' // connect to default db to create a new one
});

client.connect()
  .then(() => client.query('CREATE DATABASE krantikari_news'))
  .then(() => {
    console.log('Database created successfully!');
    return client.end();
  })
  .catch(err => {
    if (err.code === '42P04') {
      console.log('Database already exists.');
    } else {
      console.error('Error creating database:', err);
    }
    client.end();
  });