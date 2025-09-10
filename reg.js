var button = document.getElementsByTagName('button')[0]
/* sets button as a variable that links to the "click to accept thy fate" button */

button.addEventListener("click", function() {
	console.log("This mf clicking stuff")
})
/* logs "this mf clicking stuff in the console log" when clcking the button */

var AccountType = document.getElementsByTagName("h3")[0]
/* sets AccountType as a variable that links to the 'Account Type' h3 attribute */

AccountType.addEventListener("mouseenter", function(){
	console.log("Now he hovering")
})
/* logs "Now he hovering" when mousing over the AccountType h3 attribute */

var list = document.getElementsByClassName("sins")[0]
/* sets list as a variable that links to the sins ordered list ([0] is to refer to the list and not the entire node) */


/* Optimizations*/
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var crIme = document.createElement("li");
		crIme.appendChild(document.createTextNode(input.value));
		list.appendChild(crIme);
		input.value = "";
}
/* input.value tag used to remove previous entry when Enter is clicked to allow for a new input to be added to the list */


function addListClick() {
	if (inputLength() > 0 ) {
		createListElement();
	}
}
/* Simplifys the process by creating the list element by calling a function instead of the using the string to detect if the list element should be created */


function addListEnter(event) {
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement();
	}
}
/* Gives the event a function to help with simplifying code */

var sinbutton = document.getElementById("sinner") /* Sets sinbutton as a variable that links to the "sinner" enter button */
var input = document.getElementById("userinput") /* Sets input as a variable that links to the "userinput" text input */

sinbutton.addEventListener("click", addListClick)
/* when clicking the sinbutton button add a new list element to the end of the "sins" ordered list based on what was entered */

input.addEventListener("keydown", addListEnter)
/* Allows for clicking Enter when adding options to unordered list instead of having to click the button */


/* Ways to Optimize or 'Refactor' */
/*
	1. Used function "inputLength" in place of "input.value.length" because we were using it twice for the same purpose in both event listeners
		- Creating the function makes it easier on the browser and memory instead of executing the same function more than once
	2. Replaced "var crIme ..." with the function "createListElement" in order to execute the process by calling the function instead
		- Same intention as above
	3. Added functions for "addListClick" and "addListEnter" to make those parameters easier to display





*/
