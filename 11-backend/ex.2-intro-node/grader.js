function average(scores) {
    //add all scores together
    var total = 0;
    scores.forEach(function(score){
        total +=score;
    });
    //divide by total
    var avg = total/scores.length;
    //round avg
    return Math.round(avg);
}

// var scores = [90,98,89,100,100,86,94];
// average(scores);

// var scores2 = [40,65,77,82,80,54,73,63,95,49];
// average(scores2);