## 11.7 Script Tag
The `<script>` tag defines a script for an HTML page to make them interactive. The browser that supports scripts interprets and executes the script specified under the `<script>` tag when the page loads in the browser. You can directly insert a JavaScript code under the `<script>` tag. You can define multiple `<script>` tags either in the `<head>` or in the `<body>` elements of an HTML page. In HTML5, the type attribute `type="text/javascript"` specifying the scripting language is no longer required as it is optional.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Document</title>
		<script>
			document.write("Hello World!");
		</script>
	</head>
<body>
	...
</body>
</html>
```

There are two main purpose of the `<script>` tag, which are as follows:
- Identifies a given segment of script in the HTML page.
- Loads an external script file.

## 11.8 Variables in JavaScript
A variable refers to a symbolic name that holds a value, which keeps changing. For example, age of a student and salary of an employee can be treated as variables. A real-life example for variables includes the variables used in algebraic expressions that store values.

In JavaScript, a variable is a unique location in the computer's memory that stores a value and has a unique name. The name of the variable is used to access and read the value stored in it. A variable can store different types of data such as a character, a number, or a string. Therefore, a variable acts as container for saving and changing values during execution of the script.

## 11.8.1 Declaring Variables
Declaring a variable refers to creating a variable by specifying the variable name. For example, you can create a variable named `studName` to store the name of a student. Here, the variable name `studName` is referred to as a identifier. In JavaScript, the var keyword is used to create a variable by allocating memory to it. A keyword is a reserved word that holds a special meaning in JavaScript.

You can initialize the variable at the time of creating the variable or later. Initilization refers to the task of assigning a value to a variable. once the variable is initialized, you can change the value of a variable as required.

Variables allow keeping track of data during the execution of the script. While referring to a variable, you are referring to the value of that variable. In JavaScript, you can declare and initialize multiple variables in a single statement.

Following syntax demonstrates how to declare variables in JavaScript:
**Syntax**
```javascript
var <variableName>;
```
where,
```
var: Is the keyword in JavaScript
variableName: Is a valid variable name.
```

Following syntax demonstrates how to initalize variables in JavaScript:
**Syntax**
```javascript
<variableName> = <value>;
```
where,
= : Is the assignment operator used to assign values.
value: Is the data that is to be stored in the variable.

Following syntax demonstrates how to declare and initialize multiple variables in a single statement, which are separated by commas.
**Syntax**
```javascript
var <variableName> = <value>, <variableName2> = <value2>;
```

Code Snippet 2 declares two variables namely, `studID` and `studName` and assign values to them.
**Code Snippet 2**
```javascript
var studID;
var studName;
studID = 50;
studName = "Abdullah";
```

This code assigns values to `studID` and `studName` variables by using the assignment operator `=`. The value named `Abdullah` is specified within double quotes.

Code Snippet 3 demonstrates how to declare and initialize multiple variables in a single statement in JavaScript.

**Code Snippet 3**
`var studName = 'Abdullah', studAge = 15;`

---
## Understanding `var`, `let`, and `const`

## 3.2 The var Keyword

### 3.2.1 Definition

The **var** keyword is the original method for declaring variables in JavaScript. It has been part of the language since 1995.

### 3.2.2 Key Characteristics

**Function Scope:** Variables declared with var are function-scoped, meaning they are accessible throughout the entire function in which they are declared, regardless of block boundaries.

**Re-declaration Allowed:** The same variable can be declared multiple times within the same scope without generating an error.

**Re-assignment Allowed:** Values can be changed after declaration.

**Hoisting:** Variables declared with var are hoisted to the top of their scope. The declaration is processed before code execution, but initialization remains in place.

**Note:** Modern JavaScript development discourages the use of var due to scope-related issues.

---
## 3.3 The let Keyword

### 3.3.1 Definition

The **let** keyword was introduced in ECMAScript 6 (ES6) in 2015 to address the shortcomings of var. It provides block-level scope.

### 3.3.2 Key Characteristics

**Block Scope:** Variables declared with let are block-scoped. They only exist within the block (defined by curly braces) in which they are declared.

**No Re-declaration:** Unlike var, let does not allow re-declaration of the same variable within the same scope.

**Re-assignment Allowed:** Values can be changed after declaration.

**Temporal Dead Zone (TDZ):** Variables declared with let cannot be accessed before their declaration in the code.

**Usage:** Use let when you need to declare a variable whose value will change during program execution, such as loop counters or accumulator variables.

---

## 3.4 The const Keyword

### 3.4.1 Definition

The **const** keyword, also introduced in ES6, is used to declare constants—variables whose binding cannot be changed after initialization.

### 3.4.2 Key Characteristics

**Block Scope:** Like let, const is block-scoped and only accessible within its defining block.

**No Re-declaration:** Cannot declare the same variable twice within the same scope.

**No Re-assignment:** Variables declared with const cannot be reassigned. The binding between the variable name and its value is constant.

**Must Initialize:** Constants must be initialized at the time of declaration. Declaration without initialization results in an error.

**Object and Array Mutability:** While the binding of a const variable cannot change, the contents of objects and arrays declared with const can be modified. You can add, remove, or change properties of objects and elements of arrays.

**Usage:** Use const as the default choice for variable declaration. It should be used for values that will not be reassigned, including configuration values, mathematical constants, and references to objects and arrays.

---
## 3.5 Comparison Table

|Feature|var|let|const|
|---|---|---|---|
|**Scope**|Function|Block|Block|
|**Re-declaration**|Allowed|Not Allowed|Not Allowed|
|**Re-assignment**|Allowed|Allowed|Not Allowed|
|**Must Initialize**|No|No|Yes|
|**Hoisting**|Yes (undefined)|Yes (TDZ)|Yes (TDZ)|
|**Modern Usage**|Avoid|When value changes|Default choice|

---
## 11.8.2 Variable Naming Rules
You cannot refer to a variable until it is created in JavaScript. JavaScript is a case-sensitive language. This means that if you specify `X` and `x` as variables, both of them are treated as two different variables. Similarly, in JavaScript, there are certain rules, which must be followed while specifying variables names. These rules for a variable name are as follows:

- Can consist of digits, underscore, and alphabets.
- Must begin with a letter or the underscore character.
- Cannot begin with a number and cannot contain any punctuation marks.
- Cannot contain any kind of special characters such as `+`, `*`, `%` and so on.
- Cannot contain spaces.
- Cannot be a JavaScript keyword.

It is recommended to give meaningful names to variables such that the name determines the kind of data stored in the variable.
