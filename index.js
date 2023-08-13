
const School=require("./school")

const school=new School();

school.on('bellRing',(period)=>{
    console.log(`We need to run ${period.period}`)
})


school.startPeriod();