var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
    setupModeButtons();
    setupSquare();
    reset();
}

function setupModeButtons() {
    for(i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click',function() {
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
        reset();
        });
    }
}

function setupSquare() {
    for(i = 0; i < squares.length; i++){
        squares[i].addEventListener('click',function(){
            if(this.style.background === pickedColor){
                messageDisplay.textContent = 'Correct!';
                resetButton.textContent = 'Play Again?';
                h1.style.background = pickedColor;
                changeColors(pickedColor);
            } else {
                this.style.background = '#232323';
                messageDisplay.textContent = 'Try Again';
            }
        });
    }
}

function reset() {
    colors =  generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = '';
    for(var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = 'block';
        } else {
           squares[i].style.display = 'none'; 
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener('click',function(){
    reset();
})

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