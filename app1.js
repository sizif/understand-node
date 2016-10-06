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

// mp3 change:
greet3.greeting = 'Changed hello world!';
// mp3 call changed:
var greet3b = require('./greet3');
greet3b.greet();

/*
greet3b ended up being the same object as greet3. Why is that?

stepping throught the debugger, I can see that in the module.js 
there is a line 'var cachedModule = Module._cache[filename]'
which caches (stores) the results of the require function for
any particular file name. And because it's an object, it'll be
a reference to the same object that was created on the first
require (in app1.js): 'var greet3 = require('./greet3'); because 
it was cached.


*/

var Greet4 = require('./greet4');
// in order to create a new greetr object I would now have to say:..
var grtr = new Greet4();

// because, Greet4 is now a constructor function, which I'm making
// obvious with the capital G
grtr.greet();