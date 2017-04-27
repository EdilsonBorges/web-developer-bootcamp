var nums = [45,66,77,34];
nums.forEach(function (nums){
    console.log(nums)
});

function ownForEach(arr, func){
    // loop through array
    for(i = 0; i < arr.length; i++){
        // call func for each item in array
        func();
    }
}
var colors = ['red','orange','yellow'];
ownForEach(colors, alert);