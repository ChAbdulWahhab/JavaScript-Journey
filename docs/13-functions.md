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

---

## 12.1 Introduction
Consider a scenario where a Web page has been designed to greet the user with his/her name on the click of a button. A code can be used here to accomplish this task, but may result in the same output on repetitive executions. However, writing these statements each time for the same action is tedious, time consuming, and error prone.

To make the code more task-oriented and manageable, JavaScript allows to group statements before they are actually invoked. This can be achieved by using the concept of functions. A function is a reusable block of code that is executed on the occurrence of an event. The event can be a user action on the page or a call within the script.