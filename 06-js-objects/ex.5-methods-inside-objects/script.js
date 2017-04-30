var obj = {
    name: 'Chuck',
    age: 45,
    isCool: false,
    friends: ['bob','tina'],
    add: function(x,y){
        return x+y;
    }
};
obj.add(1,3);

var comments = {};
comments.data = ['test1','test2','test3'];

comments.print = function() {
    this.data.forEach(function(element) {
        console.log(element)
    });
}