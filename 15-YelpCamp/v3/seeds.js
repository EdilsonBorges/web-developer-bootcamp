var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
    { name: 'Camp 1', image: 'http://nationalhomegrantfoundation.com/wp-content/uploads/2015/12/Scout-Camp.jpg', description:'This is a huge granite hill!' },
    { name: 'Camp 2', image: 'http://www.travelbirbilling.com/wp-content/uploads/camp-pic1.jpg', description:'Description camp 2' },
    { name: 'Camp 3', image: 'http://blog.via.com/wp-content/uploads/2015/12/Thanedar-Himachal-Pradesh.jpg', description:'Description camp 3' },
    { name: 'Camp 4', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/88/1c/a1/camp-oak-view.jpg', description:'Description camp 4' }
]

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log('Removed campgrounds!');
            //Add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err){
                    if(err){
                        console.log(err);
                    } else {
                        console.log('Added a campground!');
                        //Create a comment
                        Comment.create(
                            {
                                text: 'This place is great but should have internet',
                                author: 'Homer'
                            }, function(err){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log('Added a comment!');
                                }
                            });
                    }
                })
            });
        }
    });
}

module.exports = seedDB;



// db.campgrounds.drop()

// Campground.create(

//     , function(err, campground){
//     if(err){
//         console.log(err)
//     } else {
//         console.log('Newly created campground')
//         console.log(campground)
//     }
// })