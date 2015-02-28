var express = require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

server.listen(9030);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function (socket) {

    socket.on('send frame', function (data) {
       console.log(data);

   });

});