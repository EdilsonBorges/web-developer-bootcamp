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
- Revisit 'new' keyword
- Use constructor
- Use call and apply