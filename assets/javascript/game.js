// definition/init of variables
var attack;
var counterAttack;
var defenseCharacter;
var defenseEnemy;
var deathCounter = 0;
// counter to handle game over
var defeatCounter = 0;

// character objects containing attack power attr. counter power gets calculated as multiple of attk power and defense on the value given on the h6 health container
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
// audio element creation
var audioElementTheme = document.createElement("audio");
audioElementTheme.setAttribute('src', '../unit-4-game/assets/tunes/starwars.mp3')

// game begins when character gets selected
$('.character').click(function () {
    // music starts
    audioElementTheme.play();
    // copy of html of element selected
    let htmlString = $(this).html();
    
    $('.character').each( function() {
        // if html variable matches the html of the container it becomes selected character
        if ($(this).html() === htmlString) {
            $(this).find('h6').css('background', '#008000');
            $(this).find('h6').css('color', '#ffffff');
            $('#selected-container').append($(this).html());

            //  assigns attack power based on name
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
            //moves other characters to enemies container
            $(this).find('h6').css('background', '#B22222');
            $(this).find('h6').css('color', '#ffffff');
            $(this).find('div').wrapAll("<div class='enemy' />"); 
            $('#enemies-container').append($(this).html());
        }
    })

    // empties characters after moving everything to selected container and enemies container
    $('#character-box').empty();

    // element on emeny container becomes defender
    $('.enemy').click(function () {
        console.log($('#defender-container').is(':empty'));
        if ($('#defender-container').is(':empty')) {
            let htmlEnemyString = $(this).html();
            console.log(htmlEnemyString);
            $('#defender-container').append(htmlEnemyString)

            // counter attack power calculations
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

            // removing defender from enemies container + clearing subtitles
            $(this).remove();
            $('#subtitles').empty(); 

        } else {
            alert("Don't get ahead of yourself young Padawan. Even though the force is strong in you, take out one enemy at the time.");
        }
    });

    // attack begins
    $('#attack').click( function () {

        if (!$('#defender-container').is(':empty')) {

            // gets remaining health of defender
            defenseEnemy = parseInt($('#defender-container').find('.health').text());
            // gets remaining health of selected character
            defenseCharacter = parseInt($('#selected-container').find('.health').text());
            // awesome math calculations between attack, counter attack and healths
            defenseEnemy =  defenseEnemy - attack;
            defenseCharacter = defenseCharacter - counterAttack;
            console.log(defenseEnemy);
            console.log(defenseCharacter);
            // subtitles for the user to understand what's happening
            $('#subtitles').text('You attacked ' + $('#defender-container').find('.character-name').text() + ' for ' + attack + ' damage.');
            // attack pumping up!!!
            attack = attack * 2;
            console.log(attack);
            // overwrite of new health calculations
            $('#defender-container').find('.health').html(defenseEnemy);
            $('#selected-container').find('.health').html(defenseCharacter);
            // subtitles for the user to understand what's happening
            $('#subtitles-2').text($('#defender-container').find('.character-name').text() + ' attacked you back for ' + counterAttack);
    
            // enemy defeated
            if (defenseEnemy <= 0) {
                $('#subtitles').text('You just defeated ' + $('#defender-container').find('.character-name').text() + ', you can choose to fight another enemy.');
                $('#subtitles-2').empty();  
                $('#defender-container').empty();
                // game over handler
                deathCounter++
            };
    
            // selected character defeated
            if (defenseCharacter <= 0) {
                $('#subtitles-2').empty();  
                // game over handler
                defeatCounter++;
            };
            
        } else {
            // bug handling
            alert('Enemy must be selected to attack.')
        };
        
        // logic to win the game
        if (deathCounter >= 3) {
            $('#subtitles').text('You won!! GAME OVER!');
            $('#restart').css('visibility', 'visible');
            // bug handling
            $('#attack').off('click');
        }

        // logic the loose the game
        if (defeatCounter >= 1) {
            $('#subtitles').text('You have been defeated!! GAME OVER!');
            $('#restart').css('visibility', 'visible');
            // bug handling
            $('#attack').off('click');
        }
        
    });
    // when game is over, able to restart everything from scratch
    $('#restart').click(function () { 
        location.reload();
    });
  
});