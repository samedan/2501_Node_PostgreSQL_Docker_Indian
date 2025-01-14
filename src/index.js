import "../env.js";
import express from "express";
// const express = require("express");
import cors from "cors";
// const cors = require("cors");
// import { dotenv } from "dotenv";
// const dotenv = require("dotenv");

// dotenv.config();

const port = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(cors);

// Routes

// Error handling middleware

// Server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
