## Conditional Statements (If-Else)

In programming, we often need to execute different code based on different conditions. This is called **decision making** or **control flow**. JavaScript provides the `if`, `else if`, and `else` statements to handle these scenarios.

### 1. The `if` Statement

The `if` statement executes a block of code **only if** a specified condition is true.

**Syntax:**
```javascript
if (condition) {
    // Code to execute if condition is true
}
```

### 2. The `else` Statement

Use `else` to specify a block of code to be executed if the condition is **false**.

**Syntax:**
```javascript
if (condition) {
    // Code if true
} else {
    // Code if false
}
```

**Example: Voting Eligibility**
```javascript
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
```

### 3. The `else if` Ladder

Use `else if` to specify a new condition if the first condition is false. You can chain multiple `else if` statements.

**Syntax:**
```javascript
if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition1 is false and condition2 is true
} else {
    // Code if both conditions are false
}
```

**Example: Student Grading System**
```javascript
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 50) {
    console.log("Grade: B");
} else {
    console.log("Grade: F (Failed)");
}
```

### 4. Nested If Statements

You can have `if` statements inside other `if` statements. This is useful for checking multiple dependent conditions.

```javascript
let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Allowed to enter.");
    } else {
        console.log("Entry denied: ID required.");
    }
} else {
    console.log("Entry denied: Underage.");
}
```

### 5. Ternary Operator (Shorthand)

For simple `if-else` logic, you can use the **Ternary Operator** `?`. It writes the condition in a single line.

**Syntax:**
`variable = (condition) ? value_if_true : value_if_false;`

**Example:**
```javascript
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Outputs: "Adult"
```

> [!TIP]
> **Best Practice:**
> Use `if-else` for complex logic and multiple conditions. Use the **Ternary Operator** only for simple, short assignments to keep your code readable.
