var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.render('home.ejs')
})

app.get('/love/:thing/:id', function(req, res){
    var thing = req.params.thing
    var id = req.params.id
    res.render('love.ejs', {thingVar: thing, idVar: id})
})

app.get('/posts', function(req, res){
    var posts = [
        {title: 'Post 1', author: 'Author 1'},
        {title: 'Post 2', author: 'Author 2'},
        {title: 'Post 3', author: 'Author 3'},
    ]

    res.render('posts.ejs', {posts: posts})
})

app.listen('3000', function(){
    console.log('Server is listening')
})