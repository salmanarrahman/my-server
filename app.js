// app.js

const express = require("express");
const app = express();
const jsonServer = require("json-server");
const path = require("path");

// Serve your static files (e.g., React frontend)
app.use(express.static(path.join(__dirname, "public")));

// Create a JSON Server instance
const jsonServerInstance = jsonServer.create();
const jsonRouter = jsonServer.router("db.json");

// Mount JSON Server at /api
app.use("/api", jsonRouter);

// Handle other routes or middleware
app.get("/other", (req, res) => {
  res.send("This is another route.");
});

// Start the Express server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
