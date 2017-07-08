- A reserved keyword in JS
- Determined by how a function is called
- Can be determined using 4 rules:
    Global Context
        var person = "Elie"
        window.person               // "Elie"
        window.person === person    // true
        console.log(this)           // window
    object/implicit
    explicit
    new