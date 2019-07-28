var attack;
var counterAttack;
var defenseCharacter;
var defenseEnemy;

var darthVader = {
    attackPower: 12
};
var Yoda = {
    attackPower: 6
};
var darthMaul = {
    attackPower: 10 // do not move
};
var Luke = {
    attackPower: 6
};
var deathCounter = 0;

$('.character').click(function () {
    let htmlString = $(this).html();
    //console.log(htmlString);
    //console.log($('#character-box').not($(this)).html());
    
    $('.character').each( function() {
        if ($(this).html() === htmlString) {
            //console.log('hey');
            $(this).find('h6').css('background', '#008000');
            $(this).find('h6').css('color', '#ffffff');
            //console.log($(this).html());
            $('#selected-container').append($(this).html());

            //console.log($(this).find('div').attr('id'));
            if ($(this).find('div').attr('id') === 'darth-vader') {
                attack = darthVader.attackPower;
            } else if ($(this).find('div').attr('id') === 'yoda') {
                attack = Yoda.attackPower;
            } else if ($(this).find('div').attr('id') === 'darth-maul') {
                attack = darthMaul.attackPower;
            } else if ($(this).find('div').attr('id') === 'luke') {
                attack = Luke.attackPower;
            }
            //console.log(attack);

        } else {
            //console.log('not');
            $(this).find('h6').css('background', '#B22222');
            $(this).find('h6').css('color', '#ffffff');
            $(this).find('div').wrapAll("<div class='enemy' />"); 
            //console.log($(this).html());
            $('#enemies-container').append($(this).html());
        }
    })
    
    $('#character-box').empty();

    $('.enemy').click(function () {
        console.log($('#defender-container').is(':empty'));
        if ($('#defender-container').is(':empty')) {
            let htmlEnemyString = $(this).html();
            console.log(htmlEnemyString);
            $('#defender-container').append(htmlEnemyString)

            if ($(this).find('div').attr('id') === 'darth-vader') {
                counterAttack = darthVader.attackPower * 3;
            } else if ($(this).find('div').attr('id') === 'yoda') {
                counterAttack = Yoda.attackPower * 5;
            } else if ($(this).find('div').attr('id') === 'darth-maul') {
                counterAttack = darthMaul.attackPower * 1;
            } else if ($(this).find('div').attr('id') === 'luke') {
                counterAttack = Luke.attackPower * 1;
            }
            console.log(counterAttack);

            $(this).remove();
            $('#subtitles').empty(); 

        } else {
            alert("Don't get ahead of yourself young Padawan. Even though the force is strong in you, take out one enemy at the time.");
        }
    });

    $(':button').click( function () {

        if (!$('#defender-container').is(':empty')) {

            defenseEnemy = parseInt($('#defender-container').find('.health').text());
            defenseCharacter = parseInt($('#selected-container').find('.health').text());
            //console.log(defenseEnemy);        
            defenseEnemy =  defenseEnemy - attack;
            defenseCharacter = defenseCharacter - counterAttack;
            console.log(defenseEnemy);
            console.log(defenseCharacter);
            //console.log(attack);
            $('#subtitles').text('You attacked ' + $('#defender-container').find('.character-name').text() + ' for ' + attack + ' damage.');
            attack = attack * 2;
            console.log(attack);
            $('#defender-container').find('.health').html(defenseEnemy);
            $('#selected-container').find('.health').html(defenseCharacter);
            $('#subtitles-2').text($('#defender-container').find('.character-name').text() + ' attacked you back for ' + counterAttack);
    
            if (defenseEnemy <= 0) {
                $('#subtitles').text('You just defeated ' + $('#defender-container').find('.character-name').text() + ', you can choose to fight another enemy.');
                $('#subtitles-2').text('');  
                $('#defender-container').empty();
                deathCounter++
            };
    
            if (defenseCharacter <= 0) {
                $('#selected-container').empty();
            };
            
        } else {
            alert('Enemy must be selected to attack.')
        };
        
        // console.log($('#enemies-container').is(':empty'));
        // console.log($('#enemies-container'));
        // console.log($('.enemy').html());
        // console.log($('#defender-container').is(':empty'));
        // console.log($('#defender-container').html());
    
        if (deathCounter >= 3) {
            $('#subtitles').text('You won!! GAME OVER!');
        }
        
        // console.log($('#enemies-container').is(':empty'));

    });
  
});