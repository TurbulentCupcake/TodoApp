
var myNodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodeList.length; i++) { 
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D&");
	span.className = "close";
	span.appendChild(text);
	myNodeList[i].appendChild(span);
}

