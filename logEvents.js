const fs=require('fs')
const fsPromise=require('fs').promise
const path=require('path')

const logEvents=async(message)=>{
    const dateTime=`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`
    const logItem=`${dateTime}\t${uuid()}\t${message}`
    console.log(logItem)
    try{
    await fsPromise.appendFile(path.join(__dirname,'logs','event.txt'),logItem)
    }catch(err){
        console.log(err)
    }
}

console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))
console.log(uuid())

module.exports=logEvents