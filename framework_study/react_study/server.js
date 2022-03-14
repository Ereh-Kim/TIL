const express = require('express')

const app = express()

app.use(express.static(__dirname+'/client_side/build'))
app.use(express.static(__dirname+'/client_side/build/static'))

app.get('/',(req,res)=>{

    res.send(`<script> location.href= 'http://localhost:3000' </script>`)
    console.log('User_get_access_3000')

})

app.get('/build_react_page',(req,res)=>{
    res.sendFile(__dirname+'/client_side/build/index.html')
})

app.listen(5000,(req,res)=>{
    console.log('listening_5000')
})