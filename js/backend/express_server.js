
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
	//console.log(req.body.task);
	//console.log(req.body);
	//console.log(req.body.task);
	console.log(req.body.date);
	console.log(req.body.priority);

	// add the post into the database
	let sql = 'INSERT INTO frontend_tasks (task,datestring,priority) VALUES (\"'+req.body.task+'\",\"'+req.body.date+'\",'+
									req.body.priority+');';
	let query = db.query(sql, (err, result)=>{
		if (err) throw err;
	//	console.log(result);
		// send back the id in order to perform deletion
		res.send(JSON.stringify({
				"id": result.insertId
		}));
	})

})

// delete task from the database
// removes the task when user hits the cross button on the side of the 
// pane -- ideally we would like to store the deleted tasks elsewhere because
// the user would like to check their list of archives

app.delete('/deletetask', (req,res)=>{

	console.log()


})


app.listen(port);

console.log("Running at port " + port);
