module.exports = function() {
    console.log('Hello world');
} 

/*
(in greet1.js):
our 1st pattern is this: overriding the (empty) exports object with
a single function

(in app1.js):
then, when I go to require it, I simply set the variable greet in 
app1.js to the results of the require function
*/