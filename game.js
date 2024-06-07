// Player class definition
class Player {
  // Constructor
  constructor(health = 0, strength = 0, attack = 0) {
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  // Getter methods
  getHealth() {
    return this.health;
  }
  getStrength() {
    return this.strength;
  }
  getAttack() {
    return this.attack;
  }

  // Setter methods
  setHealth(health) {
    this.health = health;
  }
  setStrength(strength) {
    this.strength = strength;
  }
  setAttack(attack) {
    this.attack = attack;
  }

  // Method to take damage and reduce health
  takeDamage(damage) {
    // Health must be >= 0
    this.health = Math.max(0, this.health - damage);
  }

  // Method to calculate attack damage
  calculateDamage() {
    return this.attack * (Math.floor(Math.random() * 6) + 1);
  }

  // Method to calculate defense strength
  calculateDefense() {
    return this.strength * (Math.floor(Math.random() * 6) + 1);
  }
}

// Function to take input for player attributes
function takeInput(player, playerName) {
  const prompt = require("prompt-sync")();

  console.log(`Enter Details of Player ${playerName}:`);
  player.setHealth(parseInt(prompt("Health: ")));
  player.setStrength(parseInt(prompt("Strength: ")));
  player.setAttack(parseInt(prompt("Attack: ")));
  console.log("\n----------------------------");
}

// Function to start and manage the game
function startGame(playerA, playerB) {
  // Player with more health begins the game
  let isPlayerATurn = playerA.getHealth() >= playerB.getHealth();

  let round = 1;

  // Game stops if any player's health reduces to 0
  while (playerA.getHealth() > 0 && playerB.getHealth() > 0) {
    console.log(`Round ${round}:`);

    if (isPlayerATurn) {
      executeTurn(playerA, playerB, "A");
    } else {
      executeTurn(playerB, playerA, "B");
    }

    // Player turns changes after each round
    isPlayerATurn = !isPlayerATurn;

    // Updating Round
    round++;
    console.log("\n----------------------------");
  }

  // Determine and announce the winner
  if (playerA.getHealth() > playerB.getHealth()) {
    console.log("Player A wins!");
  } else {
    console.log("Player B wins!");
  }
}

// Function to execute a single turn of attack and defense
function executeTurn(attacker, defender, attackerName) {
  console.log(
    `${attackerName} attacks, ${attackerName === "A" ? "B" : "A"} defends:`
  );

  // Calculate Attack Damage
  const attackDamage = attacker.calculateDamage();
  // Calculate Defense Strength
  const defenseStrength = defender.calculateDefense();

  console.log(`${attackerName} deals damage of ${attackDamage}`);
  console.log(
    `${
      attackerName === "A" ? "B" : "A"
    } defends with strength of ${defenseStrength}`
  );

  // Defender looses health only if it's Defence Strength is less than the Attackers Attack Damage
  if (attackDamage > defenseStrength) {
    const damage = attackDamage - defenseStrength;
    defender.takeDamage(damage);
    console.log(
      `${
        attackerName === "A" ? "B" : "A"
      }'s health reduces to ${defender.getHealth()}`
    );
  } else {
    console.log(
      `${
        attackerName === "A" ? "B" : "A"
      } takes no damage as defense is stronger`
    );
  }
}

// Main function to start the application
function main() {
  // Create Instance of Player
  const playerA = new Player();
  const playerB = new Player();

  // Taking Players Details
  takeInput(playerA, "A");
  takeInput(playerB, "B");

  console.log("R E S U L T S");
  console.log("\n----------------------------");

  // Check if player's health > 0 to start the game
  if (playerA.getHealth() <= 0 || playerB.getHealth() <= 0) {
    console.log(
      "ERROR :: Health of both players must be greater than 0 to start the game."
    );
    return;
  }

  // Start Game Function
  startGame(playerA, playerB);
}

main();

module.exports = Player;