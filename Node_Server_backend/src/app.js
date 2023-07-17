import express from "express"
const port =8081
const app =express()
let obj={name:"prajwal",
array:[1,3,4,5,6]
}
app.get('/',(req,res)=>{
    res.send(obj)
})
app.listen(port,()=>{
    console.log("post listed in ",port);
})