const EventEmitter=require('events')



class School extends EventEmitter {
     startPeriod(){
        console.log('class started')
        setTimeout(()=>{
            this.emit('bellRing',{
                period:'first',
                text:"mahabub"
            })
        },2000)
    }

}


module.exports=School