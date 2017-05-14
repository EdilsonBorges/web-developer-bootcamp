
$('li').on('click',function(){
    $(this).toggleClass('completed');
});

$('span').on('click',function(e){
    // $(this).parent().toggleClass('removed');
    $(this).parent().fadeOut(300,function(){
        $(this).toggleClass('removed');
    })
    e.stopPropagation();
});
//avoid event bubbling with stopPropagation
//include all li to hide with parent()

$("input[type='text']").keypress(function(e){
    if (e.which === 13) {
        var todoText = $(this).val();
        $(this).val('');
        $('ul').append('<li>'+todoText+'</li:>');
    }
})