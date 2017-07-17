## OOP 1 ##
- Defining Object Oriented Programming
    - A programming model based around the idea of objects
    - These objects are constructed from what are called "classes", which we can think of like a blueprint. We call these objects created from classes "instances"
    - We strive to make our classes abstract and modular
    - JS does not have "classes" built into it. We use functions and objects.
        ## example ##
        function House(bedrooms, bathrooms, numSqft){
            this.bedrooms = bedrooms;
            this.bathrooms = bathrooms;
            this.numSqft = numSqft;
        }
        -> Capitalization of the function name - this is convention
        -> The keyword 'this' is back
        -> We are attaching properties onto the keywork 'this'. We'd like the keyword 'this' to refer to the object we'll create from our constructor function.

## OOP 2 ##
- 'new' keyword
    Problem: how to we use our constuctor to actually construct objects?
    var firstHouse = House(2,2,1000)
    firstHouse // undefined

    Solution: we have to use 'new' keyword
    var firstHouse = new House(2,2,1000)
    firstHouse.bedrooms     // 2
    firstHouse.bathrooms    // 2
    firstHouse.numSqft      // 1000
    -> it first creates an empty object
    -> it then sets the keyword 'this' to be that empty object
    -> it adds the line return this
    -> it adds a property onto the empty object called "__proto__", which links the prototype property on the constructor function to the empty object

    function Dog(name, age){
        this.name = name,
        this.age = age,
        this.bark = function(){
            console.log(this.name + 'just barked!');
        }
    }
    var rusty = new Dog('Rusty', 3);
    var fido = new Dog('Fido', 1);
    rusty.bark(); // Rusty just barked!
    fido.bark(); // Fido just barked!
    
## OOP 3 ##
- Multiple Constructors
    Two standard constructors:
    function Car(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.numWheels = 4;
    }
    function Motorcycle(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.numWheels = 2;
    }

    Using call/apply:
    function Car(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.numWheels = 4;
    }
    Call:
    function Motorcycle(make, model, year){
        Car.call(this, make, model, year);
        this.numWheels = 2;
    }
    Apply:
    function Motorcycle(make, model, year){
        Car.apply(this, [make, model, year]); // or Car.apply(this, arguments); 
        this.numWheels = 2;
    }

## OP 4 ##
- Prototypes
    - Every constructor function has a property on it called "prototype", which is an object
    - The prototype object has a property on it called "constructor", which points back to the constructor function
    - Anytime an object is created using the 'new' keyword, a property called "__proto__" gets created, linking the object and the prototype property of the constructor function
    function Person(name){
	    this.name = name;
    }
    var elie = new Person("Elie");
    var colt = new Person("Colt");
    elie.__proto__ === Person.prototype // true

## OP 5 ##
- Prototype Chain
    => The prototype is shared among all objects created by that constructor function
    Person.prototype.isInstructor = true;
    elie.isInstructor; // true
    colt.isInstructor; // true
    ## example ##
    var arr = [];
    arr.push(10); // 1
    console.dir(arr); // Array(1)0: 10length: 1__proto__: Array(0)
    arr.__proto__ === Array.prototype
    arr.hasOwnProperty('length') // true
    dir(arr) // a lot of things, but no hasOwnProperty. At the bottom, we can see another __proto__, inside of it we can find hasOwnProperty

## OP 6 ##
- Exercise: Refactoring
    function Person(name){
        this.name = name;
        this.sayHi = function(){
            return "Hi" + this.name;
        }
    }
    elie = new Person("Elie");
    elie.sayHi();

    function Person(name){
        this.name = name;
    }
    Person.prototype.sayHi = function(){
        return "Hi" + this.name;
    }
    elie = new Person("Elie");
    elie.sayHi();

    ## Vehicle exercise ##
    function Vehicle(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }
    Vehicle.prototype.turnOn = function(){
        return this.isRunning = true;
    }
    Vehicle.prototype.turnOff = function(){
        return this.isRunning = false;
    }
    Vehicle.prototype.honk = function(){
        if(this.isRunning){
            return "beep";
        } else {
            return "Vehicle is off";
        }
    }
    var carTest = new Vehicle(1, 2, 2015); // undefined
    carTest.turnOn() // true
    carTest.honk() // "beep"
    carTest.turnOff() // false
    carTest.honk() // "Vehicle is off"
    
    ## Recap ##
    - Everytime the new keyword is used, a link between the object created and the prototype
    property of the constructor is established - this link can be accessed using __proto__
    - The prototype object contaions a property called constructor, which points back to
    the constructor function
    - To share properties and methods for objects created by a constructor function, place
    them in the prototype as it is the most efficient

## OP 7 ##
- Closures
    - A closure is a function that makes use of variables defined in outer functions that
    have previously returned
    ## example ##
    function outer(){
        var data = "closures are ";
        return function inner(){
            var innerData = "awesome";
            return data + innerData;
        }
    }
    outer()() // "closures are awesome"

    ## example 2 ##
    function outer(a){
        return function inner(b){
            /*
            the inner function is making use of the variable "a"
            which was defined in an outer function called "outer"
            and by time this is called, that outer function has returned
            this function called "inner" is a closure
            */
            return a + b
        }
    }
    outer(5)(5); // 10


