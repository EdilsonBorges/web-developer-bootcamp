var express = require("express");
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/auth_demo_app');

app.set('view engine', 'ejs');

app.get('/', function (req, res){
    res.render('home');
});

app.listen('3000', function(){
    console.log('Sever Started')
});