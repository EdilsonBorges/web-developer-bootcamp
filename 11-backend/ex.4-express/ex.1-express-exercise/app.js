var app = require('express')()

app.get('/', function(res,req){
    console.log('welcome')
})

app.get('/speak/:term', function(res,req){
    if (res.params.term == 'pig') {
        console.log('The pig')
    } else if (res.params.term == 'cow') {
        console.log('The cow')
    } else if (res.params.term == 'dog') {
        console.log('The dog')
    }
})

app.get('/repeat/:term/:number',function(res,req){
    var num = res.params.number
    for(var i = 0; i < num; i++){
        console.log(res.params.term)
    }
})

app.get('*', function(res,req){
    console.log('404')
})

app.listen('3000')
