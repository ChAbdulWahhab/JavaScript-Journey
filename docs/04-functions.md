## 11.13 Built-in Functions
A function is a piece of code that performs some operations on variables to fulfill a specific task. It takes one or more input values, processes them, and returns an output value. JavaScript provides built-in functions that are already defined to fulfill a certain task. Table 11.5 lists the built-in functions.

| Function       | Description                                                                                                       | Example                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `alert()`      | Displays a dialog box with some information and OK button                                                         | `alert("Please fill all fields of the form");` Displays a message box with the instruction      |
| `confirm()`    | Displays a dialog box with OK and Cancel buttons. It verifies an action, which a user wants to perform            | `confirm("Are you sure you want to close the page?")`; Displays a message box with the question |
| `parseInt()`   | Converts a string value into a numeric value                                                                      | `parseInt("25 years");`                                                                         |
| `parseFloat()` | Converts a string value into a number with decimal point                                                          | `parseFloat("10.33");` Returns 10.33                                                            |
| `eval()`       | Evaluates an expression and returns the evaluated result                                                          | `eval("2+2");` Returns 4                                                                        |
| `isNaN`        | Checks whether a value is not a number                                                                            | `isNaN("Hello");` Returns true                                                                  |
| `prompt()`     | Displays a dialog box that accepts an input value through a text box. It also accepts default value for text box. | `prompt("Enter your name", "Name");` Displays message in dialog box and Name in text box.       |

> **NOTE** - The `\n` character, when used in the `alert()` function, prints the information on a new line. This does not happen when the `\n` character is used with the `write` methods of the `document` object.
