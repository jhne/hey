var express=require("express"),app=express();app.use("/",express["static"](__dirname+"/"));var http=require("http").Server(app),io=require("socket.io")(http);app.get("/",function(e,n){n.sendFile(__dirname+"/index.html")}),io.on("connection",function(e){console.log("a user connected"),io.emit("connection","Someone connected"),e.on("disconnect",function(){console.log("user disconnected")}),e.on("chat message",function(e){console.log("message: "+e),io.emit("chat message",e)})}),http.listen(3e3,function(){console.log("listening on *:3000")});