//dependencies
const http=require('http')
const url=require('url')

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

    //request handle 
    // get the url and parse it
    const parseUrl=url.parse(req.url,true)
    const path=parseUrl.pathname
    const trimmedPath=path.replace(/^\/+|\?+$/g,'')
    const method=req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    console.log(method)
    console.log(queryStringObject)
    console.log(trimmedPath)
    console.log(parseUrl)
    //response handle
    res.end('Hello World Mahabub');
}


//start the server
app.createServer();