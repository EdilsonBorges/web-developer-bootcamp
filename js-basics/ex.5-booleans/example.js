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