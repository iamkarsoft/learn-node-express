'use strict';

// requiring express
var express = require('express'),
posts = require('./mock/posts.json');
var pug = require('pug');

	//turning an object into array
var postsLists = Object.keys(posts).map(function(value){
 return posts[value]});


//creating the app
var app = express(); 

// app.use() defines middleware
app.use('/static',express.static(__dirname + '/public/'));
app.set('view engine','pug');
app.set('views', __dirname + '/templates');



debugger;

//creating route

app.get("/",function(req,res){
		var path = req.path;
		res.locals.path = path;
		res.render('index');
});

// app.get("/blog",function(req,res){
// 	 res.send(posts);
// });

app.get("/blog/:title?",function(req,res){
	var title = req.params.title; // grab post based on title
	if(title === undefined){
		res.status(503); //sending server status code
		res.render('blog', {posts: postsLists})
	}else{
	var post = posts[title] || {};
	res.render('post',{post: post});
		}		
});

//listening to app
app.listen(3000, function(){
	console.log('The frontend server is running on port 3000!');
});
