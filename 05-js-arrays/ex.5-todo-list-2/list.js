var todos = ["Buy New Turtle"];
var input = prompt('What do you like to do?');

while (input !== 'quit') {
    if (input == 'list') {
        console.log("******");
        todos.forEach(function(todo, i){ //second argument is index
            console.log(i +": "+ todo);
        });
        console.log("******");
    } else if (input == 'new') {
        var newTodo = prompt('Enter new Todo');
        todos.push(newTodo);
    } else if (input == 'delete') {
        var index = prompt('Enter index of todo to delete');
        todos.splice(index,1);
    }
    var input = prompt('What do you like to do?');
}
console.log('Thank you for using the system');