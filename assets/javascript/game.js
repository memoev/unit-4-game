$('.character').click(function () {
    let htmlString = $(this).html();
    //console.log(htmlString);
    //console.log($('#character-box').not($(this)).html());
    
    $('.character').each( function() {
        if ($(this).html() === htmlString) {
            //console.log('hey');
            $(this).find('h6').css('background', '#008000');
            //console.log($(this).html());
            $('#selected-container').append($(this).html());
        } else {
            //console.log('not');
            $(this).find('h6').css('background', '#B22222');
            $(this).find('div').wrapAll("<div class='enemy' />"); 
            //console.log($(this).html());
            $('#enemies-container').append($(this).html());
        }
    })
    
    $('#character-box').empty();
});