var app = require('express')()

app.get('/', function(req, res){
    res.send('welcome')
})

app.get('/speak/:term', function(req, res){
    var sound = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof Woof!'
    }
    res.send('The ' + req.params.term + ' says '+
        sound[req.params.term]
    )
})

app.get('/repeat/:term/:times',function(req, res){
    var term = req.params.term
    var times = req.params.times
    var result = ''
    for(var i = 0; i < times; i++){
        result += term + ' '
    }
    res.send(result)
})

app.get('*', function(req, res){
    res.send('404 - page not found')
})

app.listen('3000')
