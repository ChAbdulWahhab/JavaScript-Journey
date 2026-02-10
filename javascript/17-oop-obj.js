/*=======================
    Classes in OOPs
========================*/

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Toyota", 2014);
// document.writeln("My car is " + myCar.age() + " years old.");

/*=======================
    Inheritance in OOPs
========================*/

class Car2 {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return "I have a " + this.carname;
    }
}

class Model extends Car2 {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ", it is a " + this.model;
    }
}

let myCar2 = new Model("Ford", "Mustang");
// document.writeln(myCar2.show());

/*===============================
    Getters and Setters in OOPs
=================================*/

// Here...