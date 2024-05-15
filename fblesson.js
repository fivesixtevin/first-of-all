var database = [

	{
		username: "tevinblue01",
		password: "Password" 
	},
	{
		username: "kittykatkate",
		password: "Password2" 
	},
	{
		username: "tevin.blue",
		password: "Password3" 
	}
];

var newsfeed = [
	{
		username: "User1",
		timeline: "This is an example of a post by 'User1'" 
	},
	{
		username: "User2",
		timeline: "Ughhh I hate this, I'm hungry, tired, and I want to go home"
	},
	{
		username: "User3",
		timeline: "Fockin Ell"
	}
];

/* These Variables are used to prompt the User to enter their log in information */
var usernameprompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

/* This Function is used to require the User to sign in, and displays the News Feed if correct, and No access message if not */

/*
 function signIn(user, pass) {
 	if (user === database[0].username &&
 		pass === database[0].password) {
 		console.log(newsfeed);
 	} else {
 		alert("You have entered an invalid username or password")
 	}
 }
*/

function validationCheck(username, password) {
		for (var i=0; i < database.length; i++) {
 		if (database[i].username === username && 
 			database[i].password === password) {
 			return true;
 		}
 	} return false;
}
/* Validation Check function is used to fix issue from previous function where loop shows log, but displays incorrect alert message */

function signIn(username, password) {
 	if (validationCheck(username, password)) {
 		console.log(newsfeed)
 		} else {
 			alert ("You have entered an invalid username or password")
 		}
 	}

/* Calling the function in the javascript, makes it so that the Website will automatically run this function for you in the backend and display the error or newsfeed automatically when refreshing */
signIn(usernameprompt, passwordPrompt);
