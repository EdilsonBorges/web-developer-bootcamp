function printReverse (datas) {
    for(j = datas.length-1; j >= 0; j--) {
        console.log(datas[j]);
    }
}
printReverse([1,2,3,4]);

function isUniform(data) {
    var number = data[0];
    for(i = 0; i < data.length;i++){
        if(number !== data[i]) {
            return false;
        }
        number = data[i];
    }
    return true;
}
isUniform(['1','1','1','1']);

function sumArray(data) {
    var sum = 0;
    for(i = 0; i< data.length; i++) {
        sum += data[i];
    }
    return sum;
}
sumArray([1,2,3,4,5]);

function max(data) {
    number = 0;
    for(i = 0; i < data.length;i++){
        if(number < data[i]) {
            number = data[i];
        }
    }
    return number;
}
max([1,2,3]);