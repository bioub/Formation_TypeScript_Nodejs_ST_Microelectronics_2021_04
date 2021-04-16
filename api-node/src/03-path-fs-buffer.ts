import fs from 'fs';
import path from 'path';

// assemble mes morceaux de chemin
// en relatif (dépend du CWD)

console.log(path.join('..', 'dist', '01-process.js'));

// assemble mes morceaux de chemin et simplifie les ..
// en absolu (dépend du CWD)
console.log(path.resolve('..', 'dist', '01-process.js'));

// pour ne plus dépend du CWD on peut soit le changer
// process.chdir(__dirname);
// soit utiliser __dirname dans join ou resolve
console.log(path.resolve(__dirname, '..', 'dist', '01-process.js'));

// 3 méthodes pour chaque opération

// synchrone (bloque le thread)
// Mauvaise pratique si besoin de paralléliser
// const retour = fs.readFileSync(params)

const prettierRcPath = path.resolve(__dirname, '..', '.prettierrc');
// const buffer = fs.readFileSync(prettierRcPath);
// const str = buffer.toString('utf-8');
// console.log(str);
const str = fs.readFileSync(prettierRcPath, { encoding: 'utf-8' });
console.log(str);

// asynchrone (basée sur des callbacks)
// fs.readFile(params, (err, retour) => {
//
// });
fs.readFile(prettierRcPath, { encoding: 'utf-8' }, (err, str) => {
  console.log(str);
});

// asynchrone (basée sur des promesses)
// nativement à partir de Node.js 12
// fs.promises.readFile(params)
//   .then((retour) => {})
//   .catch((err) => {})

fs.promises.readFile(prettierRcPath, { encoding: 'utf-8' })
  .then((str) => {
    console.log(str);
  })
  .catch((err) => {})


// voir aussi la lib : fs-extra
