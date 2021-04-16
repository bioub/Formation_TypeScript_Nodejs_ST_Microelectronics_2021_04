import minimist from 'minimist';

// node dist/01-process.js --test truc
console.log(process.argv);

// node dist/01-process.js --test truc
console.log(process.argv.slice(2)); // [ '--test', 'truc' ]
// Bonne pratique : utiliser commander, yargs, minimist

const argv = minimist(process.argv.slice(2));

// node dist/01-process.js --test truc
console.log(argv); // { test: 'truc' }

// Current Working Dir
console.log(process.cwd()); // api-node
process.chdir(__dirname); // dist
console.log(process.cwd()); // dist

// Utilisation
console.log(process.cpuUsage());
console.log(process.memoryUsage());
console.log(process.uptime());
console.log(process.getuid());
console.log(process.getgid());

// Variables d'environnement
console.log(process.env);
console.log(process.env.NODE_ENV); // production (en prod)

// de préférence ne lire process.env qu'une seule fois
const { NODE_ENV } = process.env;
// voir aussi les libs: dotenv, cross-env

// Kill le process (avec le code de retour du programme)
// process.exit(0);

// Version de Node
console.log(process.version);

// Platform (win32, linux, darwin)
console.log(process.platform);
