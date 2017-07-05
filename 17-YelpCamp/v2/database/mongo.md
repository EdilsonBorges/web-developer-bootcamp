show dbs
use demo
db.dogs.insert({name: 'Rusty', breed: 'Mutt'})
show collections
db.dogs.find()
db.dogs.insert({name: 'Lucy', breed: 'Mutt'})
db.dogs.insert({name: 'Lulu', breed: 'Poodle'})
db.dogs.find({breed: 'Mutt'})
db.dogs.update({name: 'Lulu'},{breed: 'Labradoodle'})
db.dogs.update({name: 'Rusty'},{$set: {name: 'Tatter', isCute: true}})
db.dogs.remove({breed: 'Labradoodle'})
db.dogs.remove({breed: 'Mutt'})