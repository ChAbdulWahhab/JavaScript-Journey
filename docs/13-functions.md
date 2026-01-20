## Welcome to the Session, JavaScript-II
This session explains functions, which are independent reusable blocks of code, executed on the occurrence of an event. The session also explains the concept of objects used for storing and manipulating entities in JavaScript. Finally it explains different types of built-in and browser objects supported by JavaScript. The sessions also covers advanced features of JavaScript such as getters and setters, promise objects, and also explores JSON.

In this Session, you will learn to:
- Explain functions
- Explain parameterized functions
- Explain return statement
- Describe objects
- Explain different browser objects
- Describe DOM and its objects
- Identify the use of `Promise.any`
- Explain Private class methods
- Explain JSON

## 12.1 Introduction
Consider a scenario where a Web page has been designed to greet the user with his/her name on the click of a button. A code can be used here to accomplish this task, but may result in the same output on repetitive executions. However, writing these statements each time for the same action is tedious, time consuming, and error prone.

To make the code more task-oriented and manageable, JavaScript allows to group statements before they are actually invoked. This can be achieved by using the concept of functions. A function is a reusable block of code that is executed on the occurrence of an event. The event can be a user action on the page or a call within the script.

## 12.2 Functions
A function is an independent reusable block of code that performs certain operations on variables and expressions to fulfill a task. A function might take parameters, which are variables or values on which it performs operations. After performing operations, a function might return the resultant value to display it in the browser. For example, a function names `Add()` might take two numbers on which the addition operation will be performed and will return the result of addition.

A JavaScript function is always created under the `script` element. JavaScript supports both user-defined and build-in functions.

## 12.2.1 Declaring and Defining Functions
JavaScript allows declaring  a function using the `function` keyword. The keyword is followed by the name of the function and parameters enclosed within the parenthesis. If the function does not take any parameters, then it must be specified with the empty parenthesis.

Once the function is declared, you need to define the function by specifying the operations or instructions within the curly braces { and }. These curly braces indicate the start and end of the function block, which is collectively referred to as the body of the function.

## 12.2.2 Invoking Functions
A function requires to be invoked or called to execute it in the browser. To invoke a function, specify the function name followed by parenthesis outside the function block.

A function can be defined and invoked even in an external JavaScript file. Also, a function can be called from another function in JavaScript. The function that invokes another function is called the calling function; whereas the function that is called is referred to as the called function.

## 12.2.3 Parameterized Functions
Parameterized functions refer to JavaScript functions that take parameters. These parameters hold values on which the function requires to perform operations. Parametrized functions can be created to accept values for performing operations.
```
var val1 = parseInt(prompt("Enter the first for addition"));
var val2 = parseInt(prompt("Enter the second for addition"));

add(val1, val2);

function add(num1, num2) {
	var result = num1 + num2;
	alert("Addition Result: " + result);
}
```
The parameters of a function are variables that are declared in the function declaration, Here, `num1` and `num2` are the parameters of the function. Similarly, arguments are the values passed to the function. Here, `val1` and `val2` are the arguments whose values are passed to the parameters, `num1` and `num2` while invoking the function.

Alternatively, one can use same variable names for arguments and parameters while creating and invoking functions. In either of the case, the variables will occupy different memory space.

## 12.2.4 Ways of Passing Arguments
There are two ways of passing arguments to a function namely, pass by value and pass by reference. The description about these is as follows:

- **Passing by value** - Refers to passing variables as arguments to a function. In the pass by value method, the called function do not change the values of the parameters passed to it from calling function.
- **Passing by reference** - Refers to passing objects as arguments to a function. In the pass by reference method, the called function modifies the value of parameters passed to it from the calling function. This change is reflected when the control passes back to the calling function.

## 12.2.5 return Statement
A function operates on its parameters that might lead to some output values. The output needs to be displayed to the user or it needs to be send back to the calling function. JavaScript allows sending the result back to the calling function by using the `return` statement.

The return statement begins with `return` keyword followed by the variable or value, which must be returned to the calling function. The return statement can also be used to halt the execution of the function and to return the control to the calling function. This is required when a particular condition is false or when there are chances of unexpected results during the code execution.

---