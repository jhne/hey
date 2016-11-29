// Load stuff
var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/'));
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Get index.html
app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

// Someone connected
io.on('connection', function(socket){
  console.log('A user connected');
  socket.on('disconnect', function(){
    console.log('A user disconnected');
  });

  // Tell everyone someone connected
  socket.on('connectionNotification', function(name){
    io.emit('connectionNotification', name);
  });

  // A message
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    socket.broadcast.emit('chat message', msg);
  });
});

// Server
http.listen(3000, function(){
  console.log('listening on *:3000');
});