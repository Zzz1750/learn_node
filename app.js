const express = require('express');
const path = require('path');

const app = express();

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'));
})

app.get('/about',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','about.html'));
})

app.get('/product',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','product.html'));
})
app.listen(3000,()=>{
  console.log('http://localhost:3000')
})