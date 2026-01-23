/*
    object {
        key: "value",
        key: "value"
    }
*/

// Constant X Reassign
const car = {
    name: "Toyota",
    model: "2002",
    weight: "850KG",
    color: "white"
}

// Object
const car2 = { name: "Honda", model: "2015", weight: "900KG", color: "black" }

// = Assignment Operator
// car = {name: "Alto"}; // Reassign
// car.name = "Alto"; // Modify Value

// Qunke isko compiler baad men perhta hai.
// document.writeln(car.name);
// console.log(car2.name);

shah_zubair = {
    brain: "0%",
    eyeColor: "black",
    age: "14"
}

muhammad_ali = {
    brain: "3%",
    eyeColor: "black",
    age: "13"
}

zainab = {
    brain: "7%",
    eyeColor: "brown",
    age: "50"
}

// document.writeln(shah_zubair.eyeColor);


// Object Literal
person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

// document.writeln(person.firstName);
// document.writeln(person["firstName"]);

data = {
    firstName: "Shah",
    lastName: "Zubair",
    id: 1365040,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

document.writeln(data.fullName()); // Key will converted to method after performing action via function

// Object Constructor Functions will be Continuted in 14.01-objects.js