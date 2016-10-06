function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {   // it's not the prototype of the Person, 
                                        // it's the prototype of any object created from Person
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
john.greet(); // JS engine will search down the prototype chain, because john doesn't have it
              // and it will take it from the prototype

var jane = new Person('Jane', 'Doe');
jane.greet();

