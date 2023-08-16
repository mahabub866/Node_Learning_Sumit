const {StringDecoder}=require('string_decoder')
const url=require('url')


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

    const decoder=new StringDecoder('utf-8');
    let realData='';
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