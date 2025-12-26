/*
---------------------------------------------------------
                    JavaScript Assignment
---------------------------------------------------------

TASK:
-----
1. This simple program asks the user to enter two numbers.
2. It multiplies the numbers and displays the result
    directly on the webpage.

STUDENT ASSIGNMENT:
--------------------
Using this basic example, create a full calculator that
can perform ALL of the following operations:

    1. Addition (+)
    2. Subtraction (-)
    3. Multiplication (*)
    4. Division (/)
    5. Modulus (%)

REQUIREMENTS:
--------------
1. Ask the user to enter two values.
2. Ask the user to choose which operation they want to perform.
3. Use if/else to perform the operation.
4. Display the final result on the page using document.write()
    or (preferably) using HTML elements + innerHTML.
5. Make sure your calculator handles invalid input properly.

---------------------------------------------------------
*/

let numone = parseInt(prompt("First Value"));
let operator = prompt("Choose Operator in (+ - * / %)");
let numtwo = parseInt(prompt("Second Value"));

let result;

if (!isNaN(numone) || !isNaN(numtwo)) {

    if (operator == "+") {
        result = numone + numtwo;
        document.write(numone + " " + operator + " " + numtwo + " = " + result);
    }
    else if (operator == "-") {
        result = numone - numtwo;
        document.write(numone + " " + operator + " " + numtwo + " = " + result);
    }
    else if (operator == "*") {
        result = numone * numtwo;
        document.write(numone + " x " + numtwo + " = " + result);
    }
    else if (operator == "/") {
        if (numtwo == 0) {
            result = `Division by ${numtwo} is not allowed.`;
            document.write(result);
        }

        else {
            result = numone / numtwo;
            document.write(numone + " " + operator + " " + numtwo + " = " + result);
        }
    }
    else if (operator == "%") {
        result = numone % numtwo;
        document.write(numone + " " + operator + " " + numtwo + " = " + result);
    }

    // ! = = -> Strict Value or Type

    else {
        result = `"${operator}" isn't a valid operator, Please enter valid operator.`;
        document.write(result);
    }

}

else if (numone.length == 0 || numtwo.length == 0 || operator.length == 0) {
    result = "We can't proceed with empty fields.";
    document.write(result);
}

else {
    result = "For calculation numeric values required.";
    document.write(result);
}