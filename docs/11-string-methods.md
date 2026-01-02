## String Methods

Strings in JavaScript are more than just text; they come with a powerful set of built-in tools (methods) that allow you to manipulate and inspect them extensively. Whether you need to search for a specific word, change the text case, or clean up messy input, string methods make these tasks efficient.

Below are the essential string methods that are most frequently used in real-world development.

### Most Commonly Used String Methods

| Method | Description | Example |
| :--- | :--- | :--- |
| **`length`** | Returns the total count of characters in the string. _(Note: This is a property, not a method.)_ | `"Hello".length;` // Returns `5` |
| **`toUpperCase()`** | Converts the entire string to capital letters. | `"apple".toUpperCase();` // Returns `"APPLE"` |
| **`toLowerCase()`** | Converts the entire string to small letters. | `"APPLE".toLowerCase();` // Returns `"apple"` |
| **`trim()`** | Removes whitespace (extra spaces) from **both ends** of the string. Useful for cleaning user input. | `"  user  ".trim();` // Returns `"user"` |
| **`includes()`** | Checks if the string contains a specific value. Returns `true` or `false`. | `"Hello".includes("He");` // Returns `true` |
| **`indexOf()`** | Finds the position (index) of the **first usage** of a value. Returns `-1` if not found. | `"Hello".indexOf("e");` // Returns `1` |
| **`slice(start, end)`** | Extracts a section of a string and returns it as a new string. The `end` index is not included. | `"JavaScript".slice(0, 4);` // Returns `"Java"` |
| **`replace()`** | Searches for a value and returns a new string with the value replaced. Only replaces the **first match**. | `"Hi Max".replace("Max", "Sam");` // `"Hi Sam"` |
| **`split()`** | Splits the string into an **array** of substrings based on a separator. | `"a,b,c".split(",");` // Returns `["a", "b", "c"]` |

---

### Important Concept: Immutability

> [!TIP]
> **Strings Cannot Be Changed**
> 
> In JavaScript, strings are **immutable**. This means that string methods do **not** change the original string variable; instead, they create and return a **new** string. 
>
> If you want to keep the changes, you must save the result back to a variable.
>
> ```javascript
> let text = "hello";
> text.toUpperCase(); // The result "HELLO" is created but lost. 'text' remains "hello".
> 
> text = text.toUpperCase(); // Now 'text' is updated to "HELLO".
> ```
