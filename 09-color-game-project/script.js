var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();


var span = document.querySelector('span');
var messageDisplay = document.querySelector('#message');
span.textContent = pickedColor;

for(i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener('click',function(){
        if(this.style.background === pickedColor){
            messageDisplay.textContent = 'Correct!';
            changeColors(pickedColor);
        } else {
            this.style.background = '#232323';
            messageDisplay.textContent = 'Try Again';
        }
    });
}

function changeColors(color) {
    for(i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for(i = 0; i < num; i++) {
        arr.push('rgb('+
        Math.floor(Math.random() * 255)+', '+
        Math.floor(Math.random() * 255)+', '+
        Math.floor(Math.random() * 255)+')');
    }
    return arr;
}