var app = require('express')()

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('landing')
})

app.get('/campgrounds', function(req, res){
    var campgrounds = [
        { name: 'Camp 1', image: 'http://nationalhomegrantfoundation.com/wp-content/uploads/2015/12/Scout-Camp.jpg' },
        { name: 'Camp 2', image: 'http://www.travelbirbilling.com/wp-content/uploads/camp-pic1.jpg' },
        { name: 'Camp 3', image: 'http://blog.via.com/wp-content/uploads/2015/12/Thanedar-Himachal-Pradesh.jpg' },
        { name: 'Camp 4', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/88/1c/a1/camp-oak-view.jpg' }
    ]
    // var results = JSON.parse(campgrounds)
    res.render('campgrounds', {campgrounds: campgrounds})
})

app.listen('3000', function(){
    console.log('YelpCamp Server Started')
})