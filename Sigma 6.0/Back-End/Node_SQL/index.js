const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sigma',
  password: 'sigma',
  database: 'sigma6'
});

let q = "INSERT INTO users (id, username, email, password) VALUES ?";
// Example user data
// Uncomment one of the following lines to test with different user data
// let users = ["1234", "john_doe","abc@example.com", "password123"]
// let users = ["1235", "deol_singh","sls@example.com", "password124"]

// let users = ["1236", "piyul_shah","pyls@example.com", "password125"]
// let users = [faker.string.uuid(), faker.internet.userName(), faker.internet.email(), faker.internet.password()];


// let users = [
//   ["1240", "piyuli_shah", "pylis@example.com", "password125"],
//   ["1241", "pikush_chatt", "pki@example.com", "password126"],
//   ["1242", "piyushi_singh", "pyis@example.com", "password127"]
// ];

// usinf faker to generate multiple users
function getRandomUser() {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
}


let data= [];
for (let i = 0; i < 100; i++) {
    data.push(getRandomUser());
}

try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
};

connection.end();
