 const socket = io();

 var username=document.getElementById('username');
 var message=document.getElementById('message');
 var inoutdata=document.getElementById('inoutdata');
 var button=document.getElementById('btn');
 var cstatus=document.getElementById('currstatus');

 message.addEventListener('keypress',()=>{
    var user=username.value;
    cstatus.innerHTML=`${user} is typing message`;
 })

 button.addEventListener('click',function(){
    cstatus.innerHTML="";
    socket.emit('message', { message: message.value , username:username.value});
 })

 socket.on("message",function (data){
    inoutdata.innerHTML+='<p><style: color>'+data.username+': </bold>' + data.message+'</p>'; 
  })

 