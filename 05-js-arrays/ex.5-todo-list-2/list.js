var todos = ["Buy New Turtle"];
var input = prompt('What do you like to do?');

while (input !== 'quit') {
    if (input == 'list') {
        listTodos();
    } else if (input == 'new') {
        addTodo();
    } else if (input == 'delete') {
        deleteTodo();
    }
    var input = prompt('What do you like to do?');
}
console.log('Thank you for using the system');

function listTodos(){
        console.log("******");
        todos.forEach(function(todo, i){ //second argument is index
            console.log(i +": "+ todo);
        });
        console.log("******");
}

function addTodo(){
        var newTodo = prompt('Enter new Todo');
        todos.push(newTodo);
}

function deleteTodo(){
        var index = prompt('Enter index of todo to delete');
        todos.splice(index,1);
}