const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// express ---> Fast, unopinionated, minimalist web framework for Node.js.
// morgan ---> HTTP request logger middleware for node.js.
// cors ---> CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
