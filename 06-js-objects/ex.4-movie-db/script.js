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

movies.forEach(function (value) {
    if(value.hasWatched == true) {
        value.hasWatched = 'watched';
    } else {
        value.hasWatched = 'not seen';
    }
    console.log('You have '+value.hasWatched+' "'+value.title+'" - '+value.rating+' stars');
});