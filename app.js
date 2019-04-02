const shared = require('shared');

const direct = require('direct')

console.log(direct.mapToGood([4, 5, 6]));

console.log('Switching sides');
shared.switchSides();

console.log(direct.mapToGood([4, 5, 6]));
