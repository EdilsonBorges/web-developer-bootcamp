var answer = prompt("Are we there yet? [1]");
var numAsks = 1;
while(answer.indexOf("yes") === -1 && numAsks <=3) {
    var answer = prompt("Are we there yet? [2]");
    numAsks++;
}
alert("We made it!");
