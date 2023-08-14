const fs=require('fs')

const ourReadStraem=fs.createReadStream(`${__dirname}/bigdata.txt`)
const ourWriteStraem=fs.createWriteStream(`${__dirname}/output.txt`)

// ourReadStraem.on('data',(chunk)=>{
//     ourWriteStraem.write(chunk)
// })

ourReadStraem.pipe(ourWriteStraem)