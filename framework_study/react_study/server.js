const express = require('express')

const app = express()
const path = require('path')

const Join = path.join(__dirname,'/client_side/build/' )
app.use(express.static(Join))


// app.set('view engine', path.join(__dirname, '/views'))
// app.set('view engine', 'ejs');

// const axios = require('axios')
// const ejs = require('ejs')


app.get('/',(req,res)=>{

    // res.send(`<script> location.href= 'http://localhost:3000' </script>`)
    // res.sendFile(__dirname+'/client_side/build/index.html')
    res.sendFile('/index.html')

})

app.listen(5000,(req,res)=>{
    console.log('listening_5000')
})