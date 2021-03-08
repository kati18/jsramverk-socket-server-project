// Project(kmom10) in course jsramverk

"use strict";

/** Express initializes app (the express app) be a function handler that can be supplied
 * to an HTTP server:
 */
const app = require('express')();
// alt.:
// const express = require('express');
// const app = express();

const server = require('http').Server(app);
// alt.:
// const http = require('http');
// const server = http.Server(app);

/** socket.io = the server part of Socket.IO.
 * The server integrates with (or mounts on) the Node.JS HTTP Server.
 * Initiation of a new instance of socket.io, server(= the HTTP object) is passed as an argument):
 */
const io = require('socket.io')(server, {
    /** https://stackoverflow.com/questions/59749021/socket-io-error-access-to-xmlhttprequest-
    * has-been-blocked-by-cors-policy:
    */
    cors: {
        // Below origin to be used when developing locally:
        // origin: 'http://localhost:4200',
        // Below origin to be used on production server i e on Debian:
        origin: 'https://trade-angular.ktibe.me',
        methods: ['GET', 'POST']
    }
});

const stock = require("./stock.js");

// Below port to be used when developing locally:
// const port = 5000;
// Below port to be used on production server i e on Debian:
const port = 8400;
let users = {};

/** Definition of a route handler '/':
 * After starting the server (node server.js in terminal) and When run locally
 * either localhost:3000/ or localhost:8300/ depending on port:
 */
app.get('/', (req, res) => {
    res.json({
        data: {
            msg: "Got a GET request, sending back default 200"
        }
    });
});

var trattKantarell = {
    name: 'Trattkantarell',
    rate: 1.002,
    variance: 0.6,
    startingPoint: 20,
};

var stensopp = {
    name: 'Stensopp',
    rate: 1.001,
    variance: 0.4,
    startingPoint: 20,
};

var mushrooms = [trattKantarell, stensopp];

// the server instance of socket.io is Listening on the connection event for incoming sockets:
io.on('connection', function(socket) {
// alt.:
// io.on('connection', (socket) => {
    // console.info("socket-objektet från server.js: ", socket);
    console.info("User connected");
    console.info("socket.id från server.js: ", socket.id);

    // the value of socket.id is added as a property with value/attribute "" in object users:
    users[socket.id] = "";
    // alt below I think:
    // users.socket.id = "";

    console.info("users från server.js: ", users);

    // This event is triggered when browser tab is closed:
    socket.on('disconnect', function() {
    // alt.:
    // socket.on('disconnect', () => {
        console.log("User disconnected");
        console.log("socket with socket.id " + socket.id + " is disconnected");
    });
});

setInterval(function () {
    mushrooms.map((mushroom) => {
        // console.log("mushrooms från setInterval: ", mushrooms);
        // console.log("mushroom2 från server-project.js: ", mushroom);
        mushroom["startingPoint"] = stock.getMushroomPrice(mushroom);
        // console.log("mushroom3 från server-project.js: ", mushroom);
        return mushroom;
    });

    // console.log("mushrooms från server-project.js: ", mushrooms);

    io.emit("allItems", mushrooms);
}, 5000);

/** Below code only runs once - when file is run (node server-project.js)
 * The startingPoint attribute(value of the property startingPoint) is 20.
 * After that the startingPoint attribute keeps changing in the setInterval function:
 */
// console.log("mushrooms utanför setInterval-funktionen: ", mushrooms);

server.listen(port, () => {
    console.log(`Listening on port *: ${port}`);
});
