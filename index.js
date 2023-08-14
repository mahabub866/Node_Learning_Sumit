const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    const ourReadStraem=fs.createReadStream(`${__dirname}/bigdata.txt`)

    ourReadStraem.pipe(res);

});


// const http=require('http')

// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.write("helo mahabub");
//         res.write(" helo mahi");
//         res.end();
//     }
//     else if (req.url==='/about'){

//         res.write("helo about mahabub");
//         res.end();
//     }
//     else{
//         res.write("Not found");
//         res.end();
//     }





// });


// server.on('connection',(socket)=>{
//    console.log('new connect')
// })
server.listen(3000);

console.log('Liseting on port')




 



// const fs=require('fs');

// const ourReadStraem=fs.createReadStream(`${__dirname}/bigdata.txt`,'utf8')

// ourReadStraem.on('data',(chunk)=>{
//     console.log(chunk)
// })








// const School=require("./school")

// const school=new School();

// school.on('bellRing',(period)=>{
//     console.log(`We need to run ${period.period}`)
// })


// school.startPeriod();