const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("helo mahabub");
        res.write(" helo mahi");
        res.end();
    }
    else if (req.url==='/about'){

        res.write("helo about mahabub");
        res.end();
    }
    else{
        res.write("Not found");
        res.end();
    }





});


// server.on('connection',(socket)=>{
//    console.log('new connect')
// })
server.listen(3000);

console.log('Liseting on port')