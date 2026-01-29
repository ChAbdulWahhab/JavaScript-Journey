// Object Constructor

// These are Parameters -> Argument
// () Round Brackets/Parenthesis

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
}

const args = new Person("Abdul", "Wahab", 24, "Black");

document.writeln(args.firstName);
document.writeln(args.lastName);
document.writeln(args.age);
document.writeln(args.eye);

// John
// John's --> Apostrophy('s)