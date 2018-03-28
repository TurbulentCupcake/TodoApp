const express = require('express');
const app = express();

host = 'localhost';
port = 8000;

app.use(express.json()); // activate json parsing 
app.use(express.static('/home/adithya/Projects/TodoApp/js/scripts'));
app.use(express.static('/home/adithya/Projects/TodoApp/js/views'))

// render the initial page
app.get('/',(req, res)=>{
	res.sendFile('index.html');
})

// add task : display the added task to the console
app.post('/addTask', (req, res)=>{
	console.log(req.body);
})


app.listen(port);

console.log("Running at port " + port);


/*// render the css and js page
app.get('/todo.js', (req, res)=>{
	res.sendFile('../frontend/todo.js');
})

// rend the css file
app.get('/todo.css', (req,res)=>{
	res.sendFile('../frontend/todo.css');
})

*/