// function(exports, require, module, __filename, __dirname) {
'use strict';

// const MyMath = require('./my-math');
// console.log(MyMath.sum(1, 2)); // 3

// const sum = require('./my-math').sum;
// console.log(sum(1, 2)); // 3


const assert = require('assert');
const chalk = require('chalk');
const { sum } = require('./my-math');

try {
  assert.strictEqual(sum(1, 2), 3);
  console.log(chalk.bold.green('Tests sum OK'));
} catch (error) {
  console.log(chalk.bold.red('Tests sum FAIL'));
  console.log(error.message);
  process.exit(1);
}


// }
