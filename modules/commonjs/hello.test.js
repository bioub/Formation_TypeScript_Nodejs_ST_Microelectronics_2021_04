const assert = require('assert');
const hello = require('./hello');

try {
  assert.strictEqual(hello('Romain'), 'Hello Romain');
  console.log('Tests hello OK');
} catch (error) {
  console.log('Tests hello FAIL');
  console.log(error.message);
  process.exit(1);
}
