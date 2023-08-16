

const handler={};

handler.notFoundHandler=(requestProperties,callback)=>{
 callback(404,{
    message:"Your requested is not found"
 });
}

module.exports=handler