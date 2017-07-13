- Define Object Oriented Programming
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

        Problem: how to we use our constuctor to actually construct objects?
        var firstHouse = House(2,2,1000)
        firstHouse // undefined
        
- Revisit 'new' keyword
- Use constructor
- Use call and apply