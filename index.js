//dependencies



const express=require('express')

const app = express()
const admin = express()

const router=express.Router(
    {
        caseSensitive:true
    }
);
app.use(router);
app.use('/admin',admin);

admin.get('/dashboard',(req,res)=>{
   res.send('This is dashboard page')
})
router.get('/About',(req,res)=>{
   res.send('This is home pge')
})
router.post('/',(req,res)=>{

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