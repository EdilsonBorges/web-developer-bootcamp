var express = require('express')
var app = express()

app.get('/',function(req, res){
    console.log('request on root'),res.send('Hi there!')
})
app.get('/r/:subrreditName',function(req, res){
    console.log('request on r'), res.send('Welcome to subreddit!')
})
app.get('/bye',function(req, res){
    console.log('request on bye'), res.send('Good bye!')
})
app.get('/dog',function(req, res){
    console.log('request on dog'),res.send('Meow!')
})
app.listen('3000',function(){
    console.log('server started on por 3000')
})
app.get('*',function(req, res){
    console.log('request on star'),res.send('You are a star!')
})

/*
npm init
npm install cat-me --save
npm uninstall cat-me --save
*/

/*
The order of routes matters. The * route has to be at the end.
dry: don't repeat yourself
*/