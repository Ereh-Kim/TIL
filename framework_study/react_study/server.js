
var express = require('express')
var app = express()

app.use(express.static('react-study/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'index.html')
})

app.get()

app.listen(5000,()=>{
    console.log(`listening_5000`)
})

app.get('/test',(req,res)=>{
    res.send('test')
})