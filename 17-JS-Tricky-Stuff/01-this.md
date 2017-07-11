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
                #### example ####
                ##  before  ##
                var colt = {
                    firstName: "Colt",
                    sayHi: function(){
                        return "Hi " + this.firstName
                    }
                }

                var elie = {
                    firstName: "Elie",
                    sayHi: function(){
                        return "Hi " + this.firstName
                    }
                }               
                colt.sayHi()
                elie.sayHi() 

                ##  after   ##
                var colt = {
                    firstName: "Colt",
                    sayHi: function(){
                        return "Hi " + this.firstName
                    }
                }

                var elie = {
                    firstName: "Elie"
                }               
                colt.sayHi()
                colt.sayHi.call(elie) // "Hi elie"

            method  |   parameters                  |  invoke immediately
            Apply   |   thisArg, [a, b, c, d, ...]  |   Yes
                #### example ####
                    addNumbers: function(a,b,c,d){
                        return this.firstName + " just calculated " + (a+b+c+d)
                    }

                    colt.sayHi.apply(elie) // "Hi elie"
                    colt.addNumbers.call(elie,1,2,3,4) // Elie just calculated 10

            method  |   parameters                  |  invoke immediately
            Bind    |   thisArg, a, b, c, d, ...    |   No
            work like call, but bind returns a function with the context of 'this' bound already
                #### example ####
                var elieCalc = colt.addNumbers.bind(elie,1,2,3,4) // function(){}...
                elieCalc() // Elie just calculated 1011
                ### example 2 ###
                var colt = {
                    firstName: "Colt",
                    sayHi: function(){
                        setTimeout(function(){
                            console.log("Hi" + this.firstName)
                        },1000);
                    }
                }
                colt.sayHi();
    new