const fs= require('fs')

// read
const data=fs.readFile('myfile.txt')

console.log(data.toString())

// write
// fs.writeFile('myfile.txt',"hello mahabub")

// append
// fs.appendFile('myfile.txt'," how are mahabub")