//express setup
const express = require('express')
const config= require('./config')
const app = express()

//routes
const userRoute=require('./routes/user.js')
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/user', userRoute)// localhost:8000/user

const port=config.port
 
app.listen(port,()=>{
    console.log(`Server running at port ${config.port}`)
})