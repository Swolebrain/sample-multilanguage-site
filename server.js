const express = require('express');
const app = express();
const EJS = require('ejs');
const data = require('./strings.json');

app.set('view engine', 'ejs');


app.get('/', function(req,res){
  res.render('index.ejs', data.en);
});

app.get('/es', function(req,res){
  res.render('index.ejs', data.es);
});

app.listen(80, ()=>
  console.log('app listening on port 80'));
