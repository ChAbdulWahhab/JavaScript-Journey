## Loops
In the world of programming, loops are the engines of automation. They allow a script to repeat a specific set of instructions multiple times without the need to write the same logic over and over again. Think of a loop as a circular track: as long as a certain condition remains true, the runner (the code) keeps circling. The moment the condition is no longer met, the runner exits the track and moves on.

In JavaScript, there are three fundamental types of loops used to control this flow: `for`, `while`, and `do...while`.

---
### 1. The `for` Loop: The Controlled Marathon

The `for` loop is used when you know exactly how many times you want to run a task. It is highly structured and keeps all the "logistics"—where to start, when to stop, and how to change—in one single line.

**The Syntax:**
```javascript
for (initialization; condition; afterthought) {
    // code
}
```

* **Initialization:** Where you set your starting point (e.g., "Start at 1").

* **Condition:** The rule that must stay true for the loop to continue (e.g., "Keep going as long as the number is less than 10").

* **Afterthought:** How you update your progress after every lap (e.g., "Add 1 to the number").

### 2. The `while` Loop: The Open-Ended Journey

The `while` loop is more flexible. It is used when you don't necessarily know how many repetitions are needed beforehand; you just know that the code should keep running as long as a specific condition is met. It checks the "gate" before every single lap. If the gate is closed (the condition is false) before the loop even starts, the code inside will never run.

**The Syntax:**
```javascript
while (condition) {
    // code
}
```

* **Condition:** A simple true/false check. If it evaluates to true, the loop runs. If it’s false, the loop stops immediately.

### 3. The `do...while` Loop: The Guaranteed Start

The `do...while` loop is a variation of the `while` loop, with one critical difference: it executes its task **first** and checks the condition **second**. This ensures that the code inside the loop runs at least once, even if the condition is false from the very beginning. It’s like a "shoot first, ask questions later" approach.

**The Syntax:**
```javascript
do { 
    // code 
} while (condition);
```

* **The "Do" block:** The task that will be executed at least one time.

* **Condition:** Checked after the task is finished to see if it should repeat.

### JavaScript Loop Comparison

|**Feature**|**for Loop**|**while Loop**|**do...while Loop**|
|---|---|---|---|
|**Best Used When...**|You know the **exact number** of times to repeat.|The number of repeats is **unknown** or dynamic.|You need the code to run **at least once**.|
|**Logic Location**|Initialization, condition, and update are in **one line**.|Only the condition is defined in the loop header.|The condition is defined at the very end.|
|**Check Timing**|**Pre-test:** Checks the condition before every lap.|**Pre-test:** Checks the condition before every lap.|**Post-test:** Checks the condition _after_ the lap.|
|**Minimum Runs**|**0** (If the condition is false, it never starts).|**0** (If the condition is false, it never starts).|**1** (Even if the condition is false).|
|**Complexity**|Best for counters and fixed ranges.|Best for "waiting" for a specific state change.|Best for menu displays or input validation.|

---
Pro Tip
> [!TIP]
> 
> Which one should I choose?
> 
> Always start with a for loop if you are counting. Use a while loop if you are waiting for something to happen (like a user clicking a button or a file finishing a download). Only use do...while if the action must happen once before you even check if it should happen again.
