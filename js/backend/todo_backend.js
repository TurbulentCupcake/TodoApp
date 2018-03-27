const express = require('express');
const mysql = require('mysql');


// create a connection
const db = mysql.createConnection({
	host : 'localhost',
	user : 'adithya',
	password : 'Sanjay01*',
	database : 'tododev_app'
})

// Connect 
db.connect((err) => {
	if(err) {
		throw err;
	}
	console.log('mysql connected ... ');
});

const app = express();


// Insert task functionality
app.get('/addTask', (req, res) => {
	//let sql = 'INSERT INTO frontend_tasks(task) values ' + req.
	console.log(req);
	res.send('Got your response')
});


app.listen('8080', () => {
    console.log('Server started on port 3000');
});