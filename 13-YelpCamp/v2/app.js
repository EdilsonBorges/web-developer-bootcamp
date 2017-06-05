var app = require('express')(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/yelp_camp')
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

// schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
})

var Campground = mongoose.model('Campground', campgroundSchema)

Campground.create({
    name: 'Camp 1',
    image: 'http://nationalhomegrantfoundation.com/wp-content/uploads/2015/12/Scout-Camp.jpg'
}, function(err, campground){
    if(err){
        console.log(err)
    } else {
        console.log('Newly created campground')
        console.log(campground)
    }
}
)

var campgrounds = [
    { name: 'Camp 1', image: 'http://nationalhomegrantfoundation.com/wp-content/uploads/2015/12/Scout-Camp.jpg' },
    { name: 'Camp 2', image: 'http://www.travelbirbilling.com/wp-content/uploads/camp-pic1.jpg' },
    { name: 'Camp 3', image: 'http://blog.via.com/wp-content/uploads/2015/12/Thanedar-Himachal-Pradesh.jpg' },
    { name: 'Camp 4', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/88/1c/a1/camp-oak-view.jpg' },
    { name: 'Camp 1', image: 'http://nationalhomegrantfoundation.com/wp-content/uploads/2015/12/Scout-Camp.jpg' },
    { name: 'Camp 2', image: 'http://www.travelbirbilling.com/wp-content/uploads/camp-pic1.jpg' },
    { name: 'Camp 3', image: 'http://blog.via.com/wp-content/uploads/2015/12/Thanedar-Himachal-Pradesh.jpg' },
    { name: 'Camp 4', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/88/1c/a1/camp-oak-view.jpg' }
]

app.get('/', function(req, res){
    res.render('landing')
})

app.get('/campgrounds', function(req, res){
    res.render('campgrounds', {campgrounds: campgrounds})
})

app.post('/campgrounds', function(req, res){
    var name = req.body.name
    var image = req.body.image
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground)

    res.redirect('/campgrounds')
})

app.get('/campgrounds/new', function(req, res){
    res.render('new')
})

app.listen('3000', function(){
    console.log('YelpCamp Server Started')
})