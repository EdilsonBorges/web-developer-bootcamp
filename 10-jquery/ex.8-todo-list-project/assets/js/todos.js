
$('li').on('click',function(){
    $(this).toggleClass('completed');
})

$('span').on('click',function(){
    $(this).toggleClass('removed');
})

//avoid event bubbling