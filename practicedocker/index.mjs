import express from 'express';
const app =express()

app.get('/',(req,res)=>{
    res.send('<h1>this is a web page by pursharth</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>this is about page by pursharth</h1>')
})

app.listen(3000);