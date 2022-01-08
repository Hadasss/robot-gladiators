console.log("hello");

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

var fightOrSkip = function () {
  var fightPrompt = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter Fight or SKIP to choose."
  );

  fightPrompt = fightPrompt.toLocaleLowerCase();

  if (fightPrompt === "" || fightPrompt === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }

  if (fightPrompt === "skip") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
      window.alert(
        `${playerInfo.name} has decided to skip this fight. Goodbye!`
      );
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      console.log("player money", playerInfo.money);
      return true;
    } else {
      return false;
    }
  }
};

var fight = function (enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    if (fightOrSkip()) {
      break;
    }
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      `${playerInfo.name} attacked ${enemy.name}. ${enemy.name} has now ${enemy.health} health left.`
    );

    if (enemy.health <= 0) {
      window.alert(`${enemy.name} has died!`);
      playerInfo.money = playerInfo.money + 20;
      console.log("player money", playerInfo.money);
      break;
    } else {
      window.alert(`${enemy.name} still has ${enemy.health} health left.`);
    }

    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      `${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} has now ${playerInfo.health} health remaimimg.`
    );

    if (playerInfo.health <= 0) {
      window.alert(`${playerInfo.name} has died!`);
      break;
    } else {
      window.alert(
        `${playerInfo.name} still has ${playerInfo.health} health left.`
      );
    }
  }
};

var endGame = function () {
  window.alert("The game has ended. Let's see how you did!");

  if (playerInfo.health > 0) {
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

var shop = function () {
  var shopOptionPrompt = window.prompt(
    `Do you want to REFILL your health, UPGRADE your attacks or LEAVE the store? Enter 1 to REFILL, 2 to UPGRADE, or 3 to LEAVE.`
  );
  debugger;

  shopOptionPrompt = parseInt(shopOptionPrompt);

  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;

    case 2:
      playerInfo.upgradeAttack();
      break;

    case 3:
      window.alert("Leaving the store.");
      break;

    default:
      window.alert("Please choose a valid option.");
      shop();
      break;
  }
};

var getPlayerName = function () {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }

  console.log(`Your robot's name is ${name}`);
};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health;
    this.money;
    this.attack;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert(`Refilling player's health by 20 for 7 dollars.`);
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert(`You don't have enough money!`);
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert(`Upgrading player's attack by 6 for 7 dollars.`);
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert(`You don't have enough money!`);
    }
  },
};

var enemyInfo = [
  {
    name: "Roberto",
    attack: randomNumber(10, 14),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  },
];

var startGame = function () {
  playerInfo.reset();
  console.log(playerInfo);

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert(`Welcome to Robot Gladiators! Round ${i + 1}`);
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      fight(pickedEnemyObj);

      if (i < enemyInfo.length - 1 && playerInfo.health > 0) {
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before your next round?"
        );
        console.log(enemyInfo);
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert(`You have lost your robot in battle! Game Over!`);
      break;
    }
  }
  endGame();
};

startGame();
