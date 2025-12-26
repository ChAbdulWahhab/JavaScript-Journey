// tabno = parseInt(prompt("Enter Table Number"));

// for (i = 1; i <= 10; i++) {
//      result = tabno * i;
//      document.write(tabno + ' x ' + i + ' = ' + result + "<br>");
// }

// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;

// while ( i < 10 ) {
//     i++;
//     console.log(i);
// }

// let i = 0;

// do {
//     i++;

//     document.write("Sorry");

// } while (i < 10);


/*
BREAK EXAMPLE =>
*/

for (let i = 1; i <= 10; i++) {
    console.log("Note:", i * 100);

    if (i * 100 === 500) {
        console.log("₹500 note found. Stop counting.");
        break;
    }
}

/*
CONTUNUE EXAMPLE =>
*/

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        console.log("Roll 5 absent, skip.");
        continue;
    }

    console.log("Roll present:", i);
}



// break
// continue