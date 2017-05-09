var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');


resetButton.addEventListener('click',function(){
    colors =  generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
})

colorDisplay.textContent = pickedColor;

for(i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener('click',function(){
        if(this.style.background === pickedColor){
            messageDisplay.textContent = 'Correct!';
            h1.style.background = pickedColor;
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
        Math.floor(Math.random() * 256)+', '+
        Math.floor(Math.random() * 256)+', '+
        Math.floor(Math.random() * 256)+')');
    }
    return arr;
}