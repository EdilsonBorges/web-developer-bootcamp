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