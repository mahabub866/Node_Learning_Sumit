//dependencies



const express=require('express')

const app = express()

app.use(express.static(`${__dirname}`+'/public/'))

app.get('/',(req,res)=>{
   res.send('This is home pge')
})
app.post('/',(req,res)=>{

   res.send('This is home pge with post req')
})


app.listen(3000,()=>{
    console.log(3000,'log')
})


























// const http=require('http')
// const environment = require('./helpers/enviornment')

// const {handleReqRes}=require('./helpers/handleReqRes')

// //app object -module scaffolding 
// const app={};

// //configuration 
// app.config={
//     port:3000
// }

// console.log(environment.port)
// //server  create
// app.createServer=()=>{
//     const server=http.createServer(app.handleReqRes);
//     server.listen(environment.port, ()=>{
//         // console.log(`environment ${process.env.NODE_ENV}`)
//         console.log(`listening to port ${environment.port}`)
//     });
// }

// //handle Request Response
// app.handleReqRes=handleReqRes;


// //start the server
// app.createServer();