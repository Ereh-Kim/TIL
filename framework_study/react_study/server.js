const express = require('express')

const app = express()


app.get('/',(req,res)=>{

    res.send(`<script> location.href= 'http://localhost:3000' </script>`)
    console.log('User_get_access_3000')

})

app.listen(5000,(req,res)=>{
    console.log('listening_5000')
})