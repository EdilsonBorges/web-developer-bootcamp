5 primitive datatypes

######### number #########

4
9.9
-12

------ console -------
36 			enter-> 36
5 + 6 		enter-> 11
10 % 3		enter-> 1
100 % 3		enter-> 1

######### string #########

"Hey!"
"43"

------ console -------
"hi guys"
"3" + "7" 					enter-> "37"
"one simple\"test\"!"		enter-> "one simple"test"!"
"one simple\\\"test\\\"!" 	enter-> "one simple\"test\"!
"whats Up?".length		 	enter-> 9
("what" + "what")[6]	    enter-> "a"
"a".length % "a\\".length  enter->  1 

######### booleans #########

true
false

------ console -------
true                enter-> true
true + false        enter-> 1
true + true+ false  enter-> 2

######### null and undefined #########

null
undefined

------ console -------
var a          enter-> undefined
a              enter-> undefined
b              enter-> Uncaught ReferenceError: b is not defined
var a = null   enter-> undefined
a              enter-> null

######### Variables #########

var something

------ console -------
var name = "Rusty";     enter-> undefined
var sNumber = 72;       enter-> undefined
var isAdorable = true;  enter-> undefined
"Hello "+ name          enter-> "Hello Rusty"
sNumber % 7             enter-> 2