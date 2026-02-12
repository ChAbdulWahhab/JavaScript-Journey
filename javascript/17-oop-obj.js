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
    Static method in OOPs
=================================*/

class Person{
    static hello(a, b) {
        return a + b;
    }
}

// document.writeln(Person.hello(12, 12));

/*===============================
    Getters and Setters in OOPs
=================================*/

class Computer {
    constructor(brand) {
        this.pcname = brand;
    }
    get pcnam() {
        return this.pcname;
    }
    set pcnam(x) {
        this.pcname = x;
    }
}

const obj = new Computer("HP");
document.writeln(obj.pcnam);

class Courier {
    constructor(parcel) {
        this.box = parcel;
    }
    get lekeana() {
        return this.box;
    }
    set lekeana(cstm) {
        this.box = cstm;
    }
}

const obj2 = new Courier("Shoes"); // TCS
document.writeln(obj2.lekeana);