const express = require('express')
const bodyParser = require('body-Parser')
const app = express()
// Middleware 
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
   //res.send("hello");
})
app.post('/login',(req,res)=>{
    const username = req.body.username
    res.send("hello"+username)
})
app.listen(3000,()=>{
    console.log("hello");
})
