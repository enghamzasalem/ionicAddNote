/* notetoself.js
 *
 * First version after becoming a Sticky Notes app.
 * Uses length to create a new sticky note id.
 */

window.onload = init;

function init() {
	var button = document.getElementById("add_button");
	var button2 = document.getElementById("remove_button");
	button.onclick = createSticky;
button2.onclick = clearStickyNotes;

	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		if (key.substring(0, 6) == "sticky") {
			var value = localStorage.getItem(key);
			addStickyToDOM(value);
		}
	}
}

function createSticky() {
	var value = document.getElementById("note_text").value;
	var key = "sticky_" + localStorage.length;
	localStorage.setItem(key, value);
	
	addStickyToDOM(value);
}


function addStickyToDOM(value) {
	var stickies = document.getElementById("stickies");
	var sticky = document.createElement("li");
	var span = document.createElement("span");
	span.setAttribute("class", "sticky");
	span.innerHTML = value;
	sticky.appendChild(span);
	stickies.appendChild(sticky);
}

function clearStickyNotes() {
	localStorage.clear();
	var stickyList = document.getElementById("stickies");
	var stickies = stickyList.childNodes;
	 
		stickyList.removeChild(stickies[stickies.length-1]);
	 
}

