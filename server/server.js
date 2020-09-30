const express = require('express');
const http = require('http');
//sockets
const socketIO = require('socket.io');


const path = require('path');

const app = express();
//socket
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//socket
//IO mantiene una conexion directa entre backend y frontend
module.exports.io = socketIO(server);
require('./sockets/socket')
    //socket
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});