const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    console.log('index page logged in logs')

    res.send('<h1>Welcome to node js</h1>')
})

app.get('/about',(req,res)=>{
    console.log('about page logged in logs')
    res.send('<h1>this is about page</h1>')
})

app.listen(process.env.MYPORT)