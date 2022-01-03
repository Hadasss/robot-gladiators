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
  while (playerHealth > 0 && enemyHealth > 0) {
    var fightPrompt = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter Fight or SKIP to choose."
    );

    if (fightPrompt == "SKIP" || fightPrompt == "skip") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip this fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("playermoney", playerMoney);
        break;
      }
    }

    // if (fightPrompt == "FIGHT" || fightPrompt == "fight") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      `${playerName} attacked ${enemyName}. ${enemyName} has now ${enemyHealth} health left.`
    );

    if (enemyHealth <= 0) {
      window.alert(`${enemyName} has died!`);
      playerMoney = playerMoney + 20;
      console.log("playermoney", playerMoney);
      // var shop = window.prompt(
      //   `Do you want to REFILL health, UPGRADE attacks or LEAVE shop?`
      // );
      // if (shopping == "LEAVE" || shopping == "leave") {
      //   break;
      // } else if (shopping == "REFILL" || shopping == "refill") {
      //   playerHealth = playerHealth + 10;
      //   playerMoney = playerMoney - 10;
      //   break;
      // } else if (shopping == "UPGRADE" || shopping == "upgrade") {
      //   playerAttack = playerAttack + 2;
      //   playerMoney = playerMoney - 10;
      //   break;
      // } else {
      //   window.alert(`Please choose a valid option.`);
      // }
    } else {
      window.alert(`${enemyName} still has ${enemyHealth} health left.`);
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(
      `${enemyName} attacked ${playerName}. ${playerName} has now ${playerHealth} health remaimimg.`
    );

    if (playerHealth <= 0) {
      window.alert(`${playerName} has died!`);
      break;
    } else {
      window.alert(`${playerName} still has ${playerHealth} health left.`);
    }
  }
};

var endGame = function () {
  window.alert("The game has ended. Let's see how you did!");

  if (playerHealth > 0) {
    window.alert("Great job! you've survived the game! You now have a score");
  } else {
    window.alert("You've lost your robot in battle.");
  }

  var playAgainConfirm = window.confirm(`Would you like to play again?`);

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

startGame = function () {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  debugger;
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert(`Welcome ro Robot Gladiators! Round ${i + 1}`);
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
    } else {
      window.alert(`You have lost your robot in battle! Game Over!`);
      break;
    }
    endGame();
  }

  startGame();
};

startGame();
