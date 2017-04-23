function sing(){
    console.log("twingle twingle ...");
    console.log("how i wonder ...");
}
setInterval(sing(),2000)

setInterval(function(){
    console.log("I am an anonymous function!");
}, 2000);