var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));

server.listen(9030);

// GET /
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// GET /client2
app.get('/client2', function(req, res) {
  res.sendFile(__dirname + '/public/client2.html');
})
io.sockets.on('connection', function(socket) {

  socket.on('send frame', function(data) {
    console.log(data);
    io.sockets.emit('recieve frame', {
      imgFrame: data
    });

  });

});