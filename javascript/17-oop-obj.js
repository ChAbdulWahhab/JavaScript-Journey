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

class DemoStatic{
    static hello(a, b) {
        return a + b;
    }
}

// document.writeln(DemoStatic.hello(12, 12));

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
// document.writeln(obj.pcnam);

class Courier {
    constructor(parcel) {
        this.box = parcel;
    }
    get fetch() {
        return this.box;
    }
    // Infinite Recursion
    set fetch(cstm) {
        this.box = cstm;
    }
}

const obj2 = new Courier("Shoes"); // TCS
// document.writeln(obj2.fetch);

// Solving Infinite Recursion

class UserProfile {
  constructor(name) {
    this.name = name; 
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    if (value.length < 3) {
    //   console.log("Name must be greator than 3");
    } else {
    //   console.log("Good News! Name is set.");
      this._name = value;
    }
  }
}

const user1 = new UserProfile("Ali");

user1.name = "jos";
// console.log(user1.name);

/*===============================
    Asynchronous Programming
=================================*/

console.log("Zainab (Present)");

setTimeout(function() {
    console.log("Muhammad Ali (Absent)");
    console.log("Arham (Absent)");
    console.log("Salman (Absent)");
}, 10000);

console.log("Shah Zubair (Present)");


setTimeout(myFunc, 2000); // Delay 2 seconds

function myFunc() {
    console.log("I love programming!!");
}