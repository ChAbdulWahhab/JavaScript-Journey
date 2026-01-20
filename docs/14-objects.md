## Objects
Objects are entities with properties and methods and resemble to real life objects. Properties specify the characteristics or attributes of an object, while methods identify the behavior of an object. For example consider a real life object namely, `Car`.

The attributes of the `Car` object can include color, car number, and model. The methods of the `car` could be `run()` that specifies the running behavior of the car. Similarly, in JavaScript, objects have their own properties and methods.

JavaScript provides built-in objects and allows creating user-defined objects. The description of the object is as follow:

- **Built-in Objects** - Are pre-defined objects which are already defined. Their properties and methods need to be called to fulfill a task. An example of a pre-defined object is the `Array` object.
- **Custom Objects** - Are user-defined objects, which the developer explicitly creates in the script and defines their properties and methods. For example, to store doctor details, such as name, age, hospital name, and so on an object named `doctor` can be created.

## Creating Custom Objects
The `Object` object is the parent object from which all JavaScript objects are derived. Custom objects can be derived from this object by using the `new` keyword.

There are two main methods to create a custom object. In the first method, an object can be create by using the built-in `Object` object, which is also known as the direct method. In the second method, an object can be created by defining a template and initializing it with the `new` keyword.

The syntax to create the object using these methods are as follows:
##### Direct Method
The syntax to create a custom object using the `Object` object is as follows:
`var object_name = new Object();`

##### Template Method
An object's template refers to a structure that specifies the custom properties and methods of an object. There are two steps in creating an object by using this method. First, the object type is declared using constructor function. Second, you specify the object of the declared object type by using the `new` keyword.

JavaScript allows creating a reusable template without having to redefine properties and methods repeatedly to fulfill a particular object's requirements. This template is known as the constructor function. A constructor function is a reusable block that specifies the type of object, its properties, and methods. It might or might not take any parameters, After creating the constructor function, you specify an object of the declared object type using the `new` keyword. The `new` keyword allocates memory for the object and invokes a constructor functions.
**Syntax:**
```
function object_type(list of parameters) {
	// Body specifying properties and methods
}
```
