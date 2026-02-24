// Set Item

localStorage.setItem("username", "Abdul Wahab");
localStorage.setItem("email", "abc@example.com");
localStorage.setItem("password", "pakistan92");

// Get Items in Variables

username = localStorage.getItem("username");
email = localStorage.getItem("email");
password = localStorage.getItem("password");

// Printing Values

document.writeln("Name: " + username + "<br>");
document.writeln("Email: " + email + "<br>");
document.writeln("Password: " + password + "<br>");

// Deleting Values from Local Storage

localStorage.removeItem("username");
localStorage.removeItem("email");
localStorage.removeItem("password");


// localStorage.setItem -> Save -> POST
// localStorage.getItem -> Fetch -> GET
// localStorage.removeItem -> Delete -> DELETE

// Session and Cookies

