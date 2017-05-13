// check off

$('li').on('click',function(){
    // if li is gray -> turn black
    console.log($(this).css('color') )
    if($(this).css('color') === 'rgb(0, 0, 0)'){
        $(this).css({
            color: 'gray',
            textDecoration: 'line-through'
        });
    } else {
        $(this).css({
            color: 'black',
            textDecoration: 'none'
        });
    }
    
})