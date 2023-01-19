var express=require('express');
var socket=require('socket.io');

var port=process.env.PORT || 3000;
var app=express();

var server=app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});

app.use(express.static('public'));

var io=socket(server);

io.on('connection',(socket)=>{
    socket.on("message",function (data){
       socket.broadcast.emit("message",data);
       socket.emit("message",data);
    })
});


