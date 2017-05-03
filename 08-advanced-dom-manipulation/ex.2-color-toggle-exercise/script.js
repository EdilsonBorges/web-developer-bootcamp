var tag = document.querySelector('p');
var button = document.querySelector('button');
var isPurple = false;

button.addEventListener('click',changeBackground);
button.addEventListener('click',changeText);

// function changeBackground() {
//     if (isPurple) {
//         document.body.style.background = 'white';
//     } else {
//         document.body.style.background = 'purple';
//     }
//     isPurple = !isPurple;
// }

function changeBackground() {
        document.body.classList.toggle("purple");
}

function changeText(){
    if (tag.textContent == 'Not clicked') {
        tag.textContent = 'Clicked';
    } else {
        tag.textContent = 'Not clicked';
    }
}