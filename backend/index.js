import express from "express"
const app = express();
import dotenv from "dotenv"
import cors from 'cors'
import pkg from 'pg';
import { connectToMongoDB } from "./config/db.js";

const { Pool } = pkg;
dotenv.config();
const PORT = 8080;
const PORT2 = process.env.MONGO_PORT || 3030;

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
app.use(express.json());


app.get('/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students');
    res.json({ time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get('/api/home', (req, res) => {
  res.json({ message: 'hello world' });
});

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
})

app.listen(Pool, () => {
  console.log("SQL Database is connected 🎉");
});

