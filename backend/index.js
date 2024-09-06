require('dotenv').config(); 
const express = require('express');
const app = express();
const cors = require('cors');
const { Pool } = require('pg'); // Correctly import Pool from pg


const PORT = 8080;

// Create a new Pool instance
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionString: process.env.DB_URL,
});

app.use(cors());

// Test database connection
app.get('/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students');
    res.json({ time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example API endpoint
app.get('/api/home', (req, res) => {
  res.json({ message: 'hello world' });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.listen(Pool, () => {
  console.log("Database is connected");
});
