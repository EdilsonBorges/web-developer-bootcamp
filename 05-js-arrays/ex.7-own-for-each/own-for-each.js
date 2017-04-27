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


//function that i'll be executed just once:
(function(){console.log("Im a function")})()