import "../env.js";
import express from "express";
import cors from "cors";
import pool from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";

const port = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes);

// Error handling middleware
app.use(errorHandling);

// Testing Postgres
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database();");
  res.send(`The database name is: ${result.rows[0].current_database}`);
});

// Server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
