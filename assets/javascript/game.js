$('.character-container').click(function () {
    let htmlString = $(this).html();
    $('#character-box').empty();

    $('#selected-character').append(htmlString);
});