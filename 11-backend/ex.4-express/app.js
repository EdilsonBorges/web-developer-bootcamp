var express = require('express')
var app = express()

app.get('/',function(req, res){
    console.log('request on root'),res.send('Hi there!')
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

/*
npm init
npm install cat-me --save
npm uninstall cat-me --save
*/