'use strict';

const moduleD = require('..');
const assert = require('assert').strict;

assert.strictEqual(moduleD(), 'Hello from moduleD');
console.info('moduleD tests passed');
