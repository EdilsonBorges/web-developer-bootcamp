
$('li').on('click',function(){
    $(this).toggleClass('completed');
})

$('span').on('click',function(e){
    $(this).parent().toggleClass('removed');
    e.stopPropagation();
})

//avoid event bubbling with stopPropagation
//include all li to hide with parent()