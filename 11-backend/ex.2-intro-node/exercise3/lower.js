function lower(scores) {
    var actual = 0;
    scores.forEach(function(score){
        if(actual < score) {
            result = score;
        }
    });
    return result;
}
