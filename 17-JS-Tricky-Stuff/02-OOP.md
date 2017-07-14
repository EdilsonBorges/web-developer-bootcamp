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

    ## exercise 01 ##
    
    // constructor

    var rusty = new Dog('Rusty', 3);
    var fido = new Dog('Fido', 1);

    rusty.bark(); // Rusty just barked!
    fido.bark(); // Fido just barked!
    
- Use constructor
- Use call and apply