# Operators – Introduction

In JavaScript, **operators** are special symbols or keywords used to perform operations on values and variables. They help in executing tasks such as calculations, assignments, comparisons, and logical decision-making. Most standard programming books categorize JavaScript operators into four primary groups, which are explained below.

## **1. Arithmetic Operators**

Arithmetic operators are used to perform basic mathematical operations on numbers. They allow you to create numeric expressions involving addition, subtraction, multiplication, division, and more.

**Common Arithmetic Operators:**

* `+` (Addition)

* `-` (Subtraction)

* `*` (Multiplication)

* `/` (Division)

* `%` (Modulus – returns remainder)

* `**` (Exponentiation – power)

* `++` (Increment)

* `--` (Decrement)

These operators are essential for performing calculations and manipulating numeric data in programs.

### 1.1 Increment and Decrement Operators
The increment and decrement operators are unary operators, as they operate only on a single operand. The increment operator `(++)` increases the value by 1, while the decrement operator `(--)` decreases the value by 1. These operators can be placed either before or after the operand. If the operator is placed before the operand, the expression is called pre-increment or pre-decrement. If the operator is placed after the operand, the expression is called post-increment or post-decrement.

| Expression           | Type           | Result       |
| -------------------- | -------------- | ------------ |
| `numTwo = ++numOne;` | Pre-increment  | `numTwo = 3` |
| `numTwo = numOne++;` | Post-increment | `numTwo = 2` |
| `numTwo = --numOne;` | Pre-decrement  | `numTwo = 1` |
| `numTwo = numOne--;` | Post-decrement | `numTwo = 2` |

```javascript
<script>
	var number = 3;
	console.log('Number after increment = ' + ++number);
	console.log('Number after decrement = ' + number--);
</script>
```
The first `console.log()` function will display the incremented value of the `number` variable. This is because the first statement, `++` operator is evaluated first and then, the incremented value is substituted in the variable `number`. The second `console.log()` function will not display the decremented value of the `number` variable. This is because the current value is first assigned to the variable, and then, the --operator is evaluated.

---

## **2. Assignment Operators**

Assignment operators are used to assign values to variables. They can also combine assignment with another operation, allowing concise and readable code.

**Common Assignment Operators:**

* `=` (Simple Assignment)

* `+=` (Add and assign)

* `-=` (Subtract and assign)

* `*=` (Multiply and assign)

* `/=` (Divide and assign)

* `%=` (Modulus and assign)

* `**=` (Exponent and assign)

Programming books often refer to these as “shorthand assignment operators” because they simplify expressions.

---
## 3. Comparison Operators

Comparison operators compare two values and return a **boolean result** (`true` or `false`).
These operators are widely used in decision-making constructs such as `if`, `else`, and loops.

**Common Comparison Operators:**

* `==` (Equal to – compares values)

* `===` (Strict equal to – compares value and type)

* `!=` (Not equal to)

* `!==` (Strict not equal to)

* `>` (Greater than)

* `<` (Less than)

* `>=` (Greater than or equal to)

* `<=` (Less than or equal to)

---
## **4. Logical Operators**

Logical operators are used to combine multiple conditions or to apply logical reasoning in a program.

They operate on boolean values and return either `true` or `false`.

**Common Logical Operators:**

* `&&` (Logical AND) — returns true only if all conditions are true

* `||` (Logical OR) — returns true if at least one condition is true

* `!` (Logical NOT) — reverses a boolean value (`true` becomes `false` and vice versa)

These operators play a key role in controlling the flow of a program.

---

## **5. The Ternary Operator (Conditional Expression)**

The **Ternary Operator** is JavaScript's only operator that takes three operands. It serves as a concise alternative to the traditional `if-else` statement. In professional programming, it is primarily used to assign values to variables or to return a specific result based on a boolean condition. Because it is an **expression** rather than a **statement**, it evaluates directly to a value, allowing for cleaner and more readable code in simple logic scenarios.

### **Rules**

1. **Requirement of Three Parts:** It requires a conditional test, an outcome for "truthy," and an outcome for "falsy."
    
2. **Mandatory Completion:** Unlike an `if` statement where the `else` block is optional, the ternary operator **must** include the colon (`:`) and the false branch.
    
3. **Assignment Utility:** It is most powerful when used for inline assignments, reducing multiple lines of code into a single, elegant execution.
    
4. **Logical Simplicity:** Industry standards suggest using ternary operators only for simple binary choices. Complex, nested logic should remain within `if-else` blocks to maintain code maintainability.

### **Syntax**

The basic structure of a ternary expression is as follows:
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

When utilized for variable assignment:
```javascript
const result = (condition) ? valueA : valueB;
```

In the context of a function return:
```javascript
return (condition) ? trueValue : falseValue;
```

### **Logical Execution Flow**

- **Evaluation:** The engine first evaluates the **Condition** before the `?` symbol.
    
- **The Positive Branch:** If the condition evaluates to `true`, the code between `?` and `:` is executed, and its value is returned.
    
- **The Negative Branch:** If the condition evaluates to `false`, the code following the `:` is executed instead.
