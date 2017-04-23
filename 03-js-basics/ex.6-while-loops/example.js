var num = 1;
while (num <= 10) {
    console.log(num);
    num += 2;
}

var num = 1;
while (num <= 20) {
    if(num % 4 === 0) {
        console.log(num);
    }
    num++;
}

// var num = 100;
// while (num < 150) {
//     console.log(num + 1);
//     num--;
// }

console.log('All number between -10 and 19');
var num = -10;
while (num <= 19) {
    console.log(num);
    num++;
}

console.log('Even numers');
var num = 300;
while (num <= 333) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;
}

console.log('Odd numers');
var num = 10;
while (num <= 40) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

console.log('Multiples of 5');
var num = 5;
while (num <= 50) {
    if (num % 5 === 0) {
        console.log(num);
    }
    num++;
}