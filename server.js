/////////////////////
////DEPENDENCIES////
///////////////////

var express = require('express');
//require express
var mongoose = require('mongoose');
//require mongoose
var bodyParser = require('body-parser'); 
//require bodyParser, no longer standard in Express version 4

///////////////
mongoose.connect('mongodb://localhost/twitter_restful_api');
//connect to database via mongoose

var app = express();
//set express to app

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
//configure how our body-parser middleware shall be used

///////////////
////ROUTES////
/////////////

app.use('/api', require('./routes/api')); 

// app.get('/', function(req, res) {
// 	res.send('working');
// });
//a test to ensure that our server is working properly

app.listen(3000); 

console.log('API is running on port 3000'); 

// console.log(process.argv); 
