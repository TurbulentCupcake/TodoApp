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

// create a new element when the "Add" button is clicked
function newElement() { 


	// create a new list element
	var li = document.createElement("li");
	// get the value of the input
	var inputValue = document.getElementById("myInput").value;
	// create a text node with this input
	var t =  document.createTextNode(inputValue);
	// add this value to the list element
	li.appendChild(t);

	if(inputValue === '') { 
		alert("You must write something!")
	} else {
		// if the input isnt null, then add this new lisst element to the list of tasks
		document.getElementById("myUL").appendChild(li);
	}
	// null out the input when a new element has been added
	document.getElementById("myInput").value = "";

	// create another span element for priority
	var span_two = document.createElement("SPAN");
	// add a letter P for priority
	var txt_two = document.createTextNode("P");
	// add this new element as a child to the main span element
	span_two.appendChild(txt_two);
	// give it a class name
	span_two.className = "priority"

	// create a new span element for the new list element
	var span = document.createElement("SPAN");
	// add the "Cross" symbol for this new element
	var txt =  document.createTextNode("\u00D7")
	// specify the name of the clas to which this belongs
	span.appendChild(txt);
	span.className = "close";
	// append the span to the list element
	li.appendChild(span_two)
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