var dogs = ['Rusty','Lucky','Bubba'];
dogs;
dogs[1];
dogs.push('Wyatt');
dogs[1] = 'Lucy';

var dog = {
    name: 'Bubba',
    breed: 'Lab'
}
dog;
dog['name'];
dog.age = 6;
dog.breed = 'Black Lab';
//------------------------------------------

var posts = [
    {
        title: 'cats',
        author: 'colt',
        comment: ['yeah','nah','lol']
    },
    {
        title: 'dogs',
        author: 'breeze',
        comment: ['<3', 'testing', 'nice']
    }
];
posts[1].comment[2];