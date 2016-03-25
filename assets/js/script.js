$(document).ready(function(){
    var socket = io();
    socket.emit('connectionNotification')
    socket.emit('addNew')

    $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });

    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
    });

    socket.on('connectionNotification', function(connectionMsg){
        var connectionMsg = 'Someone connected'
        $('#messages').append($('<li class="gray">').text(connectionMsg));
    });
});
