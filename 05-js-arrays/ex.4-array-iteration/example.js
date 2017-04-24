// For Loop
var colors = ['red','green','blue'];
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ForEach arData.forEach(someFunction)
var colors = ['red','green','blue'];
colors.forEach(function(anyName){
    console.log(anyName);
});

function printColor(color) {
    console.log('********');
    console.log(color);
    console.log('********');
}

colors.forEach(printColor()); // you can't use parentheses
colors.forEach(printColor); // calling each value with another function


var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ['red','orange','yellow','green'];

numbers.forEach(function(registry){
    if(registry % 3 === 0){
        console.log(registry);
    }
});
// 3, 6 and 9 