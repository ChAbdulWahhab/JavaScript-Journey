// "use strict";
// var username = "John Doe";

y = 11.13;
username = "Muhammad Ali";

function myFunc() {
    // "use strict";
    return i = 1;
}

myFunc();

// 1 Error

/*================
  Destructuring
=================*/

const person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};

// Destructuring -> Adding values from objects/arrays to variables
let {firstName, lastName} = person4;

document.writeln(firstName);
document.writeln(lastName);
