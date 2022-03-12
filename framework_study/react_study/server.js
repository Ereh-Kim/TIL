const express = require('express')

const app = express()
const path = require('path')
// app.use(express.static(__dirname + '/client_side/build'))

// app.set('view engine', path.join(__dirname, '/views'))
// app.set('view engine', 'ejs');

// const axios = require('axios')
// const ejs = require('ejs')


app.get('/',(req,res)=>{

    // res.send(`<script> location.href= 'http://localhost:3000' </script>`)
    res.render(__dirname+'/client_side/build/index.ejs')
    // res.sendFile(__dirname+'/index.html')

})

app.listen(5000,(req,res)=>{
    console.log('listening_5000')
})