import "../env.js";
import express from "express";
import cors from "cors";
import pool from "./config/db.js";

const port = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes

// Error handling middleware

// Testig Postgres
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database();");
  res.send(`The database name is: ${result.rows[0].current_database}`);
});

// Server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
