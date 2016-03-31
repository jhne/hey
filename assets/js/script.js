$(document).ready(function(){
    var socket = io();
<<<<<<< HEAD

    // Get the name using a prompt. This should be prettier.
    var name = prompt("Please enter a name", "");
    if (name === "" || name === null) {
        name = "Anonymous";
    }

    // Emit shit bruh
    socket.emit('connectionNotification', name);

    // Sending a msg
    $('form').submit(function(){
        var fieldVal = $('#m').val();
        socket.emit('chat message', ''+ name+': '+ fieldVal +'');
=======
    socket.emit('connectionNotification')
    socket.emit('addNew')

    $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
>>>>>>> b4896ae0321dbc8f1f49886fb6dc002134b53acc
        $('#m').val('');
        return false;
    });

<<<<<<< HEAD
    // Displaying a msg
    socket.on('chat message', function(msg){
        $('#messages').append($('<li class="msg"><p>'+msg+'</p></li>'));
    });

    // Connection message
    socket.on('connectionNotification', function(name){
        $('#messages').append($('<li class="system"><p>'+name+' connected</p></li>'));
=======
    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
    });

    socket.on('connectionNotification', function(connectionMsg){
        var connectionMsg = 'Someone connected'
        $('#messages').append($('<li class="gray">').text(connectionMsg));
>>>>>>> b4896ae0321dbc8f1f49886fb6dc002134b53acc
    });
});
