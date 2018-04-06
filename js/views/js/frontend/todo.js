
var current_user_tasks = [];
var priority_setting = 1; // 1 to 5, 1 being lowest and 5 being highest

window.addEventListener('load', function () {
	vanillaCalendar.init({
		disablePastDays: true
	});
  })


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" button when clicking on a list item
var list =  document.querySelector("ul");
list.addEventListener("click", function(ev) { 
	if(ev.target.tagName === "LI") {
		ev.target.classList.toggle("checked");
	}
}, false);


// creates a dropdown effect to reveal the calendar and select a date
document.getElementById('calendar')
			.addEventListener("click", function(){
		var panel = document.getElementById('calendarpanel');
		if(panel.style.getPropertyValue('height') != '0px'){
			panel.style.setProperty('height','0px');
		} else {
			document.getElementById('prioritypanel').style.setProperty('height','0px');
			panel.style.setProperty('height','313px');
		}
});

// creates a dropdown effect to reveal the priority box and select a priority 
document.getElementById('priority').addEventListener("click", function(){
	var panel = document.getElementById('prioritypanel');
	if(panel.style.getPropertyValue('height') != '0px') {
	 	panel.style.setProperty('height', '0px');
	} else {
		document.getElementById('calendarpanel').style.setProperty('height','0px');
		panel.style.setProperty('height','313px');
	}
});


// make the priority boxes sectable and priority settable
var priority_options = document.getElementsByClassName('priorityoption');
console.log(priority_options[0].getAttribute('id'));
for(let i = 0; i < priority_options.length; i++) {
	priority_options[i].addEventListener("click" , function() {
		if(priority_options[i].getAttribute('id') == 'p1') {
			priority_setting = 1;
		} else if(priority_options[i].getAttribute('id') == 'p2'){
			priority_setting = 2;
		} else if(priority_options[i].getAttribute('id') == 'p3'){
			priority_setting = 3;
		} else if(priority_options[i].getAttribute('id') == 'p4') {
			priority_setting = 4;
		} else if(priority_options[i].getAttribute('id') == 'p5') {
			priority_setting = 5;
		} else {
			priority_setting = 1;
		}
	});
}



// create a new element when the "Add" button is clicked
function newElement() { 


	// create a new list element
	var li = document.createElement("li");
	// get the value of the input
	var inputValue = document.getElementById("myInput").value;
	// get the date selected by the user
	var selected_date = document.getElementById("calendar").getAttribute("date-value");

	//console.log(inputValue);
	// create a text node with this input
	var t =  document.createTextNode(inputValue);
	// add this value to the list element
	li.appendChild(t);

	if(inputValue === '') { 
		alert("You must write something!")
	} else {
		// if the input isnt null, then add this new lisst element to the list of tasks
		document.getElementById("myUL").appendChild(li);

		// create new XMLHttpRequest object
		var request =  new XMLHttpRequest();

		// get a request back with the id
		// onreadystatechange waits for the state change to see
		// if we have finally recieved the data from the server
		// after which it will execute the code inside the function
		request.onreadystatechange = function() {
			if(request.readyState == XMLHttpRequest.DONE){
				var response = JSON.parse(request.responseText);
				console.log('This id of the task is ' + response.id + ' the date selected is ' + selected_date + ' with the selected priority being ' + 
							priority_setting);
				current_user_tasks.push({
					"id":response.id,
					"task": inputValue,
					"date": selected_date,
					"priority" : priority_setting
				});
				
			}
		}
		console.log(priority_setting);
		request.open('POST', 'http://localhost:8000/addTask', true);
		request.setRequestHeader('Content-type', 'application/json');
		var data = JSON.stringify({
			"task":inputValue,
			"date": selected_date,
			"priority": priority_setting
		});

		// send data to backend
		request.send(data);

		//console.log(current_user_tasks);
	

	}

	
	// null out the input when a new element has been added
	document.getElementById("myInput").value = "";

	// create a new span element for the new list element
	var span = document.createElement("SPAN");
	// add the "Cross" symbol for this new element
	var txt =  document.createTextNode("\u00D7")
	// specify the name of the clas to which this belongs
	span.appendChild(txt);
	span.className = "close";
	// append the span to the list element
	li.appendChild(span)

	// initialize close on all buttons again
	for(i = 0; i < close.length; i++) { 
		close[i].onclick =  function() { 
			var div =  this.parentElement;
			div.style.display = "none";

		}

	}


}

function openNav() { 

	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";

}

function closeNav() { 

	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}