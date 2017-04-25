function printReverse (datas) {
    // length = datas.length;
    datas.forEach(function(data, i) {
        var arData = i+": "+data;
    });
    console.log(arData);
}
printReverse([1,2,3,4]);