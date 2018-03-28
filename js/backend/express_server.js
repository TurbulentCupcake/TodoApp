
const mysql = require('mysql');
const express = require('express');
const app = express();

host = 'localhost';
port = 8000;



// create a database connection
const db = mysql.createConnection({
	host : 'localhost',
	user : 'adithya',
	password : 'Sanjay01*',
	database : 'tododev_app'
})


// connect ot the database
db.connect((err) => {
	if(err) {
		throw err;
	}
	console.log('MySql database connected .. ');
})


app.use(express.json()); // activate json parsing 
app.use(express.static('/home/adithya/Projects/TodoApp/js/scripts'));
app.use(express.static('/home/adithya/Projects/TodoApp/js/views'))

// render the initial page
app.get('/',(req, res)=>{
	res.sendFile('index.html');
})

// add task : display the added task to the console
// add the task to the database
app.post('/addTask', (req, res)=>{
	
	// print the task entered into the log
	console.log(req.body.task);

	// add the post into the database
	let sql = 'INSERT INTO frontend_tasks (task)  VALUES (\"'+req.body.task+'\");';
	let query = db.query(sql, (err, result)=>{
		if (err) throw err;
		console.log(result);
		res.send('task has been added to database');
	})

})


app.listen(port);

console.log("Running at port " + port);
