const express=require('express');
const app=express();

const http = require('http');

const hostname = 'localhost';
const port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));


app.get('/',function(req,res){
    res.send('welcome!');
  
  });
  
  app.get('/routing',function(req,res){
    res.send('welcome!its routing');
  
  });

  app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() 
  });

  app.listen(port, hostname, (err) => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  