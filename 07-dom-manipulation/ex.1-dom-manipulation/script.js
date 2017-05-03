var h1 = document.querySelector('h1');
h1.style.color = 'pink';

var body = document.querySelector('body');
setInterval(function(){
        if(body.style.background == 'blue'){
            body.style.background = 'green'
        } else {
            body.style.background = 'blue'
        }
    }
    ,1000)
// clearInterval(1);