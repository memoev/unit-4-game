var attack;
var counterAttack;
var defenseCharacter;
var defenseEnemy;
var deathCounter = 0;
var defeatCounter = 0;

var darthVader = {
    attackPower: 12
};
var Yoda = {
    attackPower: 6
};
var darthMaul = {
    attackPower: 10
};
var Luke = {
    attackPower: 6
};

$('.character').click(function () {
    let htmlString = $(this).html();
    
    $('.character').each( function() {
        if ($(this).html() === htmlString) {
            $(this).find('h6').css('background', '#008000');
            $(this).find('h6').css('color', '#ffffff');
            $('#selected-container').append($(this).html());

            if ($(this).find('div').attr('id') === 'darth-vader') {
                attack = darthVader.attackPower;
            } else if ($(this).find('div').attr('id') === 'yoda') {
                attack = Yoda.attackPower;
            } else if ($(this).find('div').attr('id') === 'darth-maul') {
                attack = darthMaul.attackPower;
            } else if ($(this).find('div').attr('id') === 'luke') {
                attack = Luke.attackPower;
            }

        } else {
            $(this).find('h6').css('background', '#B22222');
            $(this).find('h6').css('color', '#ffffff');
            $(this).find('div').wrapAll("<div class='enemy' />"); 
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

    $('#attack').click( function () {

        if (!$('#defender-container').is(':empty')) {

            defenseEnemy = parseInt($('#defender-container').find('.health').text());
            defenseCharacter = parseInt($('#selected-container').find('.health').text());
            defenseEnemy =  defenseEnemy - attack;
            defenseCharacter = defenseCharacter - counterAttack;
            console.log(defenseEnemy);
            console.log(defenseCharacter);
            $('#subtitles').text('You attacked ' + $('#defender-container').find('.character-name').text() + ' for ' + attack + ' damage.');
            attack = attack * 2;
            console.log(attack);
            $('#defender-container').find('.health').html(defenseEnemy);
            $('#selected-container').find('.health').html(defenseCharacter);
            $('#subtitles-2').text($('#defender-container').find('.character-name').text() + ' attacked you back for ' + counterAttack);
    
            if (defenseEnemy <= 0) {
                $('#subtitles').text('You just defeated ' + $('#defender-container').find('.character-name').text() + ', you can choose to fight another enemy.');
                $('#subtitles-2').empty();  
                $('#defender-container').empty();
                deathCounter++
            };
    
            if (defenseCharacter <= 0) {
                $('#subtitles-2').empty();  
                defeatCounter++;
            };
            
        } else {
            alert('Enemy must be selected to attack.')
        };
        
        if (deathCounter >= 3) {
            $('#subtitles').text('You won!! GAME OVER!');
            $('#restart').css('visibility', 'visible');
            $('#attack').off('click');
        }

        if (defeatCounter >= 1) {
            $('#subtitles').text('You have been defeated!! GAME OVER!');
            $('#restart').css('visibility', 'visible');
            $('#attack').off('click');
        }
        
    });
    $('#restart').click(function () { 
        location.reload();
    });
  
});