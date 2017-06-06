var app = require('express')(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/yelp_camp')
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

var Campground = mongoose.model('Campground', campgroundSchema)

// db.campgrounds.drop()

// Campground.create(
//     { name: 'Camp 1', image: 'http://nationalhomegrantfoundation.com/wp-content/uploads/2015/12/Scout-Camp.jpg', description:'This is a huge granite hill!' },
//     { name: 'Camp 2', image: 'http://www.travelbirbilling.com/wp-content/uploads/camp-pic1.jpg' },
//     { name: 'Camp 3', image: 'http://blog.via.com/wp-content/uploads/2015/12/Thanedar-Himachal-Pradesh.jpg' },
//     { name: 'Camp 4', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/88/1c/a1/camp-oak-view.jpg' }
//     , function(err, campground){
//     if(err){
//         console.log(err)
//     } else {
//         console.log('Newly created campground')
//         console.log(campground)
//     }
// })

app.get('/', function(req, res){
    res.render('landing')
})

app.get('/campgrounds', function(req, res){
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err)
        } else {
            res.render('campgrounds', {campgrounds: allcampgrounds})
        }
    })
})

app.post('/campgrounds', function(req, res){
    var name = req.body.name
    var image = req.body.image
    var newCampground = {name: name, image: image}
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err)
        } else {
            res.redirect('/campgrounds')
        }
    })
})

app.get('/campgrounds/new', function(req, res){
    res.render('new')
})

app.get('/campgrounds/:id', function(req, res){
    console.log('yelp camp!')
})

app.listen('3000', function(){
    console.log('YelpCamp Server Started')
})