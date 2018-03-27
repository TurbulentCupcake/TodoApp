var http = require('http');
var path = require('path');
var fs = require('fs');
const express = require('express');
const app = express();


var hostname = 'localhost';
var port = 8000;


// so create server makes requests based on whats there in the
// html file. It first gets the html file based on the 
// get request, then it requests the css and js files
// based on the tags inside the html file

var server = http.createServer((req,res)=> {
		

	const filext = path.extname(req.url);
	console.log('file ext at this time ' + filext);



	if(filext === '.css') {
		fs.readFile('../frontend/todo.css', function(err, css) {
			res.writeHead(200, {'Content-Type':'text/css'});
			res.write(css);
			res.end();
		})
	} else if(filext === '.js') {
		fs.readFile('../frontend/todo.js', function(err, js) {
			res.writeHead(200, {'Content-Type':'text/javascript'});
			res.write(js);
			res.end();
		})
	} else {
		fs.readFile('../frontend/index.html', function(err, html) {
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(html);
			res.end();
		})
	}
})


server.listen(port, hostname, () =>{
	console.log('Server running at port ' + port);
})