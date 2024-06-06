// CommonJS - every file in node is a module (by default)
// Modules - Encapsulatin Code (only share minimub)

const names = require('./3_2Modu');
//Using desturcture
// const { john, peter } = require('./3_2Modu');
const sayHi = require('./3_3Modu');
const data = require('./alternative_flavor')

console.log(names);

require('./mind-grenade');

sayHi('susen');
// sayHi(john);
sayHi(names.john);
sayHi(names.peter);
console.log(data);