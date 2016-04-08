$(document).ready(function(){
    var socket = io();
    $('#nameInput').focus();
    var name = "";

    var colors = ['#F61067', '#5E239D', '#00F0B5'];

    // Get the name using a prompt. This should be prettier.
    /*var name = prompt("Please enter a name", "");
    if (name === "" || name === null) {
        name = "Anonymous";
    }
    */

    $('#savename').click(function() {
        var inputName = $('#nameInput').val();

        if (inputName === "") {
            name = "Anonymous";
        } else {
            name = inputName;
        }

        alert(name);
        $('#name').hide();
        $('#compose').show();
        socket.emit('connectionNotification', name);
        $('#m').focus();
        return name;
    });

    // Sending a msg
    $('#compose').submit(function(){
        var fieldVal = $('#m').val();
        if (fieldVal === "") {
            // nothing
        } else {
            socket.emit('chat message', ''+ name+': '+ fieldVal +'');
            $('#m').val('');
            $('#messages').append($('<li class="msg you"><p class="animated fadeInUp">'+ fieldVal +'</p></li>'));
            return false;
        }
        $('#m').focus();
    });

    // Displaying a msg
    socket.on('chat message', function(msg){
        $('#messages').append($('<li class="msg animated fadeInUp"><p>'+msg+'</p></li>'));
    });

    // Connection message
    socket.on('connectionNotification', function(name){
        $('#messages').append($('<li class="system animated fadeInUp"><p>'+name+' connected</p></li>'));
    });

    /*
    
    We probably don't want to send the nickname + message as
    a whole string in the future since we're locked to displaying
    it in a certain way if we do.


    */
});
