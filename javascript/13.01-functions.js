
function greet(name) {
    return "Hello, " + name;
};

function plus(a, b) {
    return `After addition ${a} plus ${b} result is: ${a + b}`;
}

// Function invocation
// console.log(greet("Salman"));
// console.log(plus(24, 1));

// Syntax
// function function_name(parm1, parm2)


function zinabFunc() {
    return "Hello Word!";
}

let message = zinabFunc();

// Default Parameters Value

function greetings(name = "Guest") {
    return "Hello " + name;
}

let fullMsg = greetings("Ab. Wahab");
console.log(fullMsg);


function checkAge(age) {
    if (age >= 18) {
        result = "You're Elgible to Vote!"
    }
    else {
        result = "You're Not Elgible to Vote!"
    }

    return result;
}

console.log(checkAge(200));

function myFunc(x, y = 2) {
    return x + y;
}

console.log(myFunc(13));

function arhFunc(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x + y;
}

console.log(arhFunc(13));
