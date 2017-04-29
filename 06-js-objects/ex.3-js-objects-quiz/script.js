var someObject = {};

someObject._name = 'Hedwig';
someObject.age = 6;
var prop = 'color';
someObject[prop] = 'red';
someObject.123 = true; // we can't do that.

var someObject = {
    friends: [
        {name:'malfoy'},
        {name:'crabble'},
        {name:'goyle'}
    ],
    color: 'blue',
    isEvil: true
};
someObject.friends[0].name;