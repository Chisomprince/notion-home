const { faker } = require("@faker-js/faker");
const fs = require("fs");
const path = require("path");

const roles = require("./data").roles;

const generateRandomUser = () => ({
  id: faker.number.int({ min: 1, max: 999 }),
  name: `${faker.person.firstName()} ${faker.person.lastName()}`,
  email: faker.internet.email(),
  role: faker.helpers.arrayElement(roles).value,
});

const users = Array.from({ length: 100 }, generateRandomUser);

const outputFilePath = path.join(__dirname, "users.json");
fs.writeFileSync(outputFilePath, JSON.stringify(users, null, 2));

console.log(`✅ Users data generated and saved to ${outputFilePath}`);
