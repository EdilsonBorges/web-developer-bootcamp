- A reserved keyword in JS
- Determined by how a function is called
- Can be determined using 4 rules:
    Global Context
        var person = "Elie"
        window.person               // "Elie"
        window.person === person    // true
        console.log(this)           // window
    Object/Implicit
        var dog = "Sam"
        function makePerson(){
            this.person = "Rob" // this refers to window, so can be accessed outise the function
        }
    explicit
    new