var http = require("http");
var url = require("url");
var express = require("express"); 
var bodyParser = require('body-parser');
var multer = require('multer'); 
var upload = multer();
var request = require('request');
var fs = require("fs");
// var mu  = require('mu2');

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('view engine', 'ejs');


app.get('/',function(req,res){
	res.redirect(302, "/index"); 
});

app.get('/index',function(req,res){
  var centers = [];
  for(var i = 0 ; i< 20; i++){
      var newCenter = { nombre: "nombre " + i, direccion: "direccion " + i};
      centers.push(newCenter);
  }
  
  res.render("index", {"centers" : centers});
  
}); 

app.use(express.static('public'));
app.listen(process.env.PORT || 3000);


