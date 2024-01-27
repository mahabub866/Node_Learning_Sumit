 const http=require('http')
 const express=require('express')
 const cors=require('cors')
 const path=require('path')
 const {logEvents,logger}=require('./middleware/logEvents')
 const {errorHandler}=require('./middleware/errorHandler')
 const app=express()
 const c=console.log;
 const PORT= process.env.PORT || 3500;

 //custom middleware
 app.use(logger)
 //cross orign resourxce share
 app.use(cors())
  // built-in middleware to handle ulrencoded data
 app.use(express.urlencoded({extended:false}))

 // built-in middleware for json
 app.use(express.json());

 //server static files
 app.use('/',express.static(path.join(__dirname,'/public')))
 app.use('subdir',express.static(path.join(__dirname,'/public')))
 
 app.use('^/',require(''))
 app.use('/subdir',require('./routes/subdir'))

app.use(errorHandler)

 app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)});
