// var firstVal = prompt("First Value");
// var op = prompt("Operator");
// var secondVal = prompt("Second Value");

// function calculation(firstVal, op, secondVal) {
//     var result = eval(firstVal + op + secondVal);
//     return console.log(result);
// }

// calculation(firstVal, op, secondVal);


/* ===========Ways of Passing Arguments============ */

function changeValue(x) {
    x = 20; // Passing by value
    console.log("Function ke andar x:", x);
    return
    // ----- true -----
}

changeValue(10); // Passing by reference

/* ======================= */
