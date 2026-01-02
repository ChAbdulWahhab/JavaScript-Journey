## 11.16 Increment and Decrement Operators

The increment (`++`) and decrement (`--`) operators are unary operators used to increase or decrease the value of a variable by 1. They are widely used in loops and counters.

### 1. Pre-Increment vs Post-Increment

*   **Pre-Increment (`++x`):** Increases the value **before** using it in the expression.
*   **Post-Increment (`x++`):** Uses the current value **first**, then increases it.

### 2. Pre-Decrement vs Post-Decrement

*   **Pre-Decrement (`--x`):** Decreases the value **before** using it.
*   **Post-Decrement (`x--`):** Uses the current value **first**, then decreases it.

### Code Example

**JavaScript Code (`07-inc-decr-opr.js`):**

```javascript
// Pre Increment
// The value is incremented first, then printed.
var number = 3;
console.log(++number); // Output: 4
// verification: number is now 4

// Pre Decrement
// The value (4) is decremented first (to 3), then printed.
console.log(--number); // Output: 3


// Post Increment
// The current value (3) is printed first, then incremented to 4.
var number = 3;
console.log(number++); // Output: 3
// number is now 4

// Post Decrement
// The current value (4) is printed first, then decremented to 3.
console.log(number--); // Output: 4
// number is now 3
```

### Quick Reference Table

| Expression | Name | Action | Result (if n=3) | New Value of n |
| :--- | :--- | :--- | :--- | :--- |
| `++n` | Pre-increment | Add 1, then use value | 4 | 4 |
| `n++` | Post-increment | Use value, then add 1 | 3 | 4 |
| `--n` | Pre-decrement | Subtract 1, then use value | 2 | 2 |
| `n--` | Post-decrement | Use value, then subtract 1 | 3 | 2 |
