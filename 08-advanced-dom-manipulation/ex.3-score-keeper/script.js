var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var reset = document.querySelector('#reset');
var h1 = document.querySelector('h1');
var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener('click',function (){
    p1Score++;

})

p2Button.addEventListener('click',function (){
    p2Score++;
})