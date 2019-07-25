$('.character').click(function () {
    let htmlString = $(this).html();
    //console.log(htmlString);
    //console.log($('#character-box').not($(this)).html());
    
    $('.character').each( function() {
        if ($(this).html() === htmlString) {
            console.log('hey');
            $('#selected-container').append($(this).html());
        } else {
            console.log('not');
            $('#enemies-container').append($(this).html());
        }
    })
    
    $('#character-box').empty();
});