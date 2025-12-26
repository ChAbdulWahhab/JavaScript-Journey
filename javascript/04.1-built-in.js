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

var numone = prompt("Enter First Value");
var numtwo = prompt("Enter Second Value");

var result = numone * numtwo; // multiplication

document.write("The result of multiplying: " + numone + " and " + numtwo + " is: " + result);
