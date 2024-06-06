# Magical Arina Simulation Game

This is a simple arina simulation game implemented in JavaScript. Two players take turns attacking and defending until one player's health reaches zero. The player with remaining health is declared the winner.

## Features

- Create players with customizable health, strength, and attack attributes.
- Simulate rounds of attack and defense.
- Randomized attack and defense multipliers to add unpredictability to the game.
- Deterministic testing using mocks for random number generation.

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/mdainainahmed/magical-arina.git
   cd magical-arena
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

## Running the Application

To run the application, use the following command:

```sh
npm run start
```

## Some Test Cases

1. **Test Case 1:**
   Player A {
   health: 100,
   strength: 50,
   attack: 30
   }
   Player B {
   health: 90,
   strength: 40,
   attack: 20
   }
   ```sh
   100 50 30 90 40 20
   ```
2. **Test Case 2:**
   Player A {
   health: 100,
   strength: 10,
   attack: 5
   }
   Player B {
   health: 50,
   strength: 5,
   attack: 10
   }
   ```sh
   100 10 5 50 5 10
   ```
3. **Test Case 3:**
   Player A {
   health: -4,
   strength: 10,
   attack: 5
   }
   Player B {
   health: 50,
   strength: 5,
   attack: 10
   }
   ```sh
   100 10 5 50 5 10
   Expected Output: ERROR :: Health of both players must be greater than 0 to start the game.
   ```
