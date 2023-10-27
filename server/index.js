const express = require("express");
const http = require("http");
const socket = require("socket.io");



const app = express();

const server = http.createServer(app);

const io = new socket.Server(server);


io.on("connection", (socket) => {
    console.log("We are live and connected");
    console.log(socket.id);
});

app.get("/", (req, res) => {
    res.write("Hello nice to meet you");
    res.end("Done writing");
})

server.listen(4000, () => {
    console.log("start listing a default ports");
})