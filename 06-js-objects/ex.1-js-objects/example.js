var person = {
    name: "Cindy",
    age: 32,
    city: "Missoula"
};

console.log(person['name']);
console.log(person.nome);

person['age'] += 1;
person.city = 'london';

var person2 = {};
person2.name = 'travis';
person2.job = 'tester';

var person3 = new Object();
person3.name = 'travis';
person3.job = 'tester';