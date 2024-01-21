 const http=require('http')
 const fs=require('fs')
 const fsPromises=require('fs').promises
 const path=require('path')


 const logEvents=require('./logEvents')
 const EventEmitter=require('events')
 class Emitter extends EventEmitter {};
 
//  initial object
 const myEmitter=new Emitter();
 
 const PORT= process.env.PORT || 3500;

 const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)
    
 })

 server.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)});


 //add listerner
//  myEmitter.on('log',(msg)=>logEvents(msg));

//  setTimeout(()=>{
//     myEmitter.emit('log','log event emitted!')
//  },2000);
