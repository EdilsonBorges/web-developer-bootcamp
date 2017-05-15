
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(e){
    // $(this).parent().toggleClass('removed');
    $(this).parent().fadeOut(300,function(){
        $(this).toggleClass('removed');
    })
    e.stopPropagation();
});
//avoid event bubbling with stopPropagation
//include all li to hide with parent()

$("input[type='text']").keypress(function(e){
    if (e.which === 13 && $(this).val() !== '') {
        var todoText = $(this).val();
        $(this).val('');
        $('ul').append('<li><span><i class=\'fa fa-trash\'></i></span> '+todoText+'</li:>');
    }
})