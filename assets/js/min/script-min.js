$(document).ready(function(){var n=io(),e=prompt("Please enter a name","");(""===e||null===e)&&(e="Anonymous"),n.emit("connectionNotification",e),$("form").submit(function(){var a=$("#m").val();return""!==a?(n.emit("chat message",""+e+": "+a),$("#m").val(""),$("#messages").append($('<li class="msg you animated fadeInUp"><p>'+a+"</p></li>")),!1):void $("#m").focus()}),n.on("chat message",function(n){$("#messages").append($('<li class="msg animated fadeInUp"><p>'+n+"</p></li>"))}),n.on("connectionNotification",function(n){$("#messages").append($('<li class="system animated fadeInUp"><p>'+n+" connected</p></li>"))})});