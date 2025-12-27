## 11.9 Data Types in JavaScript
A Web page designer can store different types of values such as numbers, characters, or strings in variables. However, the Web page designer must know what kind of data a particular variable is expected to store. To identify the type of data that can be stored in a variable , JavaScript provides different data types.

A Web page designer is not required to specify the data type while declaring variables. Due to this, JavaScript is referred to as the loosely typed language. This means that a variable holding a number can also hold a string value later. The values of variables are automatically mapped to their data types when the script is executed in the browser.

Data types in JavaScript are classified into two broad categories namely, primitive and composite data types. Primitive data types contain only a single value, whereas the composite data types contain a group values.

## 11.9.1 Primitive Data Types
A primitive data type contains a single literal value such as number or a string. A literal is a static value that you can assign to variables.

| Primitive Data Type | Description                                                                                                                                                                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `boolean`           | Contains only two values namely, true or false.                                                                                                                                                                                                |
| `null`              | Contains only one value namely, null. A variable of this value specifies that the variable has no value. This null value is keyword and it is not the same as the value, zero                                                                  |
| `number`            | Contains positive and negative numbers and numbers with decimal point. Some of the valid examples include 6, 7.5, -8, 7.5e-3 and so on.                                                                                                        |
| `string`            | Contains alphanumeric characters in single or double quotation marks. The single quotes is used to represent a string, which itself consists of quotation marks. A set of quotes without any characters within it is known as the null string. |
## 11.9.2 Composite Data Types
A composite data type stores a collection of multiple related values, unlike primitive data types. In JavaScript, all composite data types are treated as objects. A composite data type can be either predefined or user-defined in JavaScript.

| Data Types | Description                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objects    | Refers to a collection of properties and functions. Properties specify the characteristics and functions determine the behavior of a JavaScript object. |
| Functions  | Refers to a collection of statements, which are instructions to achieve a specific task                                                                 |
| Arrays     | Refers to a collection of values stored in a adjacent memory locations.                                                                                 |

---
## Escape Sequence Characters
An escape sequence character is a special character that is preceded by a backslash `(\)`. Escape sequence characters are used to display special non-printing characters such as a tab space, a single space, or a backspace. These non-printing characters help in displaying formatted output to the user to maximize readability. The backslash character specifies that the following character denotes a non-printing character. For example, `\t` is an escape sequence characters must always be enclosed in double quotes.

| Escape Sequence | Non-Printing Character                                                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\b`            | Back space                                                                                                                                                  |
| `\f`            | Form feed                                                                                                                                                   |
| `\n`            | New line                                                                                                                                                    |
| `\r`            | Carriage return                                                                                                                                             |
| `\t`            | Horizontal tab                                                                                                                                              |
| `\'`            | Single quote                                                                                                                                                |
| `\"`            | Double quote                                                                                                                                                |
| `\\`            | Backslash                                                                                                                                                   |
| `\aaa`          | Matches a Latin-1 encoding character using octal representation, where aaa are three octal numbers. For example, \251 represents the copyright symbol.      |
| `\xaa`          | Matches a Latin-1 encoding character using hexadecimal representation, where aa are two hexadecimal numbers. For example, \x61 represents the character 'a' |
| `\uaaaa`        | Represents the Unicode encoding character, where aaaa are four hexadecimal numbers. For example, the character \u0020 represents a space.                   |

```javascript
<script>
	document.write("You must have a \u0022credit card\u0022, if you want to shop     on the \'Internet\'.");
</script>
```
The code uses a Unicode encoding character namely, `\u00022`, which represents double quotes. These open and close double quotes will contain the term `credit card`. Similarly, the word `Internet` will be placed in single quotes. The single quotes are specified using the backslash character.

> NOTE - An encoding scheme specifies how to represent character data in terms of their acceptable range, maximum number of characters, and patterns. Unicode is a character set that contains all the international characters required for processing information. Latin 1 is the encoding scheme for English and Western European languages on the Internet.
