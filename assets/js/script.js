$(document).ready(function(){
    var socket = io();

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
        $('#m').val('');
        $('#messages').append($('<li class="msg you"><p>'+ fieldVal +'</p></li>'));
        return false;
    });

    // Displaying a msg
    socket.on('chat message', function(msg){
        $('#messages').append($('<li class="msg"><p>'+msg+'</p></li>'));
    });

    // Connection message
    socket.on('connectionNotification', function(name){
        $('#messages').append($('<li class="system"><p>'+name+' connected</p></li>'));
    });
});
