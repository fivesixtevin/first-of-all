var tasks = [
	"Fold Clothes",
	"Finish Laundry",
	"Cook Dinner",
	"Take out the Trash",
	"Clean Bathroom",
	"Fold Clothes"
];

/* 
For Loop	
	for (expression 1; expression 2; expression 3) {
		// Code to be executed //
	} 	
*/

for (var i=0; i < tasks.length; i++) {
  console.log()
}

/* 
Code to Run in order to clear tasks but keep Array

var tasksLength = tasks.length;
for (var i=0; i < tasksLength; i++) {
	tasks.pop()
}

*This disregards the active number of tasks when removing options
*/

/*
While Loop
	while (condition) {
		// Code to be executed //
	}
*/


/* Adds up from 0 to 9 */
var counterAdd = 0;
while (counterAdd < 10) {
	console.log(counterAdd);
	counterAdd++
}
/* Subtracts down from 10 to 1 */
 var counterSub = 10;
 while (counterSub > 0) {
 	console.log(counterSub);
 	counterSub--
 }

/*
Do/While Loop
	do {
		//Code to be executed //	
	}
	while (condition)
*/

var counterTwo = 10
do {
	console.log(counterTwo);
	counterTwo--;
} while (counterTwo > 0)
/* This verion executes the Loop first, then checks to see if the agreement (counterTwo) is correct to see if the loop should continue */


/* 
For Each
*/
 
/* Logging w/o index */ 
tasks.forEach(function(i) {
	console.log(i);
})

/* Logging w/ index */ 
tasks.forEach(function(tasks, i) {
	console.log(tasks, i);
})

/* Logging W/ separate function */
function logTasks(tasks, i) {
	console.log(tasks, i);
}
tasks.forEach(logTasks);
/* This will allow you to do other things to the 'tasks' function at a later date */
