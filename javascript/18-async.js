/*===============================
    Asynchronous Programming
=================================*/

// console.log("Zainab (Present)");

// Set TimeOut

setTimeout(function() {
    // console.log("Muhammad Ali (Absent)");
    // console.log("Arham (Absent)");
    // console.log("Salman (Absent)");
}, 10000);

// console.log("Shah Zubair (Present)");


setTimeout(myFunc, 2000); // Delay 2 seconds

function myFunc() {
    // console.log("I love programming!!");
}

// Set Interval

setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    // console.log(
    // d.getHours() + ":" +
    // d.getMinutes() + ":" +
    // d.getSeconds());
}

setInterval(function() {
    console.log("Hello Moon, I love programming !!!");
}, 2000);


// Callback Function

// <html>
// <head>
//     <title>Document</title>
// </head>
// <body>
//     <button id="myBtn">Click Me</button>
//     <p id="para"></p>
//     <script>
//         document.getElementById("myBtn").addEventListener("click", hello);
//         function hello() {
//             let p = document.getElementById("para");
//             p.innerHTML = "Hello!";
//         }
//     </script>
// </body>
// </html>