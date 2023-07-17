import fs from 'fs' //es6
//const fs =require('fs') 
//asysncronos
fs.readFile('./demo.txt','utf-8',(error ,txt)=>{
    console.log(txt);
})

//sysncronoes
const da = fs.readFileSync('./demo.txt','utf-8' ) 



//console.log(fs.realpath('demo.tx'));