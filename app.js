const express=require('express');
const app=express();

const http = require('http');

const hostname = 'localhost';
const port = 3000;

app.get('/',function(req,res){
    res.send('welcome!');
  
  });
  
  app.get('/routing',function(req,res){
    res.send('welcome!its routing');
  
  });
  app.listen(port, hostname, (err) => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  