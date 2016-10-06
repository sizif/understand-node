function Greetr() {
    this.greeting = 'Hello world!!!!!!!';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;

/*
if I want to have a new module, instead of creating a new object,
I'll just get, from this module, the ability to create a new object,
without using the keyword new.
*/