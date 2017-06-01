var app = require('express')()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('home')
})

app.post('/addfriend', function(req, res){
    console.log(req.body)
    res.send('post route')
})

app.get('/friends',function(req, res){
    var friends = ['Ted', 'Barney','Marshall', 'Robin', 'Lily']
    res.render('friends', {friends: friends})
})

app.listen('3000', function(){
    console.log('server started')
})