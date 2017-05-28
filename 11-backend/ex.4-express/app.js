var express = require('express');
var app = express();

// "/" -> hi there
// "/bye" -> goodbye
// "/dog" -> meow

app.get('/',function(req, res){
    res.send('Hi there');
});

app.listen('3000');