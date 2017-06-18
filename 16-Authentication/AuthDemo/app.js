var express = require("express"),
    mongoose = require('mongoose'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    LocalStrategy =  require('passport-local'),
    passportLocalMongoose =  require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/auth_demo_app');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res){
    res.render('home');
});

app.listen('3000', function(){
    console.log('Sever Started')
});