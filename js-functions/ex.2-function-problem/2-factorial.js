function factorial(number) {
    if (typeof(number) == 'number') {
        var factorialNumber = 0;
        if (number == 0) {
            result = 1;
        } else {
            while(number > 0) {
                if (factorialNumber === 0) {
                    factorialNumber = number;
                } else {
                    factorialNumber = factorialNumber*number;
                }
                number--;
            }
            result = factorialNumber;
        }
    } else{
        result = "This is not a number";
    }
    return result;
}

// shortening

function factorial(num){
    var result = 1;
    for(var i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}