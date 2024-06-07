const Player = require("../game")

test("Player class methods work correctly", () => {
  const player = new Player(100, 50, 30);

  expect(player.getHealth()).toBe(100);
  expect(player.getStrength()).toBe(50);
  expect(player.getAttack()).toBe(30);

  player.setHealth(90);
  player.setStrength(40);
  player.setAttack(20);

  expect(player.getHealth()).toBe(90);
  expect(player.getStrength()).toBe(40);
  expect(player.getAttack()).toBe(20);

  player.takeDamage(30);
  expect(player.getHealth()).toBe(60);

  const damage = player.calculateDamage();
  expect(damage).toBeGreaterThanOrEqual(20);
  expect(damage).toBeLessThanOrEqual(120);

  const defense = player.calculateDefense();
  expect(defense).toBeGreaterThanOrEqual(40);
  expect(defense).toBeLessThanOrEqual(240);
});
