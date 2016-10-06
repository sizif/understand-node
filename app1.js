// MODULE PATTERN 2
var greet = require('./greet1');
greet();

// require greet 2 like this...
// var greet2 = require('./greet2');
// greet2.greet();

// or require greet2 like this:
var greet2 = require('./greet2').greet;
greet2();

/*
(in greet1.js):
our 1st pattern is this: overriding the (empty) exports object with
a single function

(in app1.js):
then, when I go to require it, I simply set the variable greet in 
app1.js to the results of the require function
*/

// MODULE PATTERN 3:
var greet3 = require('./greet3');
greet3.greet();

