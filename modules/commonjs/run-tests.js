const fs = require('fs');

fs.readdirSync(__dirname)
  .filter((filename) => filename.endsWith('.test.js'))
  .forEach((filename) => require(__dirname + '/' + filename));
