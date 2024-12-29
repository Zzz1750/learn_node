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
const PORT = process.env.PORT || 3000; // Use the port Render provides or default to 3000

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
