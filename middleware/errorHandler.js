
const {logEvents}=require('./logEvents');

const errorHandler=(err,req,res,next)=>{
    logEvents(`${err.name}:${err.message},'erLog.txt`);
    console.error(err.stack)
    res.staus(500).send(err.message)
 }

 module.exports={errorHandler};