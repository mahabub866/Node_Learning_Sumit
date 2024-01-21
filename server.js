 const http=require('http')
 const express=require('express')
 const path=require('path')
 const app=express()
 const PORT= process.env.PORT || 3500;
 const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)
    
 })

 app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)});
