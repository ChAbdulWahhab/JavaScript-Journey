var firstVal = prompt("First Value");
var op = prompt("Operator");
var secondVal = prompt("Second Value");

function calculation(firstVal, op, secondVal) {
    var result = eval(firstVal + op + secondVal);
    return console.log(result);
}

calculation(firstVal, op, secondVal);