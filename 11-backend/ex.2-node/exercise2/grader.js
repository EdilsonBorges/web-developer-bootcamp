module.exports = {
    average: function(scores) {
        var total = 0;
        scores.forEach(function(score){
            total +=score;
        });
        var avg = total/scores.length;
        return Math.round(avg);
    }
}