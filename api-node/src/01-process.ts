import minimist from 'minimist';

// node dist/01-process.js --test truc
console.log(process.argv);

// node dist/01-process.js --test truc
console.log(process.argv.slice(2)); // [ '--test', 'truc' ]
// Bonne pratique : utiliser commander, yargs, minimist

const argv = minimist(process.argv.slice(2));

// node dist/01-process.js --test truc
console.log(argv); // { test: 'truc' }
