function isEven(number) {
    if (typeof(number) == "number"){
        if(number % 2 == 0){
            return true;
        } else {
            return false;
        }
    } else {
        return "This is not a number";
    }
}

// shortening

function isEven(number) {
    return number % 2 === 0;
}