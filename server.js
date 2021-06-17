// Dependencies
const express = require("express");
const path = require("path");

// Sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes

// route that gets user to homepage
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "develop/public/index.html")));

// route that gets user to the notes page
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "develop/public/notes.html")));

// Displays all notes
app.get("/api/notes", (req, res) => res.sendFile(path.join(__dirname, "develop/db/db.json")));

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
