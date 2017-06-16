var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Campground = require('./models/campground'),
    seedDB = require ('./seeds')

// seedDB();
mongoose.connect('mongodb://localhost/yelp_camp');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('landing')
})

app.get('/campgrounds', function(req, res){
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err)
        } else {
            res.render('campgrounds/index', {campgrounds: allcampgrounds})
        }
    })
})

app.post('/campgrounds', function(req, res){
    var name = req.body.name
    var image = req.body.image
    var desc = req.body.description
    var newCampground = {name: name, image: image, description: desc}
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err)
        } else {
            res.redirect('/campgrounds')
        }
    })
})

app.get('/campgrounds/new', function(req, res){
    res.render('campgrounds/new')
})

app.get('/campgrounds/:id', function(req, res){
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground){
        if(err){
            console.log(err)
        } else{
            res.render('campgrounds/show', {campground: foundCampground})
        }
    })
})

// COMMENT ROUTES
app.get('/campgrounds/:id/comments/new', function(req, res){
    Campground.findById(req.param.id, function(err, campground){
        if(err){
            console.log(err);
        } else{
            res.render('comments/new', {campground: campground});
        }
    })
    res.render('comments/new');
})

app.listen('3000', function(){
    console.log('YelpCamp Server Started')
});