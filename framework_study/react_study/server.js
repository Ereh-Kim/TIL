const express = require('express')

const app = express()
// app.use(express.static('client_side/public'))
const axios = require('axios')


app.get('/',(req,res)=>{

    res.send(`<script> location.href= 'http://localhost:3000' </script>`)

})

app.listen(5000,(req,res)=>{
    console.log('listening_5000')
})