/*
SCOPE:
Where in code you have access to particular variable or function.

IIFE:
(function () {
    
}());
*/
// example 1
var firstname = 'Jane';

(function () {
    var firstname = 'John';
    console.log(firstname);
}());

console.log(firstname);

// example 2
var firstname = 'Jane';

(function (lastname) {
    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);
}('Doe'));

console.log(firstname);