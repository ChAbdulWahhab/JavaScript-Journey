// let x = 5;

// console.log(x == 8); // false
// console.log(x != 8); // true

/*== But booleans or others can also be defined as objects with the keyword new:
========= */

// let newString = new String("Zainab Hussain");

// document.write(newString);
// document.write(typeof(newString));

// object = {
//     "name": "Zainab Hussain",
//     "age": 11,
//     "fatherName": "Haibat Hussain",
//     "class": "10"
// }

// document.write(JSON.stringify(object));

// ===== Nullish Operator =====

// let name = null;
// let text = "missing";
// let result = name ?? text;

// document.write(result);

// ===== Strings =====

// console.log("This is simple string");
// console.log('This is simple string');
// console.log('He is called "Johnny"');
// console.log(`He is called 'Zainab'`);


// name = "Salman"
// text = "My name is " + name;
// text2 = `My name is ${name}`;
// console.log(text);
// console.log(text2);

// let text = `
//     My Name Is
//     Zainab Hussain
// `;
// console.log(text);

// let x = String("Salman");
// console.log(x);
// console.log(typeof(x));

// let header = "Template Strings";
// let tags = ["templates strings", "javascript", "es6"];

// let html = `<h2>${header}</h2><ul>`;

// for (const x of tags) {
//     html += `<li>${x}</li>`;
// }

// html += `</ul>`;

// document.getElementById("demo").innerHTML = html;

/*============================
        STRING METHODS
============================*/

let text = "Zainab Hussain";
// console.log(text.length);


// -----charAt----
// console.log(text.charAt(7));
// console.log(text.charAt(8));
// console.log(text.charAt(9));
// console.log(text.charAt(10));
// console.log(text.charAt(11));
// console.log(text.charAt(12));
// console.log(text.charAt(13));
// console.log(text.charAt(14));

// -----charCodeAt----
// console.log(text.charCodeAt(13));


// console.log(text[7]);

// Learn other functions yourself.

// let name = null; // object
// console.log(typeof(name));

// let newsest = "null"; // string
// console.log(typeof(newsest));


// let paragraph = "muhammad ali jinnah is the founder of pakistan."
// console.log(paragraph.indexOf("jinnah"));
// console.log(paragraph.lastIndexOf("another"));
// console.log(paragraph.search("founder"));

// let newParagraph = "I love cats. Cats are very easy to love. Cats are very popular."
// console.log(newParagraph.match("ain"));

// const iterator = newParagraph.matchAll("Cats");
// document.getElementById("demo").innerHTML = Array.from(iterator);

// let cnicString = "42201-4372761-5";
// const iterator2 = cnicString.matchAll("-");
// document.getElementById("demo").innerHTML = Array.from(iterator2);

// let indexOfFirstMinus = cnicString.indexOf("-");
// let indexOfSecondMinus = cnicString.lastIndexOf("-");

// document.write(`Index of First Minus is: ${indexOfFirstMinus}`);
// document.write("<br>");
// document.write(`Index of Second Minus is: ${indexOfSecondMinus}`);

function badWordFound(event) {

    event.preventDefault();

    let userInp = document.getElementById("userInp").value;
    userInp = userInp.toLowerCase();
    let broke = userInp.split(" ");

    let badwords = [
        "drug",
        "drunk",
        "pagal",
        "cigarette",
        "nashedi",
        "bewaqoof",
        "jahil",
        "stupid",
        "idiot",
        "crazy",
        "mental",
        "ganja",
        "smoker",
        "alcoholic",
        "bewakoofi",
        "ullu",
        "faltu",
        "bakwas",
        "gadha",
        "chor",
        "jhoota",
        "lazy",
        "kamchor",
        "badmash",
        "awara",
        "nalayak",
        "faltugiri"
    ];

    let foundBadWord = broke.filter(alph => badwords.includes(alph));
    let convertToString = String(foundBadWord);
    let lengthOfBadWord = convertToString.length; // Dynamic
    let hash = "#";
    let cleanWord = userInp.replace(foundBadWord, hash.repeat(lengthOfBadWord));

    result = document.getElementById("demo");
    result.innerHTML = cleanWord;

}


// Hello ####d