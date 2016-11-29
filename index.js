// Load stuff
var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/'));
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Port
var port = process.env.PORT || 3000;

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
    console.log(name +' joined the chat');
  });

  // A message
  socket.on('chat message', function(msg){
    console.log('Message: ' + msg);
    socket.broadcast.emit('chat message', msg);
  });
});

// Server
http.listen(port, function(){
  console.log('listening on *:'+port);
});