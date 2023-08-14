//dependencies
const http=require('http')

//app object -module scaffolding 
const app={};

//configuration 
app.config={
    port:3000
}

//server  create
app.createServer=()=>{
    const server=http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`listening to port ${app.config.port}`)
    });
}

//handle Request Response
app.handleReqRes=(req,res)=>{
    //response handle
    res.end('Hello World Mahabub');
}


//start the server
app.createServer();