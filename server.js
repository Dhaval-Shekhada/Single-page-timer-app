
var http2 = require('http');
var express = require('express');

var fs = require ('fs');
var path = require('path');
var url = require('url');



const PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static('public'));

http2.createServer(app).listen(PORT,function(error){
	if(error){
		console.log('error');
		return process.exit(1)
	} else{
			console.log('server is runnung on port: ' + PORT);
	}
});
