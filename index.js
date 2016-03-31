<<<<<<< HEAD
// Load shit bruh
=======
>>>>>>> b4896ae0321dbc8f1f49886fb6dc002134b53acc
var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/'));
var http = require('http').Server(app);
var io = require('socket.io')(http);

<<<<<<< HEAD
// Get that index.html rollin yo
=======
>>>>>>> b4896ae0321dbc8f1f49886fb6dc002134b53acc
app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

<<<<<<< HEAD
// Shit someone connected
=======
>>>>>>> b4896ae0321dbc8f1f49886fb6dc002134b53acc
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

<<<<<<< HEAD
  // Tell everyone
  socket.on('connectionNotification', function(name){
    io.emit('connectionNotification', name);
  });

  // Shiiit, a message!
=======
  socket.on('connectionNotification', function(connectionMsg){
    io.emit('connectionNotification', connectionMsg);
  });

>>>>>>> b4896ae0321dbc8f1f49886fb6dc002134b53acc
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
<<<<<<< HEAD
});

// Get that server up and running yo
=======

});

>>>>>>> b4896ae0321dbc8f1f49886fb6dc002134b53acc
http.listen(3000, function(){
  console.log('listening on *:3000');
});