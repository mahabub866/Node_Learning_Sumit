const fs=require('fs');

const ourReadStraem=fs.createReadStream(`${__dirname}/bigdata.txt`,'utf8')

ourReadStraem.on('data',(chunk)=>{
    console.log(chunk)
})








// const School=require("./school")

// const school=new School();

// school.on('bellRing',(period)=>{
//     console.log(`We need to run ${period.period}`)
// })


// school.startPeriod();