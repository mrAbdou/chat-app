const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
//static folder contains compiled react js code
app.use(express.static(path.join(__dirname, "build")));
//serve the starter html file of react app
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "build", "index.html")));

server.listen(3000, () => console.log(`listening on *:3000`));