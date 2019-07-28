# Star Wars RPG
Fun and interactive game for web browsers dynamically updating HTML pages with the jQuery library:pushpin:.  
  
# Instructions :memo:  
  
When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.
The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.
The player chooses an opponent by clicking on an enemy's picture.
Once the player selects an opponent, that enemy is moved to a defender area.  
  
The player will now be able to click the attack button. Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture. The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.  
  
The player will keep hitting the attack button in an effort to defeat their opponent. When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent. The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.  
  
Each character in the game has 1 attribute(s): `Attack Power`. Each time the player attacks, their character's `Attack Power` doubles. For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).  
  
```javascript
// character objects containing attack power attr
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
```
  
The enemy character only has `Counter Attack Power`, which is calculated as a multiple of the character's Attack Power. Unlike the player's Attack Points, `Counter Attack Power` never changes.  
  
```javascript
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
```
  
`Health Points` are parsed from the html input. The `Health Points`, `Attack Power` and `Counter Attack Power` of each character differ.  
  
A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic. Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.