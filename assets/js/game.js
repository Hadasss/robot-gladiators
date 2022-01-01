// Game States:
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  window.alert("Welcome to Robot Gladiators!");

  var fightPrompt = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter Fight or SKIP to choose."
  );

  if (fightPrompt == "FIGHT" || fightPrompt == "fight") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      `${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining`
    );

    if (enemyHealth <= 0) {
      window.alert(`${enemyName} has died!`);
    } else {
      window.alert(`${enemyName} still has ${enemyHealth} health left.`);
    }
    playerHealth = playerHealth - enemyAttack;
    console.log(
      `${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining`
    );

    if (playerHealth <= 0) {
      window.alert(`${playerName} has died!`);
    } else {
      window.alert(`${playerName} still has ${playerHealth} health left.`);
    }
  } else if (fightPrompt == "SKIP" || fightPrompt == "skip") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
      window.alert(playerName + " has chosen to skip the fight!");
      playerMoney = playerMoney - 2;
    } else {
      fight();
    }
  } else {
    window.alert("Please choose a valid option. Try again?");
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
