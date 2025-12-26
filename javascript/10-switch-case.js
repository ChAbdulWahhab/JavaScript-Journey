let fVal = parseInt(prompt("Enter First Value"));
let sVal = parseInt(prompt("Enter Second Value"));
let op = prompt("Enter Operator");
let result;

switch (op) {
    case "+":
        result = fVal + sVal;
        break;
    case "-":
        result = fVal - sVal;
        break;
    case "*":
        result = fVal * sVal;
        break;
    case "/":
        result = sVal != 0 ? fVal / sVal : "Division by zero is not allowed.";

        break;
    default:
        result = "Invalid Input.";
}

document.writeln(result);