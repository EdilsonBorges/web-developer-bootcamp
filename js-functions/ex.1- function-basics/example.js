function doSomething() {
    console.log("Hi!");
}

doSomething; // without parentheses this prints the funcion code
doSomething();
doSomething();
doSomething();

function singSong(song) {
    console.log(song);
}

singSong('test');
singSong('test 2');
singSong('test 3');

function greet(person1, person2, person3) {
    console.log("hi "+person1);
    console.log("hi "+person2);
    console.log("hi "+person3);
}

greet("Harry","Ron","Hermione");

function square(x) {
    return x*x;
}

"4 square is: " + square(4);