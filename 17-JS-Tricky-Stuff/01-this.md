- A reserved keyword in JS
- Determined by how a function is called
- Can be determined using 4 rules:
    Global Context
        var person = "Elie"
        window.person               // "Elie"
        window.person === person    // true
        console.log(this)           // window
        var dog = "Sam"
        function makePerson(){
            this.person = "Rob" // this refers to window, so can be accessed outise the function - bad pratice
        }
    Implicit/Object
        the 'this' value will the closest to the parent object
        var person = {
            firstName: "Elie",
            sayHi: function(){
                return "Hi " + this.firstName
            },
            determineContext: function(){
                return this === person
            }
        }
        person.sayHi() // "Hi Elie"
        person.determineContext()  // true
    Explicit
        choose what we want the context of 'this' to be using call, apply and bind
            method  |   parameters                  |  invoke immediately
            Call    |   thisArg, a, b, c, d, ...    |   Yes
            Apply   |   thisArg, [a, b, c, d, ...]  |   Yes
            Bind    |   thisArg, a, b, c, d, ...    |   No
    new