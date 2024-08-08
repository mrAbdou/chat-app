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
    socket.emit("connection", socket.id);
    socket.emit("available-messages", []); // this should get data from the database and send it to the new connected client
    socket.on("send-message", newMessage => io.emit("send-message", {...newMessage, senderID: socket.id})); //should be inserted into the database too in here
    socket.on("delete-message", selectedMessageId => io.emit('delete-message', selectedMessageId)); // remove this message from the database in here too
})
//static folder contains compiled react js code
app.use(cors({
    origin: [
        `http://localhost:${process.env.PORT}`
    ],
    methods: ["GET", "POST"]
}));
//define the static folder to be used which is the build result of a react app
app.use(express.static(path.join(__dirname, "build")));
//serve the starter html file of react app
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "build", "index.html")));
//redirect all other routes to the main root /
app.get("**/*", (req, res) => res.redirect("/"));

server.listen(process.env.PORT, () => console.log(`listening on *:${process.env.PORT}`));