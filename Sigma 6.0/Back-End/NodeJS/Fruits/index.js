const apple = require('./apple');
const banana = require('./banana');
const orange = require('./orange');

let fruits = [ apple, banana, orange];

// This code imports three fruit modules (apple, banana, orange) and exports them as an object named 'fruits'.

module.exports = fruits;