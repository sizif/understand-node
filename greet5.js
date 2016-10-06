// 5th module pattern: THE REVEALING MODULE PATTERN
/*
Revealing module pattern: 
Exposing only the properties and methods you want via
a returned object.
(a very common and clean way to structure
and protect code within modules.)
*/
var greeting = 'Hello world!!!';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet;
}