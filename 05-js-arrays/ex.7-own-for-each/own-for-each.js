var nums = [45,66,77,34];
nums.forEach(function (nums){
    console.log(nums)
});

function ownForEach(arr, func){
    // loop through array
    for(i = 0; i < arr.length; i++){
        // call func for each item in array
        func(arr[i]);
    }
}
var colors = ['red','orange','yellow'];

ownForEach(colors, function(color){
  console.log(color);
});

// Own For Each on prototype
Array.prototype.ownForEach = function(func){
    for(i = 0; i < this.length; i++){
        func(this[i]);
    }   
}
var testing = ['test 1', 'test 2', 'test 3'];
testing.ownForEach(function(name){
    console.log("I love "+name);
});

//function that will be executed just once:
(function(){console.log("Im a function")})()