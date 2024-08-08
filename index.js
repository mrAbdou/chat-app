require("dotenv").config(); // --> to get access to variable environment file (.env)
const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const {Server} = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: [
            `http://localhost:${process.env.PORT}`,
        ],
        methods: ["GET", "POST"]
    }
});

io.on("connection", socket => {
    console.log(`client ${socket.id} connected successfully.`);
})
//static folder contains compiled react js code
app.use(cors({
    origin: [
        `http://localhost:${process.env.PORT}`
    ],
    methods: ["GET", "POST"]
}));
app.use(express.static(path.join(__dirname, "build")));
//serve the starter html file of react app
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "build", "index.html")));

server.listen(process.env.PORT, () => console.log(`listening on *:${process.env.PORT}`));