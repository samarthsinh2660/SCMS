import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { router } from "./router/auth-router.js";
import { connectToMongoDB } from "./config/db.js";

dotenv.config();

const PORT = 8080; 

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/home', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use("/api/auth", router);

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}).catch(err => {
  console.error("MongoDB connection failed", err);
});
