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

app.listen('3000', function(){
    console.log('Server is listening')
})