 const os=require('os')
 const path=require('path')
 const {format}=require('date-fns')
 const {v4:uuid}=require('uuid')
 const logEvents=require('./logEvents')
 const EventEmitter=require('events')
 class MyEmitter extends EventEmitter {};

 const myEmitter=new MyEmitter();

 console.log(os.type())
 console.log(os.version())
 console.log(os.homedir())
 console.log(__dirname)
 console.log(__filename)
 console.log(path.dirname(__filename))
 console.log(path.basename(__filename))
 console.log(path.extname(__filename))
 console.log(path.parse(__filename))
 console.log("mahabub")


 console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))
 console.log(uuid())