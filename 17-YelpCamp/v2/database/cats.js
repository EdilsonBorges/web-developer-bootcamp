var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cat_app')

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})

var Cat = mongoose.model('Cat', catSchema)

// var newCat = new Cat({
//     name: 'Mrs. Norris',
//     age: 7,
//     temperament: 'Evil'
// })

// newCat.save(function(err, cat){
//     if(err){
//         console.log('smtg went wrong')
//     } else {
//         console.log('Success!!')
//         console.log(cat)
//     }
// })

// Cat.find({}, function(err, cats){
//     if(err){
//         console.log('Error!')
//         console.log(err)
//     } else {
//         console.log('All the cats:')
//         console.log(cats)
//     }
// })

Cat.create({
    name: 'Snow White',
    age: 15,
    temperament: 'Bland'
}, function(err, cats){
    if(err){
        console.log('Error!')
        console.log(err)
    } else {
        console.log('Success!!')
        console.log(cats)
    }
})