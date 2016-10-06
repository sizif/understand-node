/*
SCOPE:
Where in code you have access to particular variable or function.

IIFE:
(function () {
    
}());
*/
var firstname = 'Jane';

(function () {
    var firstname = 'John';
    console.log(firstname);
}());

console.log(firstname);