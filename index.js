// Load shit bruh
var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/'));
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Get that index.html rollin yo
app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

// Shit someone connected
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  // Tell everyone
  socket.on('connectionNotification', function(name){
    io.emit('connectionNotification', name);
  });

  // Shiiit, a message!
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    socket.broadcast.emit('chat message', msg);
  });
});

// Get that server up and running yo
http.listen(3000, function(){
  console.log('listening on *:3000');
});