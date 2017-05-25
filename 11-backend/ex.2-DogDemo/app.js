app.get("/", function(){
    res.render("home")
});

app.post("/createDog",function(req, res){
    Dog.create({
        name: req.body.name,
        breed: req.body.breed
    }, function(err, dog){
        res.redirect("/dogs");
    });
});