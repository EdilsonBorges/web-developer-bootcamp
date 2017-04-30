var movies = [
    {
        title: 'In Bruges',
        rating: 5,
        hasWatched: true
    },
    {
        title: 'Frozen',
        rating: 4.5,
        hasWatched: false
    },
    {
        title: 'Mad Max Fury Road',
        rating: 5,
        hasWatched: true
    },
    {
        title: 'Les Miserables',
        rating: 3.5,
        hasWatched: false
    }
];

function buildString(movies) {
        if(movies.hasWatched == true) {
            movies.hasWatched = 'watched';
        } else {
            movies.hasWatched = 'not seen';
        }
        return 'You have '+movies.hasWatched+' "'+movies.title+'" - '+movies.rating+' stars';
}

movies.forEach(function (movies) {
    console.log(buildString(movies));
});
