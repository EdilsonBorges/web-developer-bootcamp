true == "1"         //true
0 == false          //true
null == undefined   //true
NaN == NaN          //false (not a number)

var x = 10;
var y = "a";
y === "b" || x >= 10

var x = 3;
var y = 8;
!(x == "3" || x === y) && !(y != 8 && x <= y)

//Truthy and Falsy Values
//Values that aren't actually true or false,
//are still inherently "truthy" or "falsey"
//when evaluated in a boolean context

!!"Hi There" //true
!!""         //false
!!null       //false
!!0          //false
!!-1         //true
!!NaN        //false

var str = " "
var msg = "haha! "
var isFunny = "false"
!((str || msg) && isFunny)


// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));
// If age is negative
if(age < 0) {
 console.log("Come back once you're out of the womb");
}
// If age is 21  
if(age === 21) {
 console.log("Happy 21st Birthday!");
}
// If age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
 console.log("Your age is odd!");
}
// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}

// DRY = Don't repeat yourself
var count = 1;
while(count < 6) {
    console.log("count is: "+count);
    count++;
}