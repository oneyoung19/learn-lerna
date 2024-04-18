'use strict';
const moduleC = require('module-c')
console.log(moduleC())

function moduleB() {
  console.log('module-b')
  return 'Hello from moduleB';
}

module.exports = moduleB;
