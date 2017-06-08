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
{}
// Blog.create({
//     title: 'Test',
//     image: 'http://jj-bg.info/gallery/album_1/min/test.png',
//     body: 'some thing'
// })

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

app.listen('3000', function(){
    console.log('Server Running')
})