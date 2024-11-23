const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDb");

// Initializing express
const app = express();

// Load environment variable
dotenv.config({ path: ".env" });

// Body parser
app.use(express.json());

connectDB();

const port = 5000;

const server = app.listen(port, console.log(`Server is running on ${port}`));
