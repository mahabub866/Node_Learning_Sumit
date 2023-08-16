const {StringDecoder}=require('string_decoder')
const url=require('url')
const routes=require('../routes')
const {notFoundHandler}=require('../handlers/routesHandlers/notFoundHandler')

const handler={};


handler.handleReqRes=(req,res)=>{

    //request handle 
    // get the url and parse it
    const parseUrl=url.parse(req.url,true)
    const path=parseUrl.pathname
    const trimmedPath=path.replace(/^\/+|\?+$/g,'')
    const method=req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const HeaderObject=req.headers;
    const requestProperties={
        parseUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        HeaderObject,
    }
    const decoder=new StringDecoder('utf-8');
    let realData='';

    const chosenhandler= routes[trimmedPath]?routes[trimmedPath]:notFoundHandler;

    chosenhandler(requestProperties,(statusCode,payload)=>{
        statusCode==typeof(statusCode)==='number'?statusCode:500;
        payload=typeof(payload)==='object'?payload:{};

        const payloadString=JSON.stringify(payload);

        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data',(buffer)=>{

    realData += decoder.write(buffer)
    })
    req.on('end',()=>{

    realData+=decoder.end()
    console.log(realData)
    res.end('Hello World Mahabub');

    })


    console.log(HeaderObject)
    console.log(method)
    console.log(queryStringObject)
    console.log(trimmedPath)
    console.log(parseUrl)
    //response handle
    
}

module.exports=handler