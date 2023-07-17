const express = require('express')
const path =require('path')
const app = express()

const port = 3030
//get method 
app.get('/', (req, res) => {


    res.send('Hello World!')
})

//post method
app.post('/post', (req, res) => {


    res.send('Hello ')
})
//put method
app.put('/put', (req, res) => {


    res.send('Put method')
})
//delete

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

app.get('/userdata',(req,res)=>{
    res.send("get user")
})

app.use('/html', express.static(path.join('public','/html/templet.html')))
      



app.listen(port, () => console.log(`Example app listening on port ${port}!`))


let arr =[1,2,3]

let object=[]

for(let i=0 ; i<arr.length;i++){

    object.push({val:arr[i]})
}

console.log(object);