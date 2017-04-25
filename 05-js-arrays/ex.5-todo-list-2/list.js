var todos = ["Buy New Turtle"];
var input = prompt('What do you like to do?');

while (input !== 'quit') {
    if (input == 'list') {
        todos.forEach(function(todo, i){ //second argument is index
            console.log(i +": "+ todo);
        });
    } else if (input == 'new') {
        var newTodo = prompt('Enter new Todo');
        todos.push(newTodo);
    }
    var input = prompt('What do you like to do?');
}
console.log('Thank you for using the system');