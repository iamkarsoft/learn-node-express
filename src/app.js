'use strict';

// requiring express
var express = require('express');

//creating the app
var app = express();

//creating route

app.get("/",function(req,res){
		res.send('<h1>I love myself</h1>');
});

//listening to app
app.listen(3000, function(){
	console.log('The frontend server is running on port 3000!')
});
