const http = require('http');
const express = require('express');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '../views'));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

let count = 0;
let uMessage = '';

io.on('connection', (socket) => {
    console.log('New Websocket connection');
    socket.emit('message', 'Hello, welcome to the chat!');
    socket.broadcast.emit('message', 'A new user has joined!');
    
    socket.on('disconnect', () => {
        io.emit('message', "User has left the chat!");
    });

    socket.on('uMessage', (message)=> {
        io.emit('getMessage', message);
    });

    socket.on('sendLocation', (position) => {
        io.emit('giveLocation', position)
    })
    /*socket.emit('countUpdated', count);

     socket.on('increment', () => {
        count++;
        // For a single connection
        //socket.emit('countUpdated', count);

        // For every connection
        io.emit('countUpdated', count);
    }); */
})

server.listen(port, () => {
    console.log(`It's alive!!!!! On port `, port);
    console.log(__dirname);
});