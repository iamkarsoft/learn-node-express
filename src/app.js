'use strict';

// requiring express
var express = require('express'),
posts = require('./mock/posts.json');

//creating the app
var app = express();


//creating route

app.get("/",function(req,res){
		res.send('<h1>I love myself</h1>');
});

app.get("/blog",function(req,res){
	 res.send(posts);
});

//listening to app
app.listen(3000, function(){
	console.log('The frontend server is running on port 3000!')
});
