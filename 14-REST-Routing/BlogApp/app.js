var express = require('express')
    bodyParser = require('body-parser')
    mongoose = require('mongoose')
    app = express()

// App config
mongoose.connect('mongodb://localhost/blog_app')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

// Mongoose/Model Config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})

var Blog = mongoose.model('Blog', blogSchema)

// RESTful Routes
app.get(['/','/blogs'], function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err)
        } else {
            res.render('index', {blogs: blogs})
        }
    })
})

app.get('/blogs/new', function(req, res){
    res.render('new')
})

app.post('/blogs', function(req, res){
    Blog.create(req.body.blog, function(err, newBlog){
        if(err) {
            res.render('new')
        } else {
            res.redirect('/blogs')
        }
    })
})

app.get('/blogs/:id', function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect('/blogs')
        } else {
           res.render('show', {blog: foundBlog}) 
        }
    })
})

app.get('/blogs/:id/edit', function(req, res){
    Blog.findById(req.params.id, function(err, editBlog){
        if(err){
            res.redirect('/blogs')
        } else {
           res.render('edit', {blog: editBlog}) 
        }
    })
})

app.listen('3000', function(){
    console.log('Server Running')
})