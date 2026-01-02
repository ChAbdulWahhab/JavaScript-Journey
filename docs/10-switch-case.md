## Switch Case

### **Special Concept: Fall-through Logic**

In a `switch` statement, **Fall-through** occurs when a `break` keyword is omitted. The engine continues to execute the subsequent cases regardless of whether they match the expression or not.

#### **1. When it's a Mistake:**

If you forget `break` in your calculator code under `case "clear"`, the program will empty the screen and then immediately execute the next case, leading to bugs.

#### **2. When it's a Feature (Grouping Cases):**

Sometimes, we want multiple inputs to trigger the same result. Instead of writing the same code twice, we use fall-through intentionally.

**Example for Student Copies:**

JavaScript

```
let day = "Saturday";

switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("It is the Weekend! 🎉"); // Both cases run this line
        break;
    default:
        console.log("It is a working day.");
}
```

### **Best Practices for Quality Code**

- **Always use a `default` case:** Even if you think you’ve covered all options, it handles the "unknown."
    
- **Place `default` at the end:** While it can technically go anywhere, placing it at the bottom is the professional standard.
    
- **Use `break` consistently:** To ensure your logic is predictable and modular.
    

---
